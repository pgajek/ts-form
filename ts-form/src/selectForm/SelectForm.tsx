import { useState } from "react";
import Select, { SelectOption } from "../select/Select";

const options = [
  {
    label: "First",
    value: 1,
  },
  {
    label: "Second",
    value: 2,
  },
  {
    label: "Third",
    value: 3,
  },
  {
    label: "Fourth",
    value: 4,
  },
  {
    label: "Fifth",
    value: 5,
  },
];

const SelectForm = () => {
  const [value, setValue] = useState<SelectOption | undefined>(options[0]);
  const [multipleValue, setMultipleValue] = useState<
    SelectOption[] | undefined
  >([options[0]]);
  return (
    <div>
      <Select
        options={options}
        value={value}
        onChange={(option) => setValue(option)}
      />
      <br />
      <Select
        options={options}
        value={multipleValue}
        onChange={(option) => setMultipleValue(option)}
        multiple
      />
    </div>
  );
};

export default SelectForm;
