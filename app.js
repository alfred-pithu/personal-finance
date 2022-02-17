//common function to get the parseFloat'ed value from an Input tag
function parsedValue(id) {
    const inputValueText = document.getElementById(id).value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

//common function to set InnerTexts in the UI
function setInnerText(id, amountToBeSet) {
    const resultShower = document.getElementById(id);
    resultShower.innerText = amountToBeSet;
}


// for Calculate Button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = parsedValue('income-input')
    const food = parsedValue('food-input');
    const rent = parsedValue('rent-input');
    const clothes = parsedValue('clothes-input');

    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;

    //error handling
    if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        setInnerText('total-expenses-span', '');
        setInnerText('balance-span', '');
        alert('Please give numbers greater than zero')
    }
    else if (isNaN(income) == true || isNaN(food) == true || isNaN(rent) == true || isNaN(clothes) == true) {
        setInnerText('total-expenses-span', '');
        setInnerText('balance-span', '');
        alert('Please provide numbers as input')
    }
    else if (income < totalExpenses) {
        setInnerText('total-expenses-span', '');
        setInnerText('balance-span', '');
        alert('Expense is more than your Income!')
    }
    else {
        setInnerText('total-expenses-span', totalExpenses);
        setInnerText('balance-span', balance);
    }

})


//for Save Button
document.getElementById('save-btn').addEventListener('click', function () {
    const savingsPercentage = parsedValue('save-input');
    const income = parsedValue('income-input');
    const balance = parseFloat(document.getElementById('balance-span').innerText);

    const savingsAmount = (income * savingsPercentage) / 100;
    const remainingBalance = balance - savingsAmount;

    //error handling
    if (savingsAmount > balance) {
        setInnerText('saving-amount-span', '');
        setInnerText('remaining-balance-span', '');
        alert('Can not save more money than your balance amount !')
    }
    else if (savingsAmount < 0) {
        setInnerText('saving-amount-span', '');
        setInnerText('remaining-balance-span', '');
        alert('Please provide saving percentage greater than zero')
    }
    else if (isNaN(savingsPercentage)) {
        setInnerText('saving-amount-span', '');
        setInnerText('remaining-balance-span', '');
        alert('Please provide numbers in the Save Input field, not texts')
    }
    else {
        setInnerText('saving-amount-span', savingsAmount);
        setInnerText('remaining-balance-span', remainingBalance);
    }

})