import { default as MuiTextField } from "@mui/material/TextField"; // using an alias
import { FC } from "react";
import {
  TElementRenderer,
  ISectionElement,
  ITextField,
} from "../form.interfaces";
import { useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  readonly?: boolean;
}

const TextField: FC<IProps> = (props) => {
  const {
    register,
    //formState: { errors },
  } = useFormContext();

  return (
    <MuiTextField
      type="text"
      //name={props.name}
      label={props.label}
      placeholder={props.placeholder ?? props.label}
      disabled={props.readonly ?? false}
      {...register(props.name)}
    />
  );
};

export const renderTextField: TElementRenderer = (
  element: ISectionElement,
  key: string
) => {
  const textFieldProps = element as ITextField;
  return <TextField key={key} {...textFieldProps} />;
};
