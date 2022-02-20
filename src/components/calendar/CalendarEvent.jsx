
const CalendarEvent = ({ event }) => {
  const { title } = event;
  return (
    <div>
      <span>{title}</span>
    </div>
  );
};

export default CalendarEvent;
