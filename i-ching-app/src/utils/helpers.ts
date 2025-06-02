export const getRandomHexagram = (): number => {
    return Math.floor(Math.random() * 64) + 1;
};

export const formatHexagramNumber = (number: number): string => {
    return number < 10 ? `0${number}` : `${number}`;
};

export const getHexagramDescription = (hexagram: { number: number; description: string }): string => {
    return `Hexagram ${formatHexagramNumber(hexagram.number)}: ${hexagram.description}`;
};