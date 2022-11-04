import { CountryList } from "./components/CountryList";
import { Color } from "./components/types/colors";
import { ICountry } from "./components/types/type";
import countries from "./country-data.json";
import { transformCountries } from "./mappers/transformCountries";

export const App = () => {
  const transformedCountries: ICountry[] = transformCountries(countries);

  return (
    <div className="container">
      <h1 className={`px-1 text-${Color.Primary}`}>Country list</h1>

      <CountryList countries={transformedCountries} />
    </div>
  );
};
