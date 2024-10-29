export interface IElementRenderer {
  (element: ISectionElement, key: string, parentName?:string) : JSX.Element;
}
export type IElementRendererFun = (element: ISectionElement, key: string, parentName?:string) => JSX.Element;

export interface ICondition {
  $type: string;
  fieldName: string;
}

export interface ISumCondition extends ICondition {
  minValue: number;
  maxValue: number;
}

export interface IValueCondition extends ICondition {
  values: any[];
}

export interface ISectionElement {
  $type: string;
  condition?: ICondition;
}

export interface ISection {
  title: string;
  description?: string;
  condition?: ICondition;
  elements?: ISectionElement[];
  //  hideInNavigationSidebar?: boolean;
  // printOnly?: boolean;
}

export interface IForm {
  sections: ISection[];
}

export interface IControl extends ISectionElement {
  name: string;
  //isOptional: boolean;
  // missingValueErrorMessage: string;
}

export interface ILabeledControl extends IControl {
  label: string;
  //?? subLabel: string
}
export interface IInputControl extends ILabeledControl {
  placeholder?: string;
  readonly?: boolean;
}
export interface ITextField extends IInputControl {
  //?? validationRegex?: string
  //?? validationRegexErrorMessage: string
}
