
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/common/Header';
import { db } from '../firebase';
import Loader from '../components/common/Loader';
import PodcastCard from '../components/Podcasts/PodcastCard';
import { collection, getDocs, query, where } from 'firebase/firestore';

function Profile() {

  const user = useSelector((state) => state.user.user);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      const q = query(
        collection(db, "podcasts"),
        where("createdBy", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      const docsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPodcasts(docsData);
    };

    if (user) {
      fetchDocs();
    }

  }, [user]);

  if (!user) {
    return <Loader />
  }

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <PodcastCard title={user.name} displayImage={user.profileImage} />
        </div>

        <h1 style={{ marginBottom: "1rem", marginTop:"0" }}>My Podcasts</h1>
        <div className="podcast-flex">
          {podcasts.length == 0 ? (
            <p style={{ fontSize: "1.2rem" }}>No Podcasts Available</p>
          ) : (
            <>
              {podcasts.map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  id={podcast.id}
                  title={podcast.title}
                  displayImage={podcast.displayImage}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default Profile