// https://stackoverflow.com/questions/70958773/can-generic-jsx-elements-work-in-typescript//

import {
  default as React,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactElement,
  type ReactNode,
} from "react";

export type QuestionProps = {
  children: ReactNode;
  description?: string;
  title: string;
};

export const Question = ({
  children,
  description,
  title,
}: QuestionProps): ReactElement => {
  return (
    <div className={"question-wrapper"}>
      <div className={"question-title"}>{title}</div>
      <div className={"question-description"}>{description}</div>
      <div className={"question-component"}>{children}</div>
    </div>
  );
};

// You can use this util if you are forwarding the return type of `useState` to components
export type PropsWithForwardedState<
  State,
  Props extends Record<string, unknown>
> = Omit<Props, "value" | "setValue"> & {
  value: State;
  setValue: Dispatch<SetStateAction<State>>;
};

// Your Option type (You didn't show this)
declare type Option<Value extends number | string> = {
  id: string;
  value: Value;
};

// Your Radio component (You didn't show this)
declare const Radio: (
  props: PropsWithForwardedState<
    Option<string>,
    {
      options: unknown; // You didn't show this
      maxColumns: number; // You didn't show this
    }
  >
) => ReactElement;

export const Example = (): ReactElement => {
  const [optionValue, setOptionValue] = useState<Option<string>>({
    value: "",
    id: "",
  });
  const [options] = useState<unknown>(); // (You didn't show this)

  return (
    <>
      <Question title="Radio:">
        <Radio
          value={optionValue}
          setValue={setOptionValue}
          options={options}
          maxColumns={3}
        />
      </Question>
      {/*
  
        <Question title="Checkbox:">
          <Checkbox
            value={arrValues}
            setValue={setArrValues}
            options={options}
            maxColumns={3}
          />
        </Question>
  
        */}
      {
        // Same for Dropdown, Rating, Text, etc.
      }
    </>
  );
};
