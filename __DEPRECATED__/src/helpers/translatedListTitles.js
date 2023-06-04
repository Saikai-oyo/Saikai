const translatedListTitles = (t, title) => {
    return title === 'Applied'
        ? t('dashboard.titles.applied')
        : title === 'In Progress'
        ? t('dashboard.titles.inProgress')
        : title === 'Received Task'
        ? t('dashboard.titles.receivedTask')
        : title === 'Contract'
        ? t('dashboard.titles.contract')
        : title === 'Denied'
        ? t('dashboard.titles.denied')
        : title;
};

export default translatedListTitles;
