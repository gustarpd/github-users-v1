import { useContext } from "react";
import { UserArea } from "../components/UserArea";
import { Content, ContextProvider } from "../contexts/Context";

export const Home = () => {
  const ctx = useContext(Content);
  return (
    <UserArea
      url={ctx.users.avatar_url}
      name={ctx.users.name}
      bio={ctx.users.bio}
      username={ctx.users.login}
      follower={ctx.users.followers}
      follow={ctx.users.following}
      repos={ctx.users.public_repos}
    ></UserArea>
  );
};
