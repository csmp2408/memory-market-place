import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user in localStorage
    const checkAuth = () => {
      const savedUser = localStorage.getItem('storyswap_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setIsLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('user-auth-changed', handleAuthChange);
    return () => window.removeEventListener('user-auth-changed', handleAuthChange);
  }, []);

  const logout = () => {
    localStorage.removeItem('storyswap_user');
    setUser(null);
    window.dispatchEvent(new Event('user-auth-changed'));
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    logout
  };
};