import React, { useEffect, useState } from 'react';
import { getPlayers } from '../api/playerData';
import { useAuth } from '../utils/context/authContext';
import PlayerCard from '../components/PlayerCard';

export default function Team() {
  const [players, setPlayers] = useState([]);

  const { user } = useAuth();

  const getAllPlayers = () => {
    getPlayers().then(setPlayers);
  };

  useEffect(() => {
    getAllPlayers();
  }, [user]);

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);
  console.warn(user.uid);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <h1>Team</h1>
        {players.map((player) => (
          <PlayerCard key={player.firebaseKey} playerObj={player} onUpdate={getAllPlayers} />
        ))}
      </div>

    </div>
  );
}
