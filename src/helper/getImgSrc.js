import { getBaseUrl } from "./getBaseUrl";

export const getImgSrc = (photo) => {
  const fullSrc = getBaseUrl() + "/uploads/" + photo;
  return fullSrc;
};
