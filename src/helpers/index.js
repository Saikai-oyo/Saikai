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
    let ans;
    let datePart = date.match(/\d+/g),
        year = datePart[0],
        month = datePart[1],
        day = datePart[2];
    if (day.length === 4) {
        ans = datePart[0] + '-' + datePart[1] + '-' + datePart[2];
        return ans;
    }
    const reformat = day + '-' + month + '-' + year;
    return reformat;
};

export const formatReversDate = (date) => {
    // DD-MM-YYYY to YYYY-MM-DD
    let ans;
    let datePart = date.match(/\d+/g),
        day = datePart[0],
        month = datePart[1],
        year = datePart[2];

    if (year.length === 2) {
        ans = datePart[0] + '-' + datePart[1] + '-' + datePart[2];
        return ans;
    }
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

export const colorHoverForTitle = (title) =>
    title === 'Applied'
        ? '#E8F2FC'
        : title === 'In Progress'
        ? '#F7EDF8'
        : title === 'Received Task'
        ? '#FCF1E8'
        : title === 'Contract'
        ? '#EEF7EE'
        : title === 'Denied'
        ? '#FAEAEA'
        : '';
