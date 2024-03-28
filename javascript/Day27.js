/*Design an EventEmitter class. This interface is similar (but with some differences) to the one found in the Node.js or the Event target interface of the DOM.*/
class EventEmitter {
    eventMap = {};

    subscribe(event, cb){
        if (!this.eventMap.hasOwnProperty(event)) {
            this.eventMap[event] = new Set();
        }
        this.eventMap[event].add(cb);

        return {
            unsubscribe: () => {
                this.eventMap[event].delete(cb);
            }
        };
    }

    emit(event, args = []){
        const res = [];
        (this.eventMap[event] ?? [])
            .forEach(cb => res.push(cb(...args)));
        return res;
    }
}