import React from 'react';

const Dashboard = (props) => {
  const {
    navigate
  } = props
  return (
    <div>
      Dashboard
      <button onClick={() => navigate('/invoice')}>onclick</button>
    </div>
  );
};

export default Dashboard