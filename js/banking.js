
// get input value by function
function getInputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldNumber = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldNumber;
}

// update total deposit and withdraw
function updateTotalField(fieldTextId, newAmount){
    const updateFieldText = document.getElementById(fieldTextId);
    const updateFieldNumber = parseFloat(updateFieldText.innerText);
    const totalFieldAmount = newAmount + updateFieldNumber;
    updateFieldText.innerText = totalFieldAmount;

    return updateFieldText;
}

// update total balance
function totalBalance(newAmount, isAdd){
    const totalBalanceField = document.getElementById('current-balance');
    const totalBalanceNumber = parseFloat(totalBalanceField.innerText);
    if(isAdd == true){
        const currentTotalBalance = totalBalanceNumber + newAmount;
        totalBalanceField.innerText = currentTotalBalance;
    }
    else{
        const currentTotalBalance = totalBalanceNumber - newAmount;
        totalBalanceField.innerText = currentTotalBalance;
    }

    return totalBalanceField;
}


// 1st step
document.getElementById('newDeposit-button').addEventListener('click', function(){
    const newDeposit = getInputField('new-deposit');
    if(newDeposit > 0){
    updateTotalField('current-deposit-amount', newDeposit);
    totalBalance(newDeposit, true);
}
});


// 2nd step
document.getElementById('newWithdraw-button').addEventListener('click', function(){
    const totalBalanceField = document.getElementById('current-balance');
    const totalBalanceNumber = parseFloat(totalBalanceField.innerText);
    const newWithdraw = getInputField('new-withdraw');
    if(newWithdraw > 0 && newWithdraw <= totalBalanceNumber - 100){
    updateTotalField('current-withdraw-amount', newWithdraw);
    totalBalance(newWithdraw, false);
}
});