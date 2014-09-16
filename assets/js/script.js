/**
 * Created by anthonyandras on 9/13/14.
 */
window.onload = init;

function init() {
    var calculateButton = document.getElementById("calculate");
    calculateButton.onclick = calculate;
}

function calculate() {
    var baseMealCostElement = document.getElementById("basecost");
    var baseCost = Number(baseMealCostElement.value);

    var taxPercentElement = document.getElementById("taxpercent");
    var taxPercent = Number(taxPercentElement.value);

    var tipPercentElement = document.getElementById("tippercent");
    var tipPercent = Number(tipPercentElement.value);

    var taxAmount = calculatePercent(baseCost, taxPercent);
//    console.log("Tax Amount: " + taxAmount);

    var tipableAmount = taxAmount + baseCost;
//    console.log("typeof taxAmount: " + typeof taxAmount);
//    console.log("typeof baseCost: " + typeof baseCost);
//    console.log("Tipable Amount: " + tipableAmount);

    var tipAmount = calculatePercent(baseCost, tipPercent);
//    console.log("Tip Amount: " + tipAmount);

    var finalAmount = Number(tipableAmount + tipAmount).toFixed(2);
//    console.log("Final check amount: " + finalAmount);

    var finalBillElement = document.getElementById('totalbill');
    finalBillElement.innerHTML = finalAmount;
}

// abstract function to calculate the percentage of a particular amount.
function calculatePercent(baseAmount, percent) {
    if (!percent) {
        return; // should probably raise an exception here...
    }

    return Number((baseAmount * (percent / 100)).toFixed(2));
}