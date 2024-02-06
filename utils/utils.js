export const formatDateToMM = (dateStr) => {
  const date = new Date(dateStr);
  const options = { month: "short" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};

export const formatDateToDD = (dateStr) => {
  const date = new Date(dateStr);
  const options = { day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};
