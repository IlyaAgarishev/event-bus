const EventBlocks: React.FC = () => {
  return (
    <ul className="event-blocks">
      <li>
        <span>ButtonClicked Event:</span>
        <button>Button</button>
      </li>
      <li>
        <span>InputChanged Event:</span>

        <input type="text" />
      </li>
      <li>
        <span>CheckEvent Event:</span>

        <input type="checkbox" />
      </li>

      <li>
        <span>MouseOverSquare Event:</span>

        <div className="square" />
      </li>
    </ul>
  );
};

export default EventBlocks;
