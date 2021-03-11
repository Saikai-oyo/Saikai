export const organizedData = (companies) => {
  const newData = [
    { title: 'Applied', items: [] },
    { title: 'Receive Task', items: [] },
    { title: 'Follow Up', items: [] },
    { title: 'Contract', items: [] },
    { title: 'Denied', items: [] },
  ];

  newData.map((data) => {
    companies.map((company) => {
      data.title === company.status && data.items.push(company);
    });
  });

  return newData;
};
