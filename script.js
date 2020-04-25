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

for (let i = 0; i < 2; i++) {
    var firstQuest = prompt("Введите обязательную статью расходов в этом месяце");
    var secondQuest = prompt("Во сколько обойдется?");
    
    if ((typeof(firstQuest)) === 'string' && (typeof(firstQuest)) != null && (typeof(secondQuest)) != null
        && secondQuest != '' && firstQuest != '' && firstQuest.length < 50) {
            console.log('Correct')
            appData.expenses[firstQuest] = secondQuest;
        } else {
            alert('Не хами мне');
            --i;

        }

    
    
}
alert("ваш бюджет = " + money / 30);