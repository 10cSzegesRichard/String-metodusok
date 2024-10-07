import input from "./input.js";
// 0. Hozz létre egy txt változót és add meg a változó értékét - legalább 20 karakterből álljon
let txt = "megszentségteleníthetetlenségeskedéseitekért";

// 1. Írasd ki a konzolba az első 5 karaktert
console.log(txt.substring(0, 5));

// 2. Írasd ki a konzolba a 3. tól a 8-ik karakterig
console.log(txt.substring(2, 8));

// 3. Írasd ki a konzolba az 5. karaktertől a végéig
console.log(txt.substring(4));

// 4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan
console.log(txt.substring(4, 10));

// 5. Írasd ki a konzolba a txt-t nagybetűkkel
console.log(txt.toUpperCase());

// 6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen
let mindenmasodik = txt.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
console.log(mindenmasodik);

// 7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen
console.log(txt.replace(/e/g, "E"));

// 8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Ítasd ki a tömböt.
let e = txt.split('e');
console.log(e);