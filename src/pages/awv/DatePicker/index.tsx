import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { FC } from 'react';
import { IDatePicker, ISectionElement } from '../form.interfaces';

interface IProps {
    name: string
    label: string
    readonly?: boolean;
  }
  
const MyDatePicker: FC<IProps> = (props) => {
    const { control } = useForm({})
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name={props.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TimePicker                
                label={props.label}
                value={value ? dayjs(value, 'HH:mm A') : null}
                onChange={(time) => onChange(time ? time.format('HH:mm A') : '')} 
                slots={{
                    textField: textFieldProps => <TextField {...textFieldProps} />
                  }}            
                ampm
              />
            )}
          />
        </LocalizationProvider>
      );
};

export const renderDatePicker = (element: ISectionElement, key: string) => {
    const datePickerProps = element as IDatePicker
    return <MyDatePicker key={key} {...datePickerProps} />
}