import iso from "iso-3166-1";

export type CountryFlagProps = {
  countryFullName: string;
};

const defaultFlagCode = "xx";

const CountryFlag: React.FC<CountryFlagProps> = ({ countryFullName }) => {
  const unknownCountries: Map<string, string> = new Map([
    ["England", "gb-eng"],
    ["Wales", "gb-wls"],
    ["Scotland", "gb-sct"],
    ["NorthernIreland", "gb-nir"],
    ["DR Congo", "cd"],
  ]);

  const countryCode = () => {
    const countryCode = iso.whereCountry(countryFullName)?.alpha2.toLocaleLowerCase();

    if (countryCode === undefined) {
      const gbRegion = unknownCountries.get(countryFullName);

      return gbRegion != undefined ? gbRegion : defaultFlagCode;
    }

    return countryCode;
  };

  return <span className={`fi fi-${countryCode()}`} />;
};

export default CountryFlag;
