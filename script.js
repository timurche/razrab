'use strict';
var money, time;

function start(){
    let err = '';
    do {money = +prompt(err + "Ваш бюджет на месяц?");
        err = 'Ошибка! '; 
    }while(isNaN(money) || money == null || money == "");
    time = new Date(prompt("Введите дату в формате YYYY-MM-DD"));
}
//start();

var appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,

}

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        var firstQuest = prompt("Введите обязательную статью расходов в этом месяце");
        var secondQuest = prompt("Во сколько обойдется?");
        
        if ((typeof(firstQuest)) === 'string' && (typeof(firstQuest)) != null && (typeof(secondQuest)) != null
        && secondQuest != '' && firstQuest != '' && firstQuest.length < 50 && firstQuest != appData.expenses[firstQuest]) {
                console.log('Correct')
                appData.expenses[firstQuest] = secondQuest;
        }   else {
                alert('Не хами мне');
                --i;

            }
        
    }
}
//chooseExpenses()

function detectLevel(){
    if ((appData.budget / 30) <= 1000) {
        alert(appData.budget / 30 + " - это нищебродский бюджет, извини.\n")
    } else if ((appData.budget / 30) > 1000  && (appData.budget / 30) <= 10000) {
        alert(appData.budget / 30 + " - этот бюджет средненький, так-то.\n")
    } else if ((appData.budget / 30) > 10000){
        alert(appData.budget / 30 + " - это нормальный бюджет, красава.\n")
    }
}
//detectLevel()

function chooseOptExpenses(){
    for (let i = 1; i < 4; i++) {
        var quest = prompt(`Статья необязательных расходов № ${i}: `);
        
        if ((typeof(quest)) === 'string' && (typeof(quest)) != null && (typeof(quest)) != null
        && quest != '' && quest != '' && quest.length < 50) {
                console.log('Correct')
                appData.optionalExpenses[i] = quest;
        }   else {
                alert('Не хами мне');
                --i;

            }
        
    }
console.log(appData.optionalExpenses);
}
chooseOptExpenses();