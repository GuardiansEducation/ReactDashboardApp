import React, { useCallback } from "react";
import { ComboboxItem, Select } from "@mantine/core";

export type AreaSelectorProps = {
  areas: ComboboxItem[];
  defaultValue?: string;
  onAreaChanged: (id: number, name: string) => void;
};

const AreaSelector: React.FC<AreaSelectorProps> = ({ areas, defaultValue, onAreaChanged }) => {
  const handleChange = useCallback((value: string | null, option: ComboboxItem) => {
    if (value === null) {
      return;
    }

    onAreaChanged(+option.value, option.label);
  }, []);

  return (
    <Select
      maw={150}
      defaultValue={defaultValue}
      placeholder="Select area..."
      data={areas}
      onChange={handleChange}
    />
  );
};

export default AreaSelector;
