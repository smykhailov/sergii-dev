import React, { ChangeEvent, FC } from "react";
import { Error, FormControl } from "@components/common/form-control";

const TextInput: FC<{
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  title: React.ReactNode | string;
  subTitle: React.ReactNode | string;
  errorMessage?: string;
}> = ({ onChange, name, value, title, subTitle, errorMessage }) => {
  return (
    <div>
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
      {errorMessage && <Error className="error">{errorMessage}</Error>}
    </div>
  );
};

export default TextInput;
