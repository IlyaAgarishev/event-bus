enum EventsNames {
  PhoneCall = "PhoneCall",
}

type Subscribtion = (data: any) => void;

type EventsType = {
  [key in EventsNames]?: Set<Subscribtion>;
};

class EventBus {
  private events: EventsType;

  constructor() {
    this.events = {};
  }

  public subscribe<T>(eventName: EventsNames, subscribtion: (data: T) => void) {
    if (!this.events[eventName]) {
      this.events[eventName] = new Set();
    }

    const subscribtions = this.events[eventName];
    subscribtions?.add(subscribtion);

    return () => {
      subscribtions?.delete(subscribtion);

      if (subscribtions?.size === 0) {
        delete this.events[eventName];
      }
    };
  }

  public emit<T>(eventName: EventsNames, data?: T) {
    this.events[eventName]?.forEach((func) => {
      func.call(null, data);
    });
  }
}

export { EventsNames };

export default new EventBus();
