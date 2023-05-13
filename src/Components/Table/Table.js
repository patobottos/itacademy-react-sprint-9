import "./Table.css";

export const Table = ({data}) => {
  const headers = [
    { id: 1, key: "rank", label: "Rank" },
    { id: 2, key: "username", label: "User name" },
    { id: 3, key: "totalMatches", label: "Total Matches" },
    { id: 4, key: "totalVictories", label: "Total Victories" },
    { id: 5, key: "winPercentage", label: "Winning %" },
  ];

  /* DATABASE FOR TESTS 
  
  const data = [
    {
      ID: 1,
      USERNAME: "Max Headroom",
      TOTALMATCHES: 30,
      TOTALVICTORIES: 15,
    },
    {
      ID: 2,
      USERNAME: "Joan Colomo",
      TOTALMATCHES: 32,
      TOTALVICTORIES: 20,
    },
    {
      ID: 3,
      USERNAME: "Manolo Del Bombo",
      TOTALMATCHES: 4,
      TOTALVICTORIES: 1,
    },
    {
      ID: 4,
      USERNAME: "Floquet de Neu",
      TOTALMATCHES: 2,
      TOTALVICTORIES: 0,
    },
    {
      ID: 5,
      USERNAME: "Xirope",
      TOTALMATCHES: 20,
      TOTALVICTORIES: 10,
    },
  ];
*/


  //WE ADD WINPERCENTAGE
  const copyData = [...data];
  

  copyData.forEach((item) => {
    item.winPercentage = Math.round(item.totalVictories/item.totalMatches * 100);
  });
  //console.log('copyData luego de forEach', copyData);

  // WE RANK RESULTS
  const rankedData = copyData.sort((a, b) => {
    return b.winPercentage - a.winPercentage;
  });

  const rankedWithWinPercentage = rankedData.map(item => {
    if (item.totalMatches === 0) {
      return item.winPercentage = 0
    } else {
      return item.winPercentage = Math.round(item.totalVictories/item.totalMatches * 100);
    }
  });
  //console.log('rankedWithWinPercentage',rankedWithWinPercentage);


  let rank = 1;
  for (let i = 0; i < rankedData.length; i++) {
    // increase rank only if current score less than previous
    if (i > 0 && rankedData[i].winPercentage < rankedData[i - 1].winPercentage) {
      rank++;
    }
    rankedData[i].rank = rank;
  }
  
  const shownData = rankedData.slice(0, 4);
  //console.log('shownData', shownData);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              <span className="tableHeader">{header.label}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {shownData.map((row, index) => (
          <tr key={index}>
            {headers.map((header, index) => {
              return <td key={index}>{row[header.key]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
