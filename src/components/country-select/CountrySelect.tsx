import Select from "react-select";
import countries from "world-countries";

// Generate country options with flags
const countryOptions = countries.map((country) => ({
  value: country.cca2, // 2-letter country code
  label: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`}
        alt={`${country.name.common} flag`}
        style={{ width: 20, height: 15, marginRight: 10 }}
      />
      {country.name.common}
    </div>
  ),
}));

type CountrySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const handleChange = (selectedOption: any) => {
    onChange(selectedOption?.value || "");
  };

  return (
    <Select
      options={countryOptions}
      value={countryOptions.find((option) => option.value === value)}
      onChange={handleChange}
      isClearable
      placeholder="Choisis"
      styles={{
        control: (base) => ({
          ...base,
          padding: 0,
          borderRadius: 6,
          height: 40,
          width: 150,
          flexGrow: 1
        }),
      }}
    />
  );
};

export default CountrySelect;
