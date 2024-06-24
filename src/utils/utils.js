// Makes a className string important by appending `!` before each class name.
// If its dark:dark-class or hover:hover-class, etc., it will be converted to dark:dark-class! or hover:hover-class, etc
export const makeClassNameImportant = (className) => {
    return className.split(' ').map((cls) => cls.includes(':') ? `${cls.split(':')[0]}:!${cls.split(':')[1]}` : `!${cls}`).join(' ');
}