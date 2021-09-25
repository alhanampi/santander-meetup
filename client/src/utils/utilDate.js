//2021-09-21
export const convertDate = (date) => {
  const toIso = date.replace(/-/gi, "/").substring(0, 10);
  return toIso;
};

//martes, 21 de septiembre de 2021
export const convertIsoToDays = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };
  const toDays = date.toLocaleDateString("es-AR", options);
  return toDays;
};

//21 de septiembre
export const mediumConvertIsoToDays = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  };
  const toDays = date.toLocaleDateString("es-AR", options);
  return toDays;
};

//today
export const getToday = () => {
  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  return today;
};

//max 15 days from now - max allowed by the climate api
export const getFortnight = () => {
  const nextWeeks = new Date(new Date(Date.now() + 15 * 24 * 60 * 60 * 1000))
    .toISOString()
    .split("T")[0];
  return nextWeeks;
};

//21/09-2021
export const convertToNumDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "UTC",
  };
  const toDays = date.toLocaleDateString("es-AR", options);
  return toDays;
};

//diff between two dates
export const daysFromToday = (num1, num2) => {
  const millisec = 1000 * 60 * 60 * 24;

  const date1 = Date.UTC(num1.getFullYear(), num1.getMonth(), num1.getDate());
  const date2 = Date.UTC(num2.getFullYear(), num2.getMonth(), num2.getDate());

  return Math.floor((date2 - date1) / millisec);
};
