import React from "react";
import { CountryItem } from "./CountryItem";
import { ICountry } from "./types/type";

interface IProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
  return (
    <ul className="list-group">
      {" "}
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
};
