import { ChildArea } from "./ChildArea";

export interface RootArea {
  id: number;
  name: string;
  code: string;
  flag: string | null;
  parentAreaId: number | null;
  parentArea: string | null;
  childAreas: ChildArea[];
}
