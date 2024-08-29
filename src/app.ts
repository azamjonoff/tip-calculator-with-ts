class Claculator {
  constructor(
    public bill: number,
    public tipPersentage: number,
    public personAmount: number
  ) {}

  calc() {
    tipAmountResult.textContent = `$${(
      ((this.bill / 100) * this.tipPersentage) /
      this.personAmount
    ).toFixed(2)}`;
    totalResult.textContent = `$${(
      ((this.bill / 100) * this.tipPersentage + this.bill) /
      this.personAmount
    ).toFixed(2)}`;
  }

  reset() {
    tipAmountResult.textContent = `$0.00`;
    totalResult.textContent = `$0.00`;
    billEl.value = "";
    personAmountEl.value = "";
    tips.forEach((tip: any) => (tip.checked = false));
  }
}

const tipAmountResult = document.getElementById(
  "tip-amount-result"
) as HTMLHeadingElement;

const totalResult = document.getElementById(
  "total-result"
) as HTMLHeadingElement;

let billAmount: number;
let tipAmount: number;
let personAmount: number;

const calc = () => {
  if (billAmount && tipAmount && personAmount) {
    const calculate = new Claculator(billAmount, tipAmount, personAmount);
    calculate.calc();
  }
};

const billEl = document.getElementById("bill_price") as HTMLInputElement;

const tips = document.querySelectorAll("input[type='radio']");

const personAmountEl = document.getElementById(
  "person-amount"
) as HTMLInputElement;

const resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;

const resetAmounts = () => {
  billAmount = 0;
  tipAmount = 0;
  personAmount = 0;
  const calculate = new Claculator(billAmount, tipAmount, personAmount);
  calculate.reset();
};

resetBtn?.addEventListener("click", () => {
  resetAmounts();
});

billEl.addEventListener("input", () => {
  billAmount = +billEl.value;
  calc();
});

tips.forEach((tip: any) => {
  tip.addEventListener("change", () => {
    tipAmount = +tip.value;
    calc();
  });
});

personAmountEl.addEventListener("input", () => {
  personAmount = +personAmountEl.value;
  calc();
});
