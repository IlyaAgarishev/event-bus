import { memo, useEffect, useState } from "react";
import eventBus, { EventsNames } from "./eventBus";
import PhoneCall from "./PhoneCall";

import RecordingVoiceMessage from "./RecordingVoiceMessage";

function App() {
  const [phoneCall, setPhoneCall] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      eventBus.emit(EventsNames.PhoneCall, "Mother is calling");
    }, 3000);

    eventBus.subscribe(EventsNames.PhoneCall, (data) => {
      setPhoneCall(true);
    });
  }, []);

  return (
    <div className="app">
      <RecordingVoiceMessage />

      {phoneCall && <PhoneCall />}
    </div>
  );
}

export default App;
