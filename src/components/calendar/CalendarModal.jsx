import { Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";

import { clearActiveEvent } from "../../actions/events.js";
import { closeModal } from "../../actions/ui.js";
import CalendarForm from "./CalendarForm.jsx";

const CalendarModal = () => {
  const [form] = useForm();
  const { visivilityModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleCancel = () => dispatch(closeModal());

  const handleAfterClose = () => {
    dispatch(clearActiveEvent());
    form.resetFields();
  };

  return (
    <Modal
      centered
      forceRender
      footer={null}
      visible={visivilityModal}
      onCancel={handleCancel}
      afterClose={handleAfterClose}
    >
      <h1> {form.getFieldsValue ? "Editar evento" : "Nuevo evento"} </h1>
      <hr />
      <CalendarForm form={form} />
    </Modal>
  );
};

export default CalendarModal;
