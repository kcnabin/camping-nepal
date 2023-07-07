export const getTokenHeader = () => {
  let token = "";

  const ls = localStorage.getItem("camper");
  if (ls) {
    token = JSON.parse(ls).token;
  }

  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};
