import { useLocation } from "react-router-dom";

function CountryDetailPage() {
  const location = useLocation();
  const countryData = location.state;

  console.log(countryData);

  return (
    <div className="country-container">
      <div>
        <img className="countryImage" src={countryData.flags?.png} alt="flag" />
      </div>

      <div className="container">
        <div className="first-div">
          <h2>{countryData.name?.common}</h2>
        </div>

        <div className="details-container">
          <div className="second-div">
            <p>
              Native Names:{" "}
              {Object.values(countryData.name.nativeName || {})
                .map((lang) => lang.common)
                .join(", ")}
            </p>

            <p>Population: {countryData.population}</p>
            <p>Region: {countryData.region}</p>
            <p>Sub region: {countryData.subregion}</p>
            <p>Capital: {countryData.capital?.[0] || "N/A"}</p>
          </div>

          <div className="third-div">
            <p>Top Level Domain: {countryData.tld?.[0] || "N/A"}</p>

            <p>
              Currencies :{" "}
              {Object.values(countryData.currencies).map((curr, index) => (
                <span key={index}>
                  {curr.name} ({curr.symbol}){" "}
                </span>
              ))}
            </p>

            <p>
              Language:{" "}
              {Object.values(countryData.languages)
                .map((curr) => curr)
                .join(", ")}
            </p>
          </div>
        </div>
        <p className="border-btn">
          Border Countries:{" "}
          {Array.isArray(countryData.borders)
            ? countryData.borders.map((curr) => (
                <button key={curr}>{curr} </button>
              ))
            : "None"}
        </p>
      </div>
    </div>
  );
}

export default CountryDetailPage;
