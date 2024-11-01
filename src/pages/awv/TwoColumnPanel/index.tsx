import { FC } from "react";
import { StyledAWVDigitalInputWrap } from "../form.styles";
import { ISectionElement, ITwoColumnPanel } from "../form.interfaces";
import { renderFormSectionElement } from "../form.renderer";

const processElement = (element: any, parentName: string) => {
  if (element && parentName) {
    return element["name"]
      ? { ...element, name: `${parentName}.${element["name"]}` }
      : element;
  } else {
    return element;
  }
};

interface ITwoColumnPanelProps {
  name: string;
  parentName: string;
  elements: ISectionElement[];
}

const TwoColumnPanel: FC<ITwoColumnPanelProps> = ({
  name,
  elements,
  parentName,
}) => (
  <>
    {Array.from(
      { length: elements.length / 2 + (elements.length % 2) },
      (_, index) => [elements[index * 2], elements[index * 2 + 1]]
    ).map((x, idx) => {
      const leftElement = processElement(x[0], parentName);
      const rightElement = processElement(x[1], parentName);
      const rootKey = parentName
        ? `${parentName}-${name}-${idx}`
        : `${name}-${idx}`;
      debugger;
      return (
        <StyledAWVDigitalInputWrap key={`${rootKey}-${idx}`}>
          {renderFormSectionElement(leftElement, `${rootKey}-A`, parentName)}
          {rightElement &&
            renderFormSectionElement(rightElement, `${rootKey}-B`, parentName)}
        </StyledAWVDigitalInputWrap>
      );
    })}
  </>
);

export const renderTwoColumnPanel = (
  element: ISectionElement,
  key: string,
  //renderSectionElement: (element: ISectionElement, key: string, parentName?: string) => JSX.Element,
  parentName: string
) => {
  const twoColumnPanel = element as ITwoColumnPanel;
  debugger;
  return (
    <TwoColumnPanel
      key={key}
      name={key}
      parentName={parentName}
      elements={twoColumnPanel.elements}
      //renderSectionElement={renderSectionElement}
    />
  );
};
