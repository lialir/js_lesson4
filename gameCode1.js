var event,flag;

function isAnswer(event) {
    if (isNaN(event) || event<1 || event>4) { //isInteger(event) нет проверки на целое, при вводе 3.5 - ответ неверный
        alert('Вы ввели недопустимый символ, вопрос будет повторен ');
        flag=false;
    }
    else {
        flag=true;
    }
    return flag;
}


for(var i=1; i<5; i++){
    event = +prompt(works.a00 + works.a1 + works.a2 +works.a3+works.a4);
    while(!isAnswer(event)){
        event = +prompt(works.a00 + works.a1 + works.a2 +works.a3+works.a4);
    }
    
    if (event==rightAnswer.a){
        alert("верно, следующий вопрос 2");
        event = +prompt(works.b00 + works.b1 + works.b2 +works.b3+works.b4);
        while(!isAnswer(event)){
        event = +prompt(works.b00 + works.b1 + works.b2 +works.b3+works.b4);
        }

        if (event!=rightAnswer.b){
            alert("неверно, игра окончена");
            break;
        }
        else if (event==rightAnswer.b){
            alert("верно, следующий вопрос 3");
            event = +prompt(works.c00 + works.c1 + works.c2 +works.c3+works.c4);
            while(!isAnswer(event)){
                event = +prompt(works.c00 + works.c1 + works.c2 +works.c3+works.c4);
            }
            if(event!=rightAnswer.c){ 
                alert("неверно, игра окончена");
                break;
            }
            else if(event==rightAnswer.c){
                alert("верно, следующий вопрос 4");
                event = +prompt(works.d00 + works.d1 + works.d2 +works.d3+works.d4);
                while(!isAnswer(event)){
                event = +prompt(works.d00 + works.d1 + works.d2 +works.d3+works.d4);
                }
                if(event!=rightAnswer.d){ 
                    alert("неверно, игра окончена");
                    break;
                }
                else if(event==rightAnswer.d){
                    alert("верно, вы выиграли");
                    break;
                }
            }
        }
    }
    else {
        alert("неверно, игра окончена");
        break;
    }
}
