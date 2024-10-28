import { FC } from "react";
import { StyledTitleContainer } from "../form.styles";
import Typography from "@mui/material/Typography/Typography";

interface ISectionTitleProps {
  title: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
  return (
    <StyledTitleContainer>
      <Typography variant="h2">{title}</Typography>
    </StyledTitleContainer>
  );
};

export default SectionTitle;
