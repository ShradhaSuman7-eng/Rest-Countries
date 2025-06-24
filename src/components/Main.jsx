import { useState, useEffect } from "react";
import Card from "./Card";


function Main({ data }) {
  const [searchText, setSearchText] = useState("");
  const [selectedData, setSelectedData] = useState(data);


  useEffect(() => {
    const filtered = data.filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );
    setSelectedData(filtered);
  }, [searchText, data]);


  function filterData() {
    const newRegion = new Set(data.map((curr) => curr.region));
    return Array.from(newRegion);
  }
  const regionData = filterData();


  const optionEle = regionData.map((region) => (
    <option key={region} value={region}>
      {region}
    </option>
  ));

  function handleRegionChange(event) {
    let currData = event.target.value;

    let filterData = data.filter((filerdata) => filerdata.region === currData);
    setSelectedData(filterData);
  }

  return (
    <>
      <div className="filter-section">
        <input
          id="searchCountry"
          type="text"
          name="searchCountry"
          className="search-input"
          placeholder="Search for a country..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div>
          <label htmlFor="selectCountry">Filter By Region</label>
          <select
            id="selectCountry"
            name="region"
            onChange={handleRegionChange}
          >
            {optionEle}
          </select>
        </div>
      </div>

      <div className="main-card-container">
        {selectedData.map((country, index) => (
          <Card
            countryData={country}
            key={index}
            name={country.name.common}
            src={country.flags.png}
            Population={country.population}
            Region={country.region}
            Capital={country.capital?.[0] || "N/A"}
          />
        ))}
      </div>
    </>
  );
}

export default Main;
