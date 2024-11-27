const hasLicence = 1;
const age = 18;
const isDrunk = 0;
let msgText = '';


if (hasLicence && age >= 18 && !isDrunk)
    msgText = 'Может';
else
    msgText = 'Не может';

alert(msgText);