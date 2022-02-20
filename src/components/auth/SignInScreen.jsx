import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { startAuth } from "../../actions/auth";

const SignInScreen = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(startAuth(values));
  };
  return (
    <div className="auth-container">
      <div className="form-container animate__animated animate__fadeIn">
        <div className="form-title">
          <h2>Calendario</h2>
          <h3>Ingreso</h3>
        </div>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Correo electrónico" name="email">
            <Input placeholder="juan@hotmail.com" />
          </Form.Item>
          <Form.Item label="Contraseña" name="password">
            <Input.Password placeholder="*******" />
          </Form.Item>
          <div className="auth-footer">
            <Form.Item>
              <Link to="/authentication/sign-up">
                <Button type="link">Crear cuenta</Button>
              </Link>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Iniciar sesión
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInScreen;
