import { memo, useEffect, useState } from "react";
import eventBus, { EventsNames } from "../eventBus";

const RecordingVoiceMessage = (props?: any) => {
  const [recordingVoiceMessage, setRecordingVoiceMessage] = useState(true);

  useEffect(() => {
    eventBus.subscribe(EventsNames.PhoneCall, (data) => {
      setRecordingVoiceMessage(false);
    });
  }, []);

  console.log("RecordingVoiceMessage is rendered");

  return (
    <div
      className="recording-voice-message"
      style={{
        color: recordingVoiceMessage ? "green" : "grey",
        border: recordingVoiceMessage ? "5px solid green" : "5px solid grey",
      }}
    >
      <h1>
        Recording a voice message is {recordingVoiceMessage ? "on" : "off"}
      </h1>
    </div>
  );
};

export default memo(RecordingVoiceMessage);
