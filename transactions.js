const closingAccounts = [
  { accountId: "acc1", amount: 1100 }, //aqui quedarina 900 // aqui quedarina 400
  { accountId: "acc2", amount: 590 },
];
const openingAccounts = [
  { accountId: "rec1", credit: 500 },
  { accountId: "rec2", credit: 500 },
];

const newRebalancing = (closingAccounts, recipientAccounts) => {
  // check if total amount is enough
  const totalAmount = closingAccounts.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const totalCredit = recipientAccounts.reduce(
    (acc, curr) => acc + curr.credit,
    0
  );
  if (totalAmount < totalCredit) {
    throw new Error("not enough funds for rebalance");
  }

  const copyClosingAccounts = [...closingAccounts];
  const copyRecipientAccounts = recipientAccounts.map((account) => {
    return { ...account, open: true };
  });
  const transactions = [];
  let operationalFee = 0;

  copyClosingAccounts.map((closing) => {
    copyRecipientAccounts.map((opening) => {
      operationalFee = (transactions.length + 1) * 10;
      if (opening.credit < closing.amount && opening.open) {
        transactions.push([
          closing.accountId,
          opening.accountId,
          opening.credit,
        ]);

        closing.amount -= opening.credit;
        opening.credit = 0;
        opening.open = false;
        return opening;
      } else if (
        opening.credit >= closing.amount &&
        opening.open &&
        closing.amount > 0
      ) {
        transactions.push([
          closing.accountId,
          opening.accountId,
          closing.amount,
        ]);
        opening.credit -= closing.amount;
        closing.amount -= closing.amount;
        if (opening.credit === 0) {
          opening.open = false;
        }
        return opening;
      } else {
        return opening;
      }
    });
    if (operationalFee + totalCredit > totalAmount) {
      throw new Error("Not enough funds for rebalance");
    }
    closing.amount -= operationalFee;
    if (closing.amount > 0) {
      transactions.push([closing.accountId, null, closing.amount]);
    }
    return closing;
  });

  return {
    transfers: transactions,
    operationalFee: operationalFee,
  };
};
console.log(newRebalancing(closingAccounts, openingAccounts));
