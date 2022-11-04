import React from "react";
import { Badge } from "./Badge";
import { Color } from "./types/colors";
import { ICountry } from "./types/type";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img
        className="list__picture col-1 p-2"
        src={country.flag}
        alt="flag"
        width="85"
        height="75"
      />
      <p className="list__name col-2 p-2"> {country.name}</p>
      <p className="list__capital col-2 p-2 "> {country.capital}</p>
      <p className="list__region col-2 p-2"> {country.region}</p>
      <Badge label="area" value={country.area} color={Color.Success} />
      <Badge
        label="population"
        value={country.population}
        color={Color.Primary}
      />
    </li>
  );
};
