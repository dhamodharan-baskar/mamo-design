import React from 'react';

const Dashboard = (props) => {
  const {
    history
  } = props

  return (
    <div>
      Dashboard
      <button onClick={() => history.replace('/invoice')}>onclick</button>
    </div>
  );
};

export default Dashboard;