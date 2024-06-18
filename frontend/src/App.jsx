import React, { useEffect, useState } from 'react';
import AddRant from './components/AddRant';
import RantList from './components/RantList';
import axios from 'axios';

function App() {
  const [rants, setRants] = useState([]);

  useEffect(() => {
    const fetchRants = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setRants(response.data);
      } catch (error) {
        console.error('Error fetching rants:', error);
      }
    };

    fetchRants();
  }, []);

  const addRant = (newRant) => {
    setRants([newRant, ...rants]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Rant App</h1>
        <div className="mb-8">
          <AddRant addRant={addRant} />
        </div>
        <RantList rants={rants} />
      </div>
    </div>
  );
}

export default App;
