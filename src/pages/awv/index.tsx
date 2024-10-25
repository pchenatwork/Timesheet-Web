import { FC } from "react";
import { _formDefinition } from "./_formDefinition";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

interface IProps {
  readOnly: boolean;
}

export const ElectronicAwvForm: FC<IProps> = (props) => {
  const formDef = _formDefinition;
  const methods = useForm();
  const { register, handleSubmit } = methods;
  // const { register, control, getValues } = useFormContext();
  const onMySubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <>
      ElectronicAwvForm shows here
      <FormProvider {...methods}>
        {
          // pass all methods into the context
        }
        <form onSubmit={handleSubmit(onMySubmit)}>
          <label>Test</label>
          <input {...register("test", { required: true })} />
          <label>Nested Input</label>
          <NestedInput />
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods

  return <input {...register("NestedInput")} />;
}
