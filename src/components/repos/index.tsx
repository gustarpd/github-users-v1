import { Repos } from "./style";
import { TitleRepo } from "./style";
import { useParams, useNavigate } from 'react-router-dom'
export const Repo = () => {
    const params = useParams()
    const navigate = useNavigate()
   
    const handleBackButton = () => {
      navigate(-1)
    }
     return (
     <Repos>
        <TitleRepo>REPOSITORIOS</TitleRepo>
        <p onClick={handleBackButton}>Voltar</p>
     </Repos>
    );
  };
  