import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you use Redux for state management

const ProtectedRoute = ({ Component }) => {
  const users = useSelector((state) => state.auth.users); // Assuming auth state is stored in Redux
  const navigate = useNavigate();

  useEffect(() => {
    if (!users) {
      navigate('/'); // Redirect to login page if not authenticated
    }
  }, [users, navigate]);

  if (!Component) {
    console.error('Invalid Component passed to ProtectedRoute');
    return null;
  }

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
