import { useState, createContext } from "react";

const dataUser = {
    user: ''
}

export type C= {
  [

}
export const context = createContext(dataUser)

export const CreateProvider: React.FC = ({ children })  => {
  const [userData, setUserData] = useState<C>({})

  return (  
      <context.Provider value={{
          userData,
          setUserData
      }}>
          {children}
      </context.Provider>
  )
}