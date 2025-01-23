export interface Area {
  id: number;
  name: string;
  countryCode: string;
  flag: string | null;
  parentAreaId: number | null;
  parentArea: string | null;
}
