import React, { useCallback } from "react";
import { ComboboxItem, Select } from "@mantine/core";

export type AreaSelectorProps = {
  areas: ComboboxItem[];
  defaultValue?: number;
  onAreaChanged: (id: number, name: string) => void;
};

const AreaSelector: React.FC<AreaSelectorProps> = ({ areas, defaultValue, onAreaChanged }) => {
  const handleChange = useCallback((value: string | null, option: ComboboxItem) => {
    if (value === null) {
      return;
    }

    onAreaChanged(+option.value, option.label);
  }, [onAreaChanged]);

  return (
    <Select
      maw={150}
      data={areas}
      placeholder="Select area..."
      defaultValue={defaultValue?.toString()}
      onChange={handleChange}
    />
  );
};

export default AreaSelector;
