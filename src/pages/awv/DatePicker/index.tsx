import { FC } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

import { Controller, useFormContext } from "react-hook-form";

import { IDatePicker, ISectionElement } from "../form.interfaces";

interface IProps {
  name: string;
  label: string;
  readonly?: boolean;
}

const MyTimePicker: FC<IProps> = (props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={props.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TimePicker
            label={props.label}
            value={value ? dayjs(value, "HH:mm A") : null}
            onChange={(time) => onChange(time ? time.format("HH:mm A") : "")}
            slots={{
              textField: (textFieldProps) => <TextField {...textFieldProps} />,
            }}
            ampm
          />
        )}
      />
    </LocalizationProvider>
  );
};

const MyDatePicker: FC<IProps> = (props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  return (
    <Controller
      control={control}
      name={props.name}
      //defaultValue={incomeToSave.incomeDate}
      rules={{ required: true }}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              closeOnSelect
              format="DD/MM/YYYY"
              label={props.label}
              inputRef={field.ref}
              value={field.value}
              defaultValue={field.value}
              onChange={(date) => {
                field.onChange(date);
              }}
              slotProps={{
                textField: { variant: "outlined", error: true },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export const renderDatePicker = (element: ISectionElement, key: string) => {
  const datePickerProps = element as IDatePicker;
  return <MyDatePicker key={key} {...datePickerProps} />;
};
