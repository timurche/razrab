'use strict';
var money, time;

function start(){
    let err = '';
    do {money = +prompt(err + "Ваш бюджет на месяц?");
        err = 'Ошибка! '; 
    }while(isNaN(money) || money == null || money == "");
    time = new Date(prompt("Введите дату в формате YYYY-MM-DD"));
}
start();

var appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,
    chooseExpenses: function (){
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
    },
    detectDayBudget: function (){
        appData.budget = appData.budget/30;
        alert (`Ваш ежедневный бюджет = ${appData.budget}`);
    },
    detectLevel: function (){
        if ((appData.budget) <= 1000) {
            alert(appData.budget + " - это нищебродский бюджет, извини.\n")
        } else if ((appData.budget  > 1000)  && (appData.budget) <= 10000) {
            alert(appData.budget  + " - этот бюджет средненький, так-то.\n")
        } else if ((appData.budget) > 10000){
            alert(appData.budget + " - это нормальный бюджет, красава.\n")
        }
    },
    chooseOptExpenses: function (){
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
    },
    checkSavings: function (){
        if (appData.savings = true){
            let save = +prompt ('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент годовых?');
            appData.monthIncome = save/100/12*percent;
            alert (`Твой доход с накоплений в месяц = ${appData.monthIncome}`);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что ещё принесёёт доход? (через запятую)");
        if ((typeof(items) === 'string') && items!='' && typeof(items) !=null){
            appData.income = items.split(",")
        } else{
            alert('не хами мне');
            appData.chooseIncome();
            }
        
        var tempArr = ['Доход принесут: \n'];
        appData.income.forEach(
            function(items,i) { 
            i++
            tempArr.push (i + " : " + items +",\n");
            }
        )

        alert(tempArr.join(''))   
        
    },
    outputAppdata: function(){
        let tempArr=["наша программа включает в себя: "]
        for (let appDataItems in appData){
            tempArr.push(appDataItems+', ');
        }console.log(tempArr.join(''));
    }
}
