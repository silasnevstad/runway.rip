export const getRandomColor = () => {
    const colors = ['primary', 'green', 'blue', 'red', 'yellow', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
};

export const makeClassNameImportant = (className) => {
    if (!className) return '';
    return className.split(' ').map((cls) =>
        cls.includes(':')
            ? `${cls.split(':')[0]}:!${cls.split(':')[1]}`
            : `!${cls}`
    ).join(' ');
}