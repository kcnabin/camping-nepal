import { toast } from 'react-toastify'

export const handleError = (e, setInfo) => {

  console.error(e);
  console.log("e.name", e.name);
  if (e.name === "AxiosError" && !e.response) {
    toast.error("Error connecting to Server!");
    setTimeout(() => toast.error(""), 10000);
  } else {
    if (e.response.data && e.response.data.err === "TokenExpiredError") {
      localStorage.removeItem("camper");
      return toast.error("Token Expired! Please logout and login again!");
    }

    if (e.name === "TypeError") {
      localStorage.removeItem("camper");
      return toast.error(
        "Type Error, probably expired token! Please logout and login again"
      );
    }

    if (e.response.data) {
      toast.error(e.response.data.err);
    } else {
      toast.error("Something went wrong! Please logout and login again!");
    }
    setTimeout(() => toast.error(""), 10000);
  }
};
