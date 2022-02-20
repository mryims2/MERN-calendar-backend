import swalError from "../swal/swalError";

const handleError = (error, type) => {
  const status = error.response.status;

  if (status === 500) return swalError("Error interno");

  if (type === "authChecking") if (status === 400) return;

  if (type === "auth") {
    if (status === 400) return swalError("El correo electrónico esta en uso");
    if (status === 401)
      return swalError("Correo electrónico y/o contraseña incorrecta");
  }
  return swalError(error);
};

export default handleError;
