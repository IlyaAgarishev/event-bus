import eventBus, { EventsNames } from "../eventBus";

const EventBlocks: React.FC = () => {
  const emitCLick = () => {
    eventBus.emit(EventsNames.ButtonIsClicked);
  };

  const emitInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    eventBus.emit(EventsNames.ButtonIsClicked, e.target.value);
  };

  const emitIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    eventBus.emit(EventsNames.IsChecked, e.target.checked);
  };

  const emitMouseIsOverSquare = () => {
    eventBus.emit(EventsNames.MouseIsOverSquare);
  };

  return (
    <ul className="event-blocks">
      <li>
        <span>ButtonIsClicked Event:</span>
        <button onClick={emitCLick}>Button</button>
      </li>
      <li>
        <span>InputIsChanged Event:</span>
        <input type="text" onChange={emitInputChange} />
      </li>
      <li>
        <span>CheckEvent Event:</span>
        <input type="checkbox" onChange={emitIsChecked} />
      </li>

      <li>
        <span>MouseIsOverSquare Event:</span>
        <span className="square" onMouseOver={emitMouseIsOverSquare} />
      </li>
    </ul>
  );
};

export default EventBlocks;
