import { theme } from '../../tailwind.config';

export const getThemeColor = (color, shade) => {
    return theme.colors[color][shade];
}