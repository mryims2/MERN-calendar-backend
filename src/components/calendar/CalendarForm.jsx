import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, Button, Form, Input } from "antd";
import { FaSave } from "react-icons/fa";
import spanish from "antd/lib/date-picker/locale/es_ES";
import moment from "moment";

import { closeModal } from "../../actions/ui.js";
import { startAddNewEvent, startUpdateEvent } from "../../actions/events.js";
import validateMessages from "../../types/validateMessages.js";

const CalendarForm = ({ form }) => {
  const { ui, calendar } = useSelector((state) => state);
  const { activeEvent } = calendar;
  const { visivilityModal } = ui;

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { date, ...resValues } = values;

    const [start, end] = date;

    const event = {
      ...resValues,
      start,
      end,
    };

    if (!activeEvent) dispatch(startAddNewEvent(event));
    else {
      event.id = activeEvent.id;
      event.uid = activeEvent.uid;
      dispatch(startUpdateEvent(event));
    }

    dispatch(closeModal());
  };

  useEffect(() => {
    if (!activeEvent || !visivilityModal) return;

    const { start, end, ...res } = activeEvent;
    const date = [moment(start), moment(end)];
    const event = {
      ...res,
      date,
    };
    form.setFieldsValue(event);
  }, [activeEvent, visivilityModal, form]);

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleSubmit}
      validateMessages={validateMessages}
    >
      <Form.Item label="Fecha" name="date" rules={[{ required: true }]}>
        <DatePicker.RangePicker
          locale={spanish}
          showTime
          format="DD-MM-YYYY h:mm a"
        />
      </Form.Item>
      <Form.Item label="Título" name="title" rules={[{ required: true }]}>
        <Input placeholder="Título del evento" />
      </Form.Item>
      <Form.Item label="Nota" name="note">
        <Input.TextArea
          placeholder="Escribe algo que quieras recordar..."
          rows="5"
        ></Input.TextArea>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          ghost
          block
          icon={
            <FaSave
              style={{
                marginRight: "5px",
                marginTop: "-3px",
                verticalAlign: "middle",
              }}
            />
          }
        >
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CalendarForm;
