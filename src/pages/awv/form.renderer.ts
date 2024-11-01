import { renderDatePicker } from "./DatePicker";
import { ISectionElement, TElementRenderer } from "./form.interfaces";
import { renderTextField } from "./TextField";
import { renderTwoColumnPanel } from "./TwoColumnPanel";

const elementRenderers: any = {
  /*
    ageField: renderAgeField,
    bodyMassIndexField: renderBodyMassIndexField,
    checkBoxList: renderCheckBoxList,
    commentedMultipleChoiceList: renderCommentedMultipleChoiceList,
    commentedScoredMultipleChoiceList: renderCommentedScoredMultipleChoiceList,
    datedBooleanList: renderDatedBooleanList,
    dateOfBirthPicker: renderDateOfBirthPicker,
    diagnosisHeading: renderDiagnosisHeading,
    dropDownList: renderDropDownList,
    dropDownListBoolean: renderDropDownListBoolean,
    gapsInCareViewer: renderGapsInCareViewer,
    genderPicker: renderGenderPicker,
    hccCodeDescriptionPicker: renderHccCodeDescriptionPicker,
    heightField: renderHeightField,
    icdDiagnosisPicker: renderIcdDiagnosisPicker,
    languagePicker: renderLanguagePicker,
    nullableRadioBoolean: renderNullableRadioBoolean,
    numericField: renderNumericField,
    objectList: renderObjectList,
    otherConditionsList: renderOtherConditionsList,
    painAssessmentSelection: renderPainAssessmentSelection,
    patientNameField: renderPatientNameField,
    phoneNumberField: renderPhoneNumberField,
    preventiveScreeningsList: renderPreventiveScreeningsList,
    radioBoolean: renderRadioBoolean,
    radioBooleanList: renderRadioBooleanList,
    radioSelection: renderRadioSelection,
    repeater: renderRepeater,
    scoredMultipleChoiceList: renderScoredMultipleChoiceList,
    sectionElementGroup: renderSectionElementGroup,
    standaloneLabel: renderStandaloneLabel,
    textArea: renderTextArea, */
  datePicker: renderDatePicker,
  textField: renderTextField,
  twoColumnPanel: renderTwoColumnPanel,
  /*
    verticalRadioSelection: renderVerticalRadioSelection
    */
};
export const renderFormSectionElement: TElementRenderer = (
  element: ISectionElement,
  key: string,
  parentName?: string
) => {
  const renderer: TElementRenderer = elementRenderers[element.$type];
  const x = renderer && renderer(element, key, parentName)
  // renderer==null? return <></> : renderer(element, key, parentName);
  debugger;
  return (
    //evaluateCondition(element.condition, methods.watch, parentName) &&
    
    renderer && renderer(element, key, parentName)
  );
};
