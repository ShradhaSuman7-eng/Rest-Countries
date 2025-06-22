import { useEffect, useState } from "react";
import Card from "./Card";
import Main from "./Main";

function Body() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(
      "https://restcountries.com/v3.1/independent?status=true"
    );
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Main data={data} />
    </>
  );
}

export default Body;
