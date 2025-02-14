import { ComboboxItem } from "@mantine/core";
import { Area } from "@types";

class ComboboxItemFactory {
  create(areas: Area[]): ComboboxItem[] {
    const result = areas.map<ComboboxItem>((x) => {
      return {
        value: x.id,
        label: x.name,
      };
    });

    return result;
  }
}

export default new ComboboxItemFactory();
