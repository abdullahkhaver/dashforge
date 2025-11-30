import { useState, useEffect } from 'react';
import { authService } from './authService';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = authService.getToken();
    setAuthenticated(!!token);
  }, []);

  const login = async (username, password) => {
    const data = await authService.login(username, password);
    authService.setToken(data.token);
    setAuthenticated(true);
    return data;
  };

  const logout = () => {
    authService.logout();
    setAuthenticated(false);
  };

  return { authenticated, login, logout };
}
