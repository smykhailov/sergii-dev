import { ChangeEvent, PropsWithChildren } from "react";
import { FormControl } from "@components/common/form-control";

interface Props<T extends { [key: string]: string }> {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string;
  title: React.ReactNode | string;
  subTitle: React.ReactNode | string;
  data: T;
}

const SelectInput = <T extends { [key: string]: string }>(
  props: PropsWithChildren<Props<T>>
) => {
  const { name, value, title, subTitle, onChange, data } = props;
  return (
    <FormControl tabIndex={0}>
      <label htmlFor={name}>{title}</label>
      <span>{subTitle}</span>
      <select name={name} id={name} onChange={onChange} value={value}>
        {Object.getOwnPropertyNames(data).map(item => (
          <option value={item} key={item}>
            {data[item]}
          </option>
        ))}
      </select>
    </FormControl>
  );
};

export default SelectInput;
