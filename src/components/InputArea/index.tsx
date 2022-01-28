import * as C from "./style";
import { useState, useContext } from "react";
import client from "../../services/client";
import { Content} from "../../contexts/Context";



export const InputArea = () => {
  const ctx = useContext(Content)
  const [searchValue, setSearchValue] = useState("");
 
  async function getUser(): Promise<void> {
    try {
      const response = await client.get(`/${searchValue}`)
      const repos = await client.get(`/${searchValue}`)
      ctx.setUsers(response.data)
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
 