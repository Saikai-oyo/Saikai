export const organizedData = (positions) => {
  const newData = [
    { title: 'Applied', items: [] },
    { title: 'In Progress', items: [] },
    { title: 'Received Task', items: [] },
    { title: 'Contract', items: [] },
    { title: 'Denied', items: [] },
  ];

  // TODO: Replace it to forEach (we don't need return array).
  newData.map((data) => {
    positions.map((position) => {
      data.title === position.doc.status && data.items.push(position.doc);
    });
  });

  return newData;
};

export const todayDate = () => {
  var todayDate = new Date();

  var todayStringDate =
    todayDate.getFullYear() +
    '-' +
    ('0' + (todayDate.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + todayDate.getDate()).slice(-2);

  return todayStringDate;
};

export const formatDate = (date) => {
  // YYYY-MM-DD to DD-MM-YYYY
  var datePart = date.match(/\d+/g),
    year = datePart[0],
    month = datePart[1],
    day = datePart[2];
  const reformat = day + '-' + month + '-' + year;
  return reformat;
};
export const formatReversDate = (date) => {
  // DD-MM-YYYY to YYYY-MM-DD
  var datePart = date.match(/\d+/g),
    day = datePart[0],
    month = datePart[1],
    year = datePart[2];
  const reformat = year + '-' + month + '-' + day;
  return reformat;
};

export const colorForTitle = (title) =>
  title === 'Applied'
    ? '#4c94e5'
    : title === 'In Progress'
    ? '#c685cd'
    : title === 'Received Task'
    ? '#E78C49'
    : title === 'Contract'
    ? '#63b767'
    : title === 'Denied'
    ? '#b92c2c'
    : '';
