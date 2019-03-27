import eventTarget from './EventTarget'
const Event = eventTarget.Event;
const EventTarget = eventTarget.EventTarget;
const GRANULARITY = {
    SECOND: 1000,
    MINUTE: 1000 * 60,
    HOUR: 1000 * 60 * 60,
    DAY: 1000 * 60 * 60 * 24
};
const EVENT_NAME_TICK = 'tick';

class Clock extends EventTarget {
    private _time: number;
    private _granularity: number;
    private _timerHandle: null | number;
    constructor () {
        super();
        this._time = 0;
        this._timerHandle = 0;
        this._granularity = GRANULARITY.SECOND;
    }
    get time() {
        return Math.round(this._time / this._granularity);
    }
    _tick() {
        const event = new Event({
            type: EVENT_NAME_TICK,
            target: this,
            data: {
                time: this.time
            }
        });
        this.dispatchEvent(EVENT_NAME_TICK, event);
    }
    start() {
        if (this._timerHandle != null) {
            return;
        }
        this._timerHandle = setInterval(this._tick.bind(this), this._granularity);
    }
    stop() {
        if (this._timerHandle == null) {
            return;
        }
        clearInterval(this._timerHandle);
        this._timerHandle = null;
    }
}

export default Clock;
