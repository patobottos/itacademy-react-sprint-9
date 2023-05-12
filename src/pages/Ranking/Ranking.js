import { MainContainer } from "./Ranking.styled";
import { useMyContext } from "../../application/Provider";
import { Table } from "../../Components/Table/Table";
import Login from "../Login/Login";

const Ranking = () => {
  const [userState, setUserState] = useMyContext();
  //console.log('persons', userState.persons);
  //console.log('userState.successfulLogin en Ranking',userState.successfulLogin);

  return (
    <MainContainer>
      <h1>Ranking</h1>
      {userState.successfulLogin ? <Table data={userState.persons} /> : <Login />}
    </MainContainer>
  );
};

export default Ranking;
