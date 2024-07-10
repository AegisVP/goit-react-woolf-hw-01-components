// import css from './Section.module.css';
import { SectionWrapper, SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => (
  <SectionWrapper>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionWrapper>
);

export { Section };
