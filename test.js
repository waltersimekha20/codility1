function ( A,D){


    let balance = 0;
    const monthlyPayments = {};


    for (let i = 0; i < A.length; i++) {
        const amount = A[i];
        const date = D[i];
        const year = parseInt(date.slice(0, 4));
        const month = parseInt(date.slice(5, 7));
    
        if (year !== 2020) {
          continue;

}

balance += amount;

if (amount < 0) {
  monthlyPayments[month] = (monthlyPayments[month] || 0) + 1;
}
}

for (let month = 1; month <= 12; month++) {
    if (
      (monthlyPayments[month] || 0) < 3 ||
      sumByMonth(A, D, month) < 100
    ) {
      balance -= 5;
    }
  }

  return balance;
}