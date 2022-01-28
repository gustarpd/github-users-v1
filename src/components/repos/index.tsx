import { Repos } from "./style";
import { TitleRepo } from "./style";
import { RepoContainer } from "./style";
import { useParams, useNavigate } from "react-router-dom";


export type Items = {
  name: string;
  id: string;
  description: string;
};

export const Repo = (props: any) => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  console.log(props);
  return (
    <Repos>
      <TitleRepo>REPOSITORIOS de {props.name}</TitleRepo>
      <RepoContainer>
       
      </RepoContainer>
      <p onClick={handleBackButton}>Voltar</p>
    </Repos>
  );
};
