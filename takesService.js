class TakesService {
  constructor() {
    this.takes = [];
  }

  addTakes(takes) {
    this.takes.push(take);
  }

  getTakes() {
    return this.takes;
  }

  completeTakes(takesId) {
    const takes = this.takes.find(t => t.id === takesId);
    if (task) {
      takes.completed = true;
    }
  }
}

