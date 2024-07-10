import styled from 'styled-components';

export const FriendList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin: -${p => p.theme.mp(1)};
  padding: ${p => p.theme.mp(2)};
`;
