import { FC } from "react"

interface IProps {
    readOnly: boolean
}

export const ElectronicAwvForm : FC<IProps> = (props) => {
    var x = props.readOnly;

    return <>ElectronicAwvForm shows here</>
}