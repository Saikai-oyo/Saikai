export const getFormattedTodayDate = () =>
  new Date().getFullYear() +
  '-' +
  ('0' + (new Date().getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + new Date().getDate()).slice(-2);

/**
 *
 * @param date
 * @description YYYY-MM-DD  to  DD-MM-YYYY
 */
export const formatDate = (date: string) => {
  const datePart = date.match(/\d+/g);
  const [year, month, day] = datePart || [];

  if (datePart && day.length === 4) {
    return datePart[0] + '-' + datePart[1] + '-' + datePart[2];
  }

  const reformat = day + '-' + month + '-' + year;
  return reformat;
};

/**
 *
 * @param date
 * @description DD-MM-YYYY to YYYY-MM
 */
export const formatReversDate = (date: string) => {
  const datePart = date.match(/\d+/g);
  const [day, month, year] = datePart || [];

  if (datePart && year.length === 2) {
    return datePart[0] + '-' + datePart[1] + '-' + datePart[2];
  }

  return year + '-' + month + '-' + day;
};
