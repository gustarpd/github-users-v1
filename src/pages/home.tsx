import { useContext } from "react";
import { UserArea } from "../components/UserArea";
import { context  } from "../context";


export type Image = {
    name: string;
    url: string;
    bio: string;
    username: string;
  };
  
export const Home = () => {
  const ctx = useContext(context)
    return (
        <UserArea
        url={ctx.user.avatar_url}
        name="Gustavo Alves Silva"
        bio="lorem ipsum its a lorem"
        username="Gustta03"
      ></UserArea>
    )
}

