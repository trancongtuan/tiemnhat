import React, { createContext, FC, useContext, useState } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
interface IAuth {
  authenticate?: UseMutationResult<unknown, Error, { username: string; password: string }>;
  logout: () => void;
  isAuthenticated?: boolean;
  profile: {
    id: string;
    display_name: string;
    custom_url: string;
    twitter: string;
    email: string;
    bio: string;
    website: string;
    address: string;
    profile_pic: { url: string };
  };
}
const DEFAULT_PROFILE = {
  id: '',
  display_name: 'a',
  custom_url: '',
  twitter: '',
  email: '',
  bio: '',
  website: '',
  address: '',
  profile_pic: { url: '' },
};

const AuthContext = createContext<IAuth>({
  profile: DEFAULT_PROFILE,
  logout: () => null,
});

export const AuthProvider: FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  const [profile, setProfile] = useState<any>(DEFAULT_PROFILE);
  const _logout = () => {
    alert('a')
    debugger;
    setProfile({ ...DEFAULT_PROFILE, display_name: 'tuan.tc' });
  };
  return (
    <AuthContext.Provider
      value={{
        logout: _logout,
        profile: profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = (): IAuth => useContext(AuthContext);
