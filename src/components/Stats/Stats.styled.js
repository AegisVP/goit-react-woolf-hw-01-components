import styled from 'styled-components';

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: ${p => p.theme.mp(0)};
  padding: ${p => p.theme.mp(0)};
  width: 400px;
  border: 30px solid ${p => p.theme.colors.statsBorder};
`;

export const StatsTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  margin: ${p => p.theme.mp(3, 0, 3)};
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 400px;
  height: 80px;
  margin: ${p => p.theme.mp(0, -1, 0)};
  padding: ${p => p.theme.mp(0)};

  list-style: none;
  background-color: ${p => p.theme.colors.statsBackground};
`;

export const StatItem = styled.li`
  margin: ${p => p.theme.mp(1)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100%-5 * 5) / 5);
  font-size: ${p => p.theme.fontSizes.s};
`;

export const StatLabel = styled.span`
margin: ${p => p.theme.mp(0, 0, 2)};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const StatValue = styled.span`
  margin: ${p => p.theme.mp(0)};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
