import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { openModal } from "../../actions/ui.js";
import {
  clearActiveEvent,
  startDeleteEvent,
  setActiveEvent,
  startLoadingEvents,
} from "../../actions/events.js";
import Navbar from "../ui/Navbar.jsx";
import CalendarEvent from "./CalendarEvent.jsx";
import CalendarModal from "./CalendarModal.jsx";
import messages from "../../helpers/calendar/message.js";

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const [view, SetView] = useState(localStorage.getItem("lastView") || "month");
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  const handleDoubleClickEvent = () => dispatch(openModal());

  const handleSelectEvent = (event) => dispatch(setActiveEvent(event));

  const HandleClickDeletedEvent = () => dispatch(startDeleteEvent());

  const handleClickAddNewEvent = () => dispatch(openModal());

  const handleSelectSlot = () => dispatch(clearActiveEvent());

  const handleViewChange = (event) => {
    SetView(event);
    localStorage.setItem("lastView", event);
  };

  const eventPropGetter = () => {
    const style = {
      backgroundColor: "#367CF7",
      color: "white",
      opacity: 0.8,
      display: "block",
      borderRadius: 0,
    };
    return {
      style,
    };
  };
  useEffect(() => {
    dispatch(startLoadingEvents());
  }, [dispatch]);

  return (
    <div className="calendar-container">
      <CalendarModal />
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={messages}
        eventPropGetter={eventPropGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={handleDoubleClickEvent}
        onSelectEvent={handleSelectEvent}
        onView={handleViewChange}
        onSelectSlot={handleSelectSlot}
        selectable={true}
        view={view}
      />
      {activeEvent && (
        <Button
          className="fab button-del"
          onClick={HandleClickDeletedEvent}
          type="primary"
          danger
        >
          <MdOutlineDeleteForever
            size="2rem"
            style={{ verticalAlign: "middle" }}
          />
          Borrar
        </Button>
      )}
      <Button
        className="fab button-add"
        type="primary"
        shape="circle"
        onClick={handleClickAddNewEvent}
        icon={<FaPlus size="3rem" style={{ verticalAlign: "middle" }} />}
      />
    </div>
  );
};

export default CalendarScreen;
