const words: string[] = [
    'PUTA',
    'MAMASITA',
    'BEBECITA',
    'PERREO',
    'LUA',
    'BENDICIONES',
    'ZORRA',
    'BELLAKEO',
    'ANUEL'
];


export function getRandomWord() {

   const randomIndex = Math.floor (Math.random() * words.length );
    return words[randomIndex];
}