import React from 'react';

function RantItem({ rant }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{rant.name}</h3>
      <p className="text-gray-700">{rant.message}</p>
    </div>
  );
}

export default RantItem;
