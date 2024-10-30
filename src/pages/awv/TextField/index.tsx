//import { default as MuiTextField } from "@mui/material/TextField"; // using an alias
import { FC } from "react";
import {
  TElementRenderer,
  ISectionElement,
  ITextField,
} from "../form.interfaces";
import { useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  readonly?: boolean;
}

const MyTextField: FC<IProps> = (props) => {
  const {
    register,
    //formState: { errors },
  } = useFormContext();

  return (
    <TextField
      type="text"
      //name={props.name}
      label={props.label}
      placeholder={props.placeholder ?? props.label}
      disabled={props.readonly ?? false}
      {...register(props.name)}  // this will yield {"name": "props.name", ref: f(), onBlur: f(), onChangeL f() }
    />
  );
};

export const renderTextField: TElementRenderer = (
  element: ISectionElement,
  key: string
) => {
  const textFieldProps = element as ITextField;
  return <MyTextField key={key} {...textFieldProps} />;
};
