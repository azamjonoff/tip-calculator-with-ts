"use strict";
class Claculator {
    constructor(bill, tipPersentage, personAmount) {
        this.bill = bill;
        this.tipPersentage = tipPersentage;
        this.personAmount = personAmount;
    }
    calc() {
        tipAmountResult.textContent = `$${(((this.bill / 100) * this.tipPersentage) /
            this.personAmount).toFixed(2)}`;
        totalResult.textContent = `$${(((this.bill / 100) * this.tipPersentage + this.bill) /
            this.personAmount).toFixed(2)}`;
    }
    reset() {
        tipAmountResult.textContent = `$0.00`;
        totalResult.textContent = `$0.00`;
        billEl.value = "";
        personAmountEl.value = "";
        tips.forEach((tip) => (tip.checked = false));
    }
}
const tipAmountResult = document.getElementById("tip-amount-result");
const totalResult = document.getElementById("total-result");
let billAmount;
let tipAmount;
let personAmount;
const calc = () => {
    if (billAmount && tipAmount && personAmount) {
        const calculate = new Claculator(billAmount, tipAmount, personAmount);
        calculate.calc();
    }
};
const billEl = document.getElementById("bill_price");
const tips = document.querySelectorAll("input[type='radio']");
const personAmountEl = document.getElementById("person-amount");
const resetBtn = document.getElementById("reset-btn");
const resetAmounts = () => {
    billAmount = 0;
    tipAmount = 0;
    personAmount = 0;
    const calculate = new Claculator(billAmount, tipAmount, personAmount);
    calculate.reset();
};
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", () => {
    resetAmounts();
});
billEl.addEventListener("input", () => {
    billAmount = +billEl.value;
    calc();
});
tips.forEach((tip) => {
    tip.addEventListener("change", () => {
        tipAmount = +tip.value;
        calc();
    });
});
personAmountEl.addEventListener("input", () => {
    personAmount = +personAmountEl.value;
    calc();
});
