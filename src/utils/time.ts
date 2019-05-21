/**
 * Main time module.
 * Once initialized, it keeps track of time and frames since started.
 */
export class Time {
  private _start: number = 0;
  private _now: number = 0;
  private _prevNow: number = 0;
  private _delta: number = 0;
  private _frame: number = 0;

  public get now(): number {
    return this._now;
  }

  public get delta(): number {
    return this._delta;
  }

  public get timeSinceStart(): number {
    return this._now - this._start;
  }

  public get currentFrame(): number {
    return this._frame;
  }

  public tick(): void {
    this._prevNow = this._now;
    this._now = performance.now();
    this._delta = (this._now - this._prevNow) / 1000;
    this._frame += 1;
  }
}

export const globalTime = new Time();
