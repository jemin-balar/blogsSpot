export const formatDateToMM = (dateStr) => {
  const date = new Date(dateStr);
  const options = { day: "2-digit", month: "short", year: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};

export const formatDateToDD = (dateStr) => {
  const date = new Date(dateStr);
  const options = {};
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};

export const truncateText = (text, start, end) => {
  if (!text) return "";
  if (text.length <= end) return text;
  const truncatedText = text.slice(start, end) + "...";
  return truncatedText;
};
