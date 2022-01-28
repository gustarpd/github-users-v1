import * as C from "./style";
import Logo from "../../assets/GitHub-Mark-64px.png";

export const Header = () => {
  return (
    <C.Header>
      <img src={Logo}></img>
      <h3> | PROFILES</h3>
    </C.Header>
  );
};
