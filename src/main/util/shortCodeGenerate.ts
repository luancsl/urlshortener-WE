
const chain: string = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const chainChar: string[] = Array.from<string>(chain);
const mod: number = chainChar.length


/* 
    Gera número aleatorio baseado na data atual vezes um fator de aleatoriedade com limite sendo
    o tamanho da cadeia de caracteres e números 
    @position: recurpe o dia, mês, ano, hora, minutos ou segundos com aleatoriedade
    @mod: tamanho da cadeia 
    @date: data atual
*/
const getRandomCod = (position: number, mod: number, date: Date): number => {

    const rand: number = Math.floor(Math.random() * 100)
    const dtArray: number[] = [
        date.getDay(),
        date.getMonth(),
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];
    const positionMod: number = position % dtArray.length
    const result: number = (rand * dtArray[positionMod]) % mod
    return result
}

/* 
    Gera o código curto como uma string 
    @size: tamanho do código a ser gerado
*/
export const shortCodeGen = (size: number): string => {
    const date = new Date();
    let shortCod: String[] = [];

    for (let i = 0; i < size; i++) {
        shortCod[i] = chainChar[getRandomCod(i, mod, date)]
    }

    return shortCod.join('');
}
