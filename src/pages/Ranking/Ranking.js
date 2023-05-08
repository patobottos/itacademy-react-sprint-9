import { MainContainer } from "./Ranking.styled";
import { useMyContext } from "../../application/Provider";
import { Table } from "../../Components/Table/Table";
import Login from "../Login/Login";

const Ranking = () => {
  const [successfulLogin, setSuccessfulLogin] = useMyContext();

  return (
    <MainContainer>
      <h1>Ranking</h1>
      {successfulLogin ? <Table /> : <Login />}
    </MainContainer>
  );
};

export default Ranking;
