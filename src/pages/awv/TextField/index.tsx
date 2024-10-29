
import {default as MuiTextField} from '@mui/material/TextField';
import { FC } from 'react';
import { IElementRenderer, ISectionElement, ITextField } from '../form.interfaces';

interface IProps {
    name: string
    label: string
    placeholder?: string
    readonly?: boolean
}

const TextField: FC<IProps> = (props) => (
    <MuiTextField
        type="text"
        name={props.name}
        label={props.label}
        placeholder={props.placeholder ?? props.label}
        disabled={props.readonly??false}
    />
)

export const renderTextField : IElementRenderer = (element: ISectionElement, key: string) => {
    const textFieldProps = element as ITextField
    return <TextField key={key} {...textFieldProps}  />
}