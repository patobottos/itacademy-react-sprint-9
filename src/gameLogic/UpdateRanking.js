import { useMyContext } from "../application/Provider";
//import { updateUser, getUserById } from "../application/api";

const UpdateRanking = (winner) => {
  const [userState, setUserState] = useMyContext();
  const savedUserData = userState.persons[userState.userIndex];
  const currentUserId = savedUserData.index;
  const totalVictories = savedUserData.totalVictories;
  const totalGames = savedUserData.totalGames;

  let newTotalGames, newTotalVictories;

  // WE UPDATE VICTORIES
  if (winner === "human") {
    newTotalVictories = totalVictories + 1;
  } else {
    newTotalVictories = totalVictories;
  }

  // WE UPDATE GAMES
  newTotalGames = totalGames + 1;

  const playerUpdatedData = {
    ...savedUserData,
    totalGames: newTotalGames,
    totalVictories: newTotalVictories,
  };

  const dataToUpdate = [currentUserId, playerUpdatedData];

  /*
  // WE SEND NEW INFO TO FIREBASE
  updateUser(currentUserId, playerUpdatedData);
  console.log("playerUpdatedData", playerUpdatedData);

  // WE CHECK IF DATA IS UPDATED OK
  const checkingUpdatedUser = getUserById(currentUserId);
  console.log("checkingUpdatedUser", checkingUpdatedUser);
*/

  return dataToUpdate;
};

export default UpdateRanking;
