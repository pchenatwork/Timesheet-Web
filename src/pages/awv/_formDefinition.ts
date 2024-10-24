export const _formDefinition = {
  formId: 1,
  formTypeId: 111,
  formTypeName: "AwvForm",
  form: {
    sections: [
      {
        title: "Annual Wellness Visit",
        description:
          "This form can be used to document your patients’ Annual Wellness Visits (AWV). Required steps and helpful tips have been included to aid in the process. All applicable fields must be addressed for the exam to be considered complete. Please submit the completed form no later than 7 days from the DOS.",
        hideInNavigationSidebar: true,
      },
      {
        title: "Assessment & Treatment Plan",
        elements: [
          {
            $type: "repeater",
            name: "assessmentTreatmentPlans",
            addLinkLabel: "+ Add Assessment & Treatment Plan",
            deleteLinkLabel: "- Remove Assessment & Treatment Plan",
            elements: [
              {
                $type: "diagnosisHeading",
                diagnosisCodeFieldName: "${parent}.icdDiagnosisCode",
                defaultHeading: "Assessment & Treatment Plan",
              },
              {
                $type: "twoColumnPanel",
                elements: [
                  {
                    $type: "icdDiagnosisPicker",
                    name: "icdDiagnosisCode",
                    label: "Diagnosis Code",
                  },
                  {
                    $type: "hccCodeDescriptionPicker",
                    name: "hccCode",
                    label: "HCC Description",
                    diagnosisCodeFieldName: "${parent}.icdDiagnosisCode",
                  },
                  {
                    $type: "datePicker",
                    name: "lastReported",
                    label: "Last Reported",
                    isOptional: true,
                  },
                  {
                    $type: "textField",
                    name: "reportingProvider",
                    label: "Reporting Provider",
                  },
                ],
              },
              {
                $type: "twoColumnPanel",
                elements: [
                  {
                    $type: "verticalRadioSelection",
                    name: "evaluation",
                    label: "Condition Evaluation",
                    options: [
                      {
                        label: "Condition Present",
                        value: "Present",
                      },
                      {
                        label: "Condition Not Present",
                        value: "NotPresent",
                      },
                      {
                        label: "Needs Further Evaluation",
                        value: "NeedsFurtherEvaluation",
                      },
                    ],
                  },
                  {
                    $type: "verticalRadioSelection",
                    name: "status",
                    label: "Condition Status",
                    options: [
                      {
                        label: "Worsening",
                        value: "Worsening",
                      },
                      {
                        label: "Stable",
                        value: "Stable",
                      },
                      {
                        label: "Improving",
                        value: "Improving",
                      },
                    ],
                    condition: {
                      $type: "value",
                      fieldName: "${parent}.evaluation",
                      values: ["Present"],
                    },
                  },
                ],
              },
              {
                $type: "textArea",
                name: "treatmentPlan",
                label: "Treatment Plan (Present)",
                explanatoryNote:
                  "To remain compliant, HCP must ensure that at least one of the four MEAT criteria is addressed for each diagnosis. M = Manage E = Evaluate A = Assess T = Treat",
                condition: {
                  $type: "value",
                  fieldName: "${parent}.evaluation",
                  values: ["Present"],
                },
              },
              {
                $type: "textArea",
                name: "treatmentPlan",
                label: "Treatment Plan (null, NeedsFurtherEvaluation)",
                explanatoryNote:
                  "To remain compliant, HCP must ensure that at least one of the four MEAT criteria is addressed for each diagnosis. M = Manage E = Evaluate A = Assess T = Treat",
                isOptional: true,
                condition: {
                  $type: "value",
                  fieldName: "${parent}.evaluation",
                  values: [null, "NeedsFurtherEvaluation"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
