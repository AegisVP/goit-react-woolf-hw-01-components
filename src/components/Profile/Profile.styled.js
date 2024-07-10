import styled from 'styled-components';

const ProfileCard = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #000000;
  border-radius: 10px;

  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px 0 10px;
  border-radius: 50%;
  display: block;
`;

export const Name = styled.p`
  margin: 0 0 5px 0;

  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const Info = styled.p`
  margin: 0 0 5px 0;

  font-size: 16px;
  font-weight: normal;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${p => p.theme.colors.mediumText};
`;

export const StatList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  margin: ${p => p.theme.mp(2, -2, 0)};
  padding: ${p => p.theme.mp(0)};
  width: 100%;

  list-style: none;
`;

export const StatItem = styled.li`
  margin: 0;
  padding: ${p => p.theme.mp(2)};
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${p => p.theme.colors.statsBorder};
  background-color: ${p => p.theme.colors.statsBackground};
`;

export const StatLabel = styled.span`
  margin: ${p => p.theme.mp(0)};
  margin-bottom: ${p => p.theme.mp(1)};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const StatValue = styled.span`
  margin: ${p => p.theme.mp(0)};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export { ProfileCard };
