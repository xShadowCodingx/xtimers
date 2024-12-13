// This function formats the timer date

function formatTimerDate(date: string) {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
};

export default formatTimerDate