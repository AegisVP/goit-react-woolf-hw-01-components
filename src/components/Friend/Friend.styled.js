import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  padding: ${p => p.theme.mp(1)};
  margin: ${p => p.theme.mp(1)};
  background-color: ${p => p.theme.colors.paperBackground};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.round};
  margin: ${p => p.theme.mp(0, 3)};
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin: ${p => p.theme.mp(0, 2, 0, 0)};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
`;
