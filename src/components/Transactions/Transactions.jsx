import { TableBody, TableHeader, TranRow, TranType, TranAmount, TranCurrency, TransactionList } from "./Transactions.styled";

const Transactions = ({ transactionHistory = [] }) => (
  <TransactionList>
    <TableHeader>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHeader>

    <TableBody>
      {transactionHistory.map(({ id, type, amount, currency }) => (
        <Transaction key={id} type={type} amount={amount} currency={currency} />
      ))}
    </TableBody>
  </TransactionList>
);

const Transaction = ({ type, amount, currency }) => (
  <TranRow>
    <TranType>{type}</TranType>
    <TranAmount>{amount}</TranAmount>
    <TranCurrency>{currency}</TranCurrency>
  </TranRow>
);

export { Transactions };
