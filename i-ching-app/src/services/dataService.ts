import { hexagrams } from '../data/hexagrams';
import { trigrams } from '../data/trigrams';

export const getHexagramByNumber = (number: number) => {
    return hexagrams.find(hexagram => hexagram.number === number);
};

export const getTrigramByName = (name: string) => {
    return trigrams.find(trigram => trigram.name === name);
};

export const getAllHexagrams = () => {
    return hexagrams;
};

export const getAllTrigrams = () => {
    return trigrams;
};