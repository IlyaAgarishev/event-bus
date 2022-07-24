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
        border: recordingVoiceMessage ? "2px solid green" : "2px solid grey",
      }}
    >
      Recording a voice message is {recordingVoiceMessage ? "on" : "off"}
    </div>
  );
};

export default memo(RecordingVoiceMessage);
