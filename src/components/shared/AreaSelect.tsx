import React, { useCallback } from "react";
import { ComboboxItem, Select } from "@mantine/core";

export interface AreaSelectorProps {
  areas: ComboboxItem[];
  selectedValue?: number;
  onAreaChanged: (id: number, name: string) => void;
}

const AreaSelect: React.FC<AreaSelectorProps> = ({ areas, selectedValue, onAreaChanged }) => {
  const handleChange = useCallback(
    (value: string | null, option: ComboboxItem) => {
      if (value === null) {
        return;
      }

      onAreaChanged(+option.value, option.label);
    },
    [onAreaChanged]
  );

  return (
    <Select
      maw={150}
      data={areas}
      value={selectedValue?.toString()}
      placeholder="Select area..."
      onChange={handleChange}
    />
  );
};

export default AreaSelect;
