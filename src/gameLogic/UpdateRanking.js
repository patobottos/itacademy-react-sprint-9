import { useMyContext } from "../application/Provider";

const UpdateRanking = () => {
  const [userState, setUserState] = useMyContext();

  const savedUserData = userState.persons[userState.userIndex];

  console.log('savedUserData',savedUserData);

  return (
    <div></div>
  )
    
}

export default UpdateRanking;