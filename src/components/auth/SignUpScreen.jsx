import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { startAuth } from "../../actions/auth";
import validateMessages from "../../types/validateMessages";

const SignUpScreen = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(startAuth(values));
  };
  return (
    <div className="auth-container">
      <div className="form-container animate__animated animate__fadeIn">
        <div className="form-title">
          <h2>Calendario</h2>
          <h3>Registro</h3>
        </div>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          validateMessages={validateMessages}
        >
          <Form.Item label="Nombre" name="name" rules={[{ required: true }]}>
            <Input placeholder="Escribe tu nombre" />
          </Form.Item>
          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[{ required: true }]}
          >
            <Input placeholder="Escribe tu correo electrónico" />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, min: 6 }]}
          >
            <Input.Password placeholder="Escribe tu contraseña" />
          </Form.Item>
          <Form.Item
            label="Repita su contraseña"
            name="password2"
            rules={[
              { required: true, message: "${label}" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Las contraseñas no coinciden")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Vuelve a escribir tu contraseña " />
          </Form.Item>
          <div className="auth-footer">
            <Form.Item>
              <Link to="/authentication/sign-in">
                <Button type="link">Iniciar sesión</Button>
              </Link>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Crear cuenta
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpScreen;
