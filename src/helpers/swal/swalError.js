import Swal from "sweetalert2";

const swalError = (error = "Error internoe") => {
  Swal.fire({
    title: "Error",
    text: error,
    icon: "error",
  });
};

export default swalError;
