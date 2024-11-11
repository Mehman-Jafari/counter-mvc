class Controller {
  constructor() {
    this.model = new Model({ onCountChanged: this.handleModelCountChanged });
    this.view = new View({
      plusCount: this.handleViewCountPlus,
      minusCount: this.handleViewCountMinus,
    });
  }

  init() {
    this.view.render(this.model.getCount());
  }

  handleModelCountChanged = (count) => {
    this.view.render(count);
  };

  handleViewCountPlus = () => {
    const stepCount = this.model.getStepCount();

    this.model.countPlus(stepCount);
  };

  handleViewCountMinus = () => {
    const stepCount = this.model.getStepCount();

    this.model.countMinus(stepCount);
  };
}
