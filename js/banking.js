


// get new deposit
const newDepositField = document.getElementById('new-deposit');

//get current deposit
const currentDepositField = document.getElementById('current-deposit-amount');

// get current balance
const currentBalanceField = document.getElementById('current-balance');

// Deposit Event Handler Function

document.getElementById('newDeposit-button').addEventListener('click', function(){
    // String to Number conversion
    const newDepositAmount = parseFloat(newDepositField.value);
    const currentDepositAmount = parseFloat(currentDepositField.innerText);
    const currentBalanceAmount = parseFloat(currentBalanceField.innerText);
    
    // Update Deposit Amount
    const totalDepositAmount = newDepositAmount + currentDepositAmount;
    currentDepositField.innerText = totalDepositAmount;

    // Update Total Balance
    const totalBalance = currentBalanceAmount + newDepositAmount;
    currentBalanceField.innerText = totalBalance;
    
    // Clear Field Value
    newDepositField.value = '';
});

/*
        Complete 1st Step
*/

// get new withdraw
const newWithdrawField = document.getElementById('new-withdraw');

//get current withdraw
const currentWithdrawField = document.getElementById('current-withdraw-amount');

// Withdraw event handler function

document.getElementById('newWithdraw-button').addEventListener('click', function(){
    // String to number conversion
    const newWithdrawAmount = parseFloat(newWithdrawField.value);
    const currentWithdrawAmount = parseFloat(currentWithdrawField.innerText);
    const currentBalanceAmount = parseFloat(currentBalanceField.innerText);

    // Update Withdraw Amount
    const totalWithdrawAmount = newWithdrawAmount + currentWithdrawAmount;
    currentWithdrawField.innerText = totalWithdrawAmount;

    // Update Total Balance
    const totalBalance = currentBalanceAmount - newWithdrawAmount;
    currentBalanceField.innerText = totalBalance;

    // Clear Field Value
    newWithdrawField.value = '';

});

/*
    Full Completed
*/
