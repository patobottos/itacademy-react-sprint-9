import { MainContainer } from "./Ranking.styled";
import { useMyContext } from "../../application/Provider";
import { Table } from "../../Components/Table/Table";
import Login from "../Login/Login";

const Ranking = () => {
  const [successfulLogin, setSuccessfulLogin] = useMyContext();
  const [persons, setPersons] = useMyContext();
  console.log('persons',persons);

  return (
    <MainContainer>
      <h1>Ranking</h1>
      {successfulLogin ? <Table data={persons} /> : <Login />}
    </MainContainer>
  );
};

export default Ranking;
