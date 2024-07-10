import styled from 'styled-components';

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: ${p => p.theme.mp(0)};
  padding: ${p => p.theme.mp(2)};
  width: 300px;
`;

export const StatsTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  margin: ${p => p.theme.mp(0, 0, 2)};
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  margin: ${p => p.theme.mp(-1, -1, 0)};
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
  background-color: ${p => p.theme.colors.pageBackground};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const StatLabel = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
