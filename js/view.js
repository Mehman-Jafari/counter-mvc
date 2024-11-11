class View {
  constructor({ plusCount, minusCount }) {
    this.outputNode = document.querySelector(".js-output");
    this.plusBtnNode = document.querySelector(".js-plus-btn");
    this.minusBtnNode = document.querySelector(".js-minus-btn");

    this.plusCount = plusCount;
    this.minusCount = minusCount;

    this.plusBtnNode.addEventListener("click", this._handleBtnPlusClick);
    this.minusBtnNode.addEventListener("click", this._handleBtnMinusClick);
  }

  render(count) {
    this.outputNode.innerText = count;
  }

  _handleBtnPlusClick = (stepCount) => {
    this.plusCount(stepCount);
  }

  _handleBtnMinusClick = (stepCount) => {
    this.minusCount(stepCount);
  }
}
