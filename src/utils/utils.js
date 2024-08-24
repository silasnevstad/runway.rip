export const getRandomColor = () => {
    const colors = ['primary', 'green', 'blue', 'red', 'yellow', 'purple', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Makes a className string important by appending `!` before each class name.
// If its dark:dark-class or hover:hover-class, etc., it will be converted to dark:dark-class! or hover:hover-class, etc
export const makeClassNameImportant = (className) => {
    if (!className) return '';
    return className.split(' ').map((cls) =>
        cls.includes(':')
            ? `${cls.split(':')[0]}:!${cls.split(':')[1]}`
            : `!${cls}`
    ).join(' ');
}