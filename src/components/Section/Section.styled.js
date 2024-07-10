import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: ${p => p.theme.mp(0, 0, 3)};
  padding: ${p => p.theme.mp(2)};
  width: 600px;

  background-color: ${p => p.theme.colors.sectionBackground};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
`;

export const SectionTitle = styled.h2`
  margin: ${p => p.theme.mp(0, 0, 3)};

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
