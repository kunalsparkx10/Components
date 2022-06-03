import React, {createContext, useState} from 'react';
import StorageManager from '../storage/StorageManager';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isSignedIn,
        setIsSignedIn,
        isLoading,
        setIsLoading,
        signUp: async (name, email, password) => {
          setIsLoading(true);
          setCurrentUser({
            _id: 1,
            name,
            email,
            pEvents: [],
            profile:
              'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
          setIsSignedIn(true);
          setIsLoading(false);
        },
        signIn: async (username, password) => {
          setIsLoading(true);
          setCurrentUser({
            _id: 1,
            name: 'Test Account',
            email: username,
            name: 'Test Account',
            profile:
              'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            pEvents: [],
          });
          await new Promise(resolve => setTimeout(resolve, 1100));
          setIsSignedIn(true);
          setIsLoading(false);
        },
        signOut: async () => {
          try {
            await StorageManager.clearStore();

            setIsSignedIn(false);
            setCurrentUser({});
          } catch (error) {
            console.log('SignOut:' + error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
