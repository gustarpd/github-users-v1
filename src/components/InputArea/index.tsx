import * as C from "./style";
import { useState, useContext } from "react";
import client from '../../services/client'
import { context } from "../../context";



export const InputArea = () => {
  const ctx = useContext(context)
  const [searchValue, setSearchValue] = useState("");
 
  async function getUser(): Promise<void> {
    try {
      const response = await client.get(`/${searchValue}`)
      ctx.setUserData(response.data)
    }catch(err) {
     console.log(err)
    }
  };
  console.log(ctx)
  return (
    <>
      <C.InputArea>
        <C.Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></C.Input>
        <C.Button onClick={getUser}>Procurar</C.Button>
      </C.InputArea>
    </>
  );
};
