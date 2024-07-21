import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Redirect } from 'expo-router';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Redirect to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
