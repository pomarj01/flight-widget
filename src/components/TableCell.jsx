import TableLetter from "./TableLetter";

const TableCell = ({ word }) => {
  return (
    // Adding timing effect and make an array from the word and map each letter
    <td>
      {Array.from(word).map((letter, index) => (
        <TableLetter key={index} letter={letter} index={index} />
      ))}
    </td>
  );
};

export default TableCell;
