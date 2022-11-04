import React from "react";
import { Color } from "./types/colors";
import { BadgeLabel } from "./types/labelTypes";

interface IProps {
  label: BadgeLabel;
  value: number;
  color: Color;
}

export const Badge = ({ label, value, color }: IProps) => {
  console.log({ label });
  return (
    <span className={`badge bg-${color}  col-2 p-2`}>
      {label}: {value}
    </span>
  );
};
