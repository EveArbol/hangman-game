const words: string[] = [
    'COMPUTADORA',
    'LUA',
    'COMER',
    'PEZ',
    'AGUACATE',
    'CARRO',
    'PERRO',
    'VETERINARIO'
];


export function getRandomWord() {

   const randomIndex = Math.floor (Math.random() * words.length );
    return words[randomIndex];
}