import { useEffect, useState } from "react";
import axios from "axios";
import { getTokenHeader } from "../helper/getTokenHeader";
import { handleError } from "../helper/handleError";

export const useFetchData = (url, dependency) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url, getTokenHeader());
        setValue(data);
      } catch (error) {
        handleError(error);
      }
    };

    fetchData();
  }, [dependency, url]);

  return { value, setValue };
};
