'use strict';

var money = +prompt("Ваш бюджет на месяц?");
var time = new Date(prompt("Введите дату в формате YYYY-MM-DD"));

var appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,

}

// for (let i = 0; i < 2; i++) {
//     var firstQuest = prompt("Введите обязательную статью расходов в этом месяце");
//     var secondQuest = prompt("Во сколько обойдется?");
    
//     if ((typeof(firstQuest)) === 'string' && (typeof(firstQuest)) != null && (typeof(secondQuest)) != null
//     && secondQuest != '' && firstQuest != '' && firstQuest.length < 50 && firstQuest != appData.expenses[firstQuest]) {
//             console.log('Correct')
//             appData.expenses[firstQuest] = secondQuest;
//         } else {
//             alert('Не хами мне');
//             --i;

//         }
    
// }

// let i=0;
// while (i < 2) {
//     var firstQuest = prompt("Введите обязательную статью расходов в этом месяце");
//     var secondQuest = prompt("Во сколько обойдется?");
    
//     if ((typeof(firstQuest)) === 'string' && (typeof(firstQuest)) != null && (typeof(secondQuest)) != null
//         && secondQuest != '' && firstQuest != '' && firstQuest.length < 50 && firstQuest != appData.expenses[firstQuest]) {
//             console.log('Correct')
//             appData.expenses[firstQuest] = secondQuest;
//         } else {
//             alert('Не хами мне');
//             --i;

//         }
//     i++
// }

let i=0;
do {
    var firstQuest = prompt("Введите обязательную статью расходов в этом месяце");
    var secondQuest = prompt("Во сколько обойдется?");
        
    if ((typeof(firstQuest)) === 'string' && (typeof(firstQuest)) != null && (typeof(secondQuest)) != null
    && secondQuest != '' && firstQuest != '' && firstQuest.length < 50 
    && firstQuest != appData.expenses[firstQuest]) {
        console.log('Correct')
        appData.expenses[firstQuest] = secondQuest;
        } else {
            alert('Не хами мне');
            i--;
        }
        i++
}while (i < 2)
if ((appData.budget / 30) <= 1000) {
    alert(appData.budget / 30 + " - это нищебродский бюджет, извини.\n")
} else if ((appData.budget / 30) > 1000  && (appData.budget / 30) <= 10000) {
    alert(appData.budget / 30 + " - этот бюджет средненький, так-то.\n")
} else if ((appData.budget / 30) > 10000){
    alert(appData.budget / 30 + " - это нормальный бюджет, красава.\n")
}
