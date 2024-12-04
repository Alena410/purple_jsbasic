

function getConvertCource(curFrom,curTo){
    switch (curFrom) {
        case 'RUB' : 
            switch (curTo) {
                case 'USD': return 0.0094;
                case 'EUR': return 0.0089;
                case 'CNY': return 0.0687;
                default: return null
            }
        case 'EUR' : 
            switch (curTo) {
                case 'USD': return 1.0549;
                case 'RUB': return 112.02;
                case 'CNY': return 7.6966;
                default: return null
            }
        case 'USD' : 
            switch (curTo) {
                case 'EUR': return 0.9479;
                case 'RUB': return 106.1878;
                case 'CNY': return 7.2959;
                default: return null
            }
         case 'CNY' : 
            switch (curTo) {
                case 'EUR': return 0.1299;
                case 'RUB': return 14.5545;
                case 'USD': return 0.1371;
                default: return null
            }
        default: return null
    }
}
const convertCurrency = (moneySum,curFrom,curTo)  => {
    const currencyType = new Set(['CNY', 'EUR', 'RUB','USD']);
    let convertMoneySum = null;
    
    if ((currencyType.has(curFrom)) && (currencyType.has(curTo)))
        convertMoneySum = (moneySum * getConvertCource(curFrom,curTo)).toFixed(4);

    return convertMoneySum
}

const moneySum = 100; 
const currencyFrom = 'RUB';
const currencyTo = 'CNY';

console.log(`${moneySum} (${currencyFrom}) = ` + convertCurrency(moneySum,currencyFrom,currencyTo) + ` (${currencyTo})`);