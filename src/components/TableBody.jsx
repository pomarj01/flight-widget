import { useState, useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = () => {
  const [flights, setFlights] = useState(null);

  const getFlights = () => {
    fetch("http://localhost:8000/flights")
      .then((response) => response.json())
      .then((flights) => {
        const sortDeparture = Object.values(flights.data)
          .sort(({ departing: a }, { departing: b }) => (
            a > b
              ? 1
              : a < b
                ? -1
                : 0
            )
          )
        return setFlights(sortDeparture)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFlights();
  }, []);
  

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;
