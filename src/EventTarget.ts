class Event {
    readonly target: Object;
    readonly data: Object;
    readonly type: string;
    constructor(param: {
        type: string,
        target: Object,
        data?: Object
    }) {
        this.type = param.type;
        this.target = param.target;
        this.data = param.data || {};
    }
}

type ListenerFunction = (event: Event) => void;
class EventTarget {
    private listeners: Map<string, Set<ListenerFunction>>;
    constructor () {
        this.listeners = new Map();
    }
    addEventListener(eventType: string, listenerFunction: ListenerFunction) {
        let set = this.listeners.get(eventType);
        if (set == null) {
            set = new Set();
            this.listeners.set(eventType, set);
        }
        set.add(listenerFunction);
    }
    removeEventListener(eventType: string, listenerFunction: ListenerFunction) {
        const set = this.listeners.get(eventType);
        if (set == null) {
            return;
        }
        set.delete(listenerFunction);
    }
    dispatchEvent(eventType: string, dataObject: Object) {
        const set = this.listeners.get(eventType);
        if (set == null || set.size === 0) {
            return;
        }
        const event = new Event({
            type: eventType,
            data: dataObject,
            target: this,
        });
        set.forEach(listenerFunc => {
            listenerFunc(event);
        });
    }
}

export default { Event, EventTarget }
