


"use client"
import React from 'react';
import {useEffect, useState } from 'react';


 function UserComponent() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
        const data = await response.json();
        setUserId(data.id);
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };
       
    fetchUserId();
  }, []);

  return (
    <div>
        <p>Loading user ID...</p>
        <h2>Your Id :- 30</h2>
        <h1>Username:- Amelia_Hintz{userId?.profile?.username}</h1>
        <p>firstName: Crystel</p>
        <p>lastName: Brakus</p>
        <p>email: Kale_Schneider42@gmail.com</p>

        
        <p>Job_Tittle:-Chief Accountability Manager {userId?.Bio}</p>
    
    </div>
  );
}

export default UserComponent;
