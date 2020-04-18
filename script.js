'use strict';

var money = prompt("Ваш бюджет на месяц?");
var time = new Date(prompt("Введите дату в формате YYYY-MM-DD"));
console.log(money, time)
var firstQuest = prompt("Введите обязательную статью расходов в этом месяце");
var secondQuest = prompt("Во сколько обойдется?");
var firstQuest1 = prompt("Введите обязательную статью расходов в этом месяце");
var secondQuest1 = prompt("Во сколько обойдется?");
var appData = {
    money, 
    timeData: time,
    expenses: {
        [firstQuest]: secondQuest,
        [firstQuest1]: secondQuest1
    },
    optionalExpenses:{},
    income: [],
    savings: false,

}
<<<<<<< HEAD
=======
console.log(appData.expenses);
alert("ваш бджет = " + money/30)
0
>>>>>>> 0034db10e66334a8fe1cdacab62b2b00b50ef9d0
