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