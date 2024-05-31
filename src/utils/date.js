export const formatDateAndRelativeTime = (date, showRelativeTime = true) => {
    const formattedDate = date.format('MMM DD, YYYY');
    if (showRelativeTime) {
        const fromNow = date.fromNow();
        return `${fromNow}`;
    }
    return formattedDate;
};