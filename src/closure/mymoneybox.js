function moneyBox(owner) {
    let savedCoins = 0;
    return (coins) => {
        savedCoins += coins;
        console.log(`${owner}'s' MoneyBox: $${savedCoins}`);
    };
}

const juanMoneyBox = moneyBox("Juan");
myMoneyBox(5);
myMoneyBox(3);
myMoneyBox(15);

const anaMoneyBox = moneyBox("Ana");
pepitaMoneyBox(100);
pepitaMoneyBox(100);
pepitaMoneyBox(100);