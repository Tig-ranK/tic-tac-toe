export const checkForWin = (tiles) => {
   const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   const lines = winningLines.map((line) => line.map((i) => tiles[i].mark));

   if (
      lines.some(
         (line) => line[0] === line[1] && line[1] === line[2] && line[2]
      )
   )
      return true;

   return false;
};
