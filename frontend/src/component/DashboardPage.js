import React from 'react';
import { useSelector } from 'react-redux';

function DashboardPage() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Your dashboard content goes here</p>
    </div>
  );
}

export default DashboardPage;
