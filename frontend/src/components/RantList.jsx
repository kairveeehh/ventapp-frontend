import React from 'react';
import RantItem from './RantItem';

function RantList({ rants }) {
  return (
    <div className="space-y-4">
      {rants.map((rant) => (
        <RantItem key={rant._id} rant={rant} />
      ))}
    </div>
  );
}

export default RantList;
