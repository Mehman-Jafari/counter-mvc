class Model {
  constructor({ onCountChanged }) {
    this.count = 0;
    this.stepCount = 1;
    this.onCountChanged = onCountChanged;
  }

  countPlus(count) {
    this.count += count;

    this.onCountChanged(this.count);
  }

  countMinus(count) {
    this.count -= count;

    this.onCountChanged(this.count);
  }

  getCount() {
    return this.count;
  }

  getStepCount() {
    return this.stepCount;
  }
}
