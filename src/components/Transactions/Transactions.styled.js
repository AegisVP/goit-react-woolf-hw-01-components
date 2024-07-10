import styled from 'styled-components';

export const TransactionList = styled.table`
  margin: ${p => p.theme.mp(0)};
  padding: ${p => p.theme.mp(1)};

  width: 500px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const TableHeader = styled.thead`
  padding: ${p => p.theme.mp(1)};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;

  background-color: ${p => p.theme.colors.transactions.headerBackground};
  color: ${p=>p.theme.colors.inverseText};
`;

export const TableBody = styled.tbody`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${ p => p.theme.fontWeights.normal};
  color: ${ p => p.theme.colors.mediumText};
  background-color: ${ p => p.theme.colors.pageBackground};
`;

export const TranRow = styled.tr`
  :nth-child(2n) {background-color: ${ p => p.theme.colors.transactions.secondRow};}
`;

export const TranType = styled.td`
  padding:${ p => p.theme.mp(0,0,0,3)};
  width: 60%;
`;

export const TranAmount = styled.td`
  padding:${ p => p.theme.mp(0,2,0)};
  width: 20%;
  text-align: right;
`;

export const TranCurrency = styled.td`
  width: 20%;
  text-align: center;
`;