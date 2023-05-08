import "./Table.css";

export const Table = () => {
  const headers = [
    { id: 1, key: "RANK", label: "Rank" },
    { id: 2, key: "USERNAME", label: "User name" },
    { id: 3, key: "TOTALMATCHES", label: "Total Matches" },
    { id: 4, key: "TOTALVICTORIES", label: "Total Victories" },
    { id: 5, key: "TOTALPOINTS", label: "Total Points" },
    { id: 6, key: "WINPERCENTAGE", label: "Winning %" },
  ];

  const data = [
    {
      ID: 1,
      USERNAME: "Max Headroom",
      TOTALMATCHES: 30,
      TOTALVICTORIES: 15,
      TOTALPOINTS: 15,
      WINPERCENTAGE: 50,
    },
    {
      ID: 2,
      USERNAME: "Joan Colomo",
      TOTALMATCHES: 30,
      TOTALVICTORIES: 20,
      TOTALPOINTS: 20,
      WINPERCENTAGE: 66,
    },
    {
      ID: 3,
      USERNAME: "Manolo Del Bombo",
      TOTALMATCHES: 4,
      TOTALVICTORIES: 1,
      TOTALPOINTS: 1,
      WINPERCENTAGE: 25,
    },
    {
      ID: 4,
      USERNAME: "Floquet de Neu",
      TOTALMATCHES: 2,
      TOTALVICTORIES: 0,
      TOTALPOINTS: 0,
      WINPERCENTAGE: 0,
    },
    {
      ID: 5,
      USERNAME: "Xirope",
      TOTALMATCHES: 20,
      TOTALVICTORIES: 10,
      TOTALPOINTS: 10,
      WINPERCENTAGE: 50,
    },
  ];

  // WE RANK RESULTS
  const copyData = [...data];
  const rankedData = copyData.sort((a, b) => {
    return b.TOTALPOINTS - a.TOTALPOINTS;
  });

  let RANK = 1;
  for (let i = 0; i < rankedData.length; i++) {
    // increase rank only if current score less than previous
    if (i > 0 && rankedData[i].TOTALPOINTS < rankedData[i - 1].TOTALPOINTS) {
      RANK++;
    }
    rankedData[i].RANK = RANK;
  }
  
  const shownData = rankedData.slice(0, 4);
  console.log('shownData', shownData);

  //console.log(data[1].WINPERCENTAGE)

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
