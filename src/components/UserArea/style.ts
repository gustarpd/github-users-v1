import styled from "styled-components";

export const User = styled.div`
  background-color: #fff;
  display: flex;
  
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.16);
  max-width: 690px;
  height: 450px;
  margin: 0 auto;

`;

export const UserInfos = styled.img`
  margin: 10px 0 0 0;
  background-color: red;
  border-radius: 50%;
  width: 170px;
  height: 170px;
`;

export const UserDetails = styled.h3`
margin: 40px 0 0 0;
div{
margin: 40px 0 0 0;
}
`

export const UserBio = styled.h4`
margin: 20px 0 0 0;
`

export const UserList = styled.div`
 display: flex;
 align-items: center;
 margin: 30px 0 0 0;
 justify-content: space-around;
 width: 100%;

 div{
     text-align: center;
     margin: 0 10px 0 0;
 }
`