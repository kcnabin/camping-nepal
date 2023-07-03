export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();

  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

export const getTomorrowDate = (date = new Date()) => {
  const dt = new Date(date);
  const year = dt.getFullYear();

  let month = dt.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = dt.getDate() + 1;
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
