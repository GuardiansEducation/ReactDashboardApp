export interface ChildArea {
  id: number;
  name: string;
  countryCode: string;
  flag: string | null;
  parentAreaId: number;
  parentArea: string | null;
}
