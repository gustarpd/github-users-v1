import React, { createContext, useState } from "react";


export type Type = {
  userRepos: string;
};

export const Content = createContext({});

export const ContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState({});
  const [ userRepos, setUserRepos] = useState([])

  return (
    <Content.Provider
      value={{
        users,
        setUsers,
        userRepos,
        setUserRepos
      }}
    >
      {children}
    </Content.Provider>
  );
};
