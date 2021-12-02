import { ChangeEvent, FC } from "react";
import FormControl from "@components/common/form-control";

const TextInput: FC<{
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  title: React.ReactNode | string;
  subTitle: React.ReactNode | string;
}> = ({ onChange, name, value, title, subTitle }) => {
  return (
    <FormControl tabIndex={0}>
      <label htmlFor={name}>{title}</label>
      <span>{subTitle}</span>
      <input
        name={name}
        id={name}
        type="text"
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
};

export default TextInput;
