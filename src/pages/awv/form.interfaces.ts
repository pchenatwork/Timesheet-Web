/*
export interface IElementRenderer {
  (element: ISectionElement, key: string, parentName?:string) : JSX.Element;
}
Use type:
For primitive types, union types, and intersection types:
For function types.
For tuple types.

Use interface:
For defining the structure of objects.
 */
export type TElementRenderer = (
  element: ISectionElement,
  key: string,
  parentName?: string
) => JSX.Element;

export interface ICondition {
  $type: string;
  fieldName: string;
}

export interface ISectionElement {
  $type: string;
  condition?: ICondition;
}

export interface ISection {
  title: string;
  description?: string;
  condition?: ICondition;
  elements?: ISectionElement[] | null;
  hideInNavigationSidebar?: boolean;
  // printOnly?: boolean;
}

export interface IForm {
  sections: ISection[];
}

interface IControlBase extends ISectionElement {
  name: string;
  label?: string;
  readonly?: boolean;
  explanatoryNote?: string;
  //isOptional: boolean; // Notes: isOptional is used for validation
  // missingValueErrorMessage: string;
}

export interface IInputControl extends IControlBase {
  placeholder?: string;
}
export interface ITextField extends IInputControl {
  validationRegex?: string;
  validationRegexErrorMessage?: string;
}
export interface IDatePicker extends IInputControl {}

export interface ITwoColumnPanel extends ISectionElement {
  elements: ISectionElement[];
}
