import { memo, useEffect, useState } from "react";
import eventBus, { EventsNames } from "./eventBus";
import PhoneCall from "./PhoneCall";

import RecordingVoiceMessage from "./RecordingVoiceMessage";

export interface IPhoneCall {
  who: string;
  number: number;
  operator: string;
}

function App() {
  const [phoneCall, setPhoneCall] = useState<IPhoneCall | null>(null);

  // eventBus экономит нам рендеры. В данном кейсе мы экономим один рендер, так как не передаем
  // props phoneCall в RecordingVoiceMessage, тем самым RecordingVoiceMessage рендерится 2 раза вместо 3.

  useEffect(() => {
    setTimeout(() => {
      eventBus.emit<IPhoneCall>(EventsNames.PhoneCall, {
        who: "Mother",
        number: 89876543210,
        operator: "AT&T",
      });
    }, 3000);

    eventBus.subscribe<IPhoneCall>(EventsNames.PhoneCall, (data) => {
      setPhoneCall({ ...data });
    });
  }, []);

  return (
    <div className="app">
      <RecordingVoiceMessage />

      {phoneCall && <PhoneCall {...phoneCall} />}
    </div>
  );
}

export default App;
