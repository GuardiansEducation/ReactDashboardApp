import React from "react";
import { ComboboxItem, Select } from "@mantine/core";

export type AreaSelectorProps = {
  areas: ComboboxItem[];
  onAreaChanged: (value: string | null) => void;
};

const AreaSelector: React.FC<AreaSelectorProps> = ({ areas, onAreaChanged }) => {
  const defaultValue = areas.length > 0 ? areas[0].label : null;
  
  return <Select data={areas} defaultValue={defaultValue} onChange={onAreaChanged} />;
};

export default AreaSelector;
