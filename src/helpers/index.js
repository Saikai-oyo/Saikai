export const organizedData = (companies) => {
  console.table(companies);
  const newData = [
    { title: 'Sent', items: [] },
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
