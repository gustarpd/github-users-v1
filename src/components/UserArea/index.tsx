import * as C from "./style"
import { Image } from "../../App";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const UserArea = (props: Image) => {
const navigate = useNavigate()

const handleParamsButton = () => {
  navigate('/repos')
}
return(
    <C.User>
      <C.UserInfos src={props.url}></C.UserInfos>
      <C.UserDetails>
        {props.name} {`(${props.username})`}
      </C.UserDetails>
      <C.UserBio>{props?.bio}</C.UserBio>
      <C.UserList>
        <div>
          <p onClick={handleParamsButton}>777</p>
          <span>Seguidotes</span>
        </div>
        <div>
          <p>432</p>
          <span>Seguidotes</span>
        </div>
        <div>
          <p>432</p>
          <span>Respositorios</span>
        </div>
      </C.UserList>
    </C.User>
  );
};
