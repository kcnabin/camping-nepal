import { toast } from "react-toastify";

export const handleError = (error) => {
  console.log("error :", error);

  if (error.response.data.err === "TokenExpiredError") {
    localStorage.removeItem("camper");

    return toast.error("Session Expired!");
  }

  if (error?.response) {
    return toast.error(error.response.data.err);
  }

  toast.error(`Can't connect to Server`);
};
