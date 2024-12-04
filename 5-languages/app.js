let userLang = (prompt('Укажите код языка (например: RU / EN / ES / PT / IT)')).toUpperCase();

switch (userLang){
    case 'RU': alert('Привет!');
               break;
    case 'EN': alert('Hello!');
               break;
    case 'ES': alert('Hola!');
               break;
    case 'PT': alert('Oi!');
               break;
    case 'IT': alert('Ciao!');
               break;
    default:  alert('В России говорят "Привет!"');
}
