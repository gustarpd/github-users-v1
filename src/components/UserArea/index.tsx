import * as C from "./style"
import { Image } from "../../App";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

export const UserArea = (props: Image) => {
const navigate = useNavigate()
const [loading, setLoading] = useState(true)
const handleParamsButton = () => {
  navigate('/repos')
}

return<>

  {props.name ?
  
    <C.User>
    <C.UserInfos src={props.url}></C.UserInfos>
    <C.UserDetails>
      {props.name} {`(${props.username})`}
    </C.UserDetails>
    <C.UserBio>{props?.bio}</C.UserBio>
    <C.UserList>
      <div>
        <p>{props.follower}</p>
        <span>Seguidores</span>
      </div>
      <div>
        <p>{props.follow}</p>
        <span>Seguindo</span>
      </div>
      <div>
        <p onClick={handleParamsButton} className="reposPage">{props.repos}</p>
        <span>Respositorios</span>
      </div>
    </C.UserList>
  </C.User>
  : undefined
  }
  
  </>
};
