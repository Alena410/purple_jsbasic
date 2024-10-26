let positionLat = 1;
let positionLong = 1;

let adressLat = 5;
let adressLong = 3;

let xLength = adressLat - positionLat;
let yLength = adressLong - positionLong;
let distance = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));

console.log(`Координаты текущего местоположения: (${positionLat},${positionLong})`);
console.log(`Координаты точки назначения: (${adressLat},${adressLong})`);
console.log(`Дистанция: ${distance}`);