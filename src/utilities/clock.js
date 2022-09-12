export class Clock {
  constructor(template, cbFunc, updateTimeSec) {
    this.template = template;
    this.eventCbFunc = cbFunc;
    this.updateTimeSec = updateTimeSec;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let curTime = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    this.eventCbFunc();
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.updateTimeSec);
  }
}