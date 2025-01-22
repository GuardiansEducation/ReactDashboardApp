import { ChildArea } from "../ChildArea";
import { AreaFilters } from "./AreaFilters";

export interface Areas {
  count: number;
  filters: AreaFilters;
  areas: ChildArea[];
}
