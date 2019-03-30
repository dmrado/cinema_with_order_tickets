var trCount = 12; //кол-во рядов
var tdCount = 18; //кол-во столбцов
var count = 1;//счетчик мест
var saved = []; //массив для хранения красных (проданных)

//создаем таблицу и сразу стилизуем с помощью js
var table = document.createElement('table');//создали элемент табица
// задаем id для таблицы
table.setAttribute('id', 'tbl');
//задаем css-стили для таблицы
table.style.borderCollapse = 'collapse';
table.style.borderSpacing = '0';
table.style.margin = '20px 0';
//или то же самое делаем одной командой:
//table.style.cssText = 'border-collapse:collapse; border-spacing: 0; margin: 20px 0';
//выводим таблицу в id="wrapper"
document.getElementById('wrapper').appendChild(table);//table без кавычек потому что значит передаем переменную
//в цикле формируем таблицу (объемную матрицу) размером trCount * tdCount, цикл вложенный
for(var i = 1; i<=trCount; i++){//формируем ряды: создаем ряд и добавляем его в таблицу, ряд это переменная tr
    var tr = document.createElement('tr');
    table.appendChild(tr);//наверху 12 рядов указано в переменной trCount
    //создаем ячейку (строка)
    var td = document.createElement('td');
    td.innerHTML = i; //ставим нумерацию, добавляя текущее значение i
    table.appendChild(td);
    for(var j = 1; j<=tdCount; j++){//в каждом ряду формируем столбец
        //создаем ячейку (колонка)
        td = document.createElement('td');
        //создаем для каждоя ячейки id равное текущему значению переменной count
        td.setAttribute('id', count);//будем увеличивать ее значение на каждом проходе цикла for
        //пишем в ячейку номер места в ряду (колонка) и значение count- сквозного счетчика
        td.innerHTML = j + '(' + count + ')';//в скобках видимый номер сквозной
        //задаем css-для каждой ячейки
        td.style.padding = '5px 2px';
        td.style.border = '1px orange solid';
        td.style.textAlign = 'center';
        td.style.backgroundColor = 'green';
        td.style.color = 'white';
        td.style.cursor = 'pointer';
        //добавляем ячейку в ряд
        tr.appendChild(td);
        //функция на событие при клике на ячейку
        td.onclick = function(){
            if( this.style.backgroundColor === 'green' ){

                this.style.backgroundColor = 'yellow';
                this.style.color = 'red';
            }else if( this.style.backgroundColor === 'red'){//запрещаем менять красные
                this.style.backgroundColor = 'red';
                this.style.color = 'white';

            }else {
                this.style.backgroundColor = 'green';
                this.style.color = 'white';
            }
        };
        count++;// увеличиваем счетчик на единицу
    }//конец цикла
}//конец цикла

//создаем input, атрибуты и выведем его в wrapper
var inputPrice = document.createElement('input');
inputPrice.setAttribute('id', 'price');
inputPrice.setAttribute('type', 'text');
inputPrice.setAttribute('placeholder', 'цена');
inputPrice.setAttribute('value', '250');
document.getElementById('wrapper').appendChild(inputPrice);

//выводим статистику по ячейкам
//всего ячеек
//<p>Всего: <span id="all">count</span></p>
var textAll = document.createElement('p');
var spanAll = document.createElement('span');
textAll.innerHTML = 'Всего: ';
    spanAll.setAttribute('id', 'all');
    spanAll.innerHTML = parseInt(count-1);//сюда пока попадает весь счетчик, далее будем писать код подсчета красных. parseInt - не обязательно приводить все к числу явно, но так надежнее
document.getElementById('wrapper').appendChild(textAll);
textAll.appendChild(spanAll);//количество всех мест перебралось в строке 53 суммировалось

//обрабатываем зеленые
//<p>Зеленые: <span id="green">count</span></p>
var textGreen = document.createElement('p');
var spanGreen = document.createElement('span');
textGreen.innerHTML = 'Зеленые: ';
    spanGreen.setAttribute('id', 'green');
    spanGreen.innerHTML = parseInt(count-1);//сюда пока попадает весь счетчик, далее будем писать код подсчета зеленых
document.getElementById('wrapper').appendChild(textGreen);
textGreen.appendChild(spanGreen);

//обрабатываем красные
//<p>Красные: <span id="red">0</span></p>
var textRed = document.createElement('p');
var spanRed = document.createElement('span');
textRed.innerHTML = 'Красные: ';
    spanRed.setAttribute('id', 'red');
    spanRed.innerHTML = 0;//сюда пока попадает весь счетчик, далее будем писать код подсчета красных
document.getElementById('wrapper').appendChild(textRed);
textRed.appendChild(spanRed);

//будем хранить массив красных элементов
//номера красных (проданные билеты)
//Номера красных: <span id="saved">0</span></p>

var textRedNum = document.createElement('p');
var spanRedNum = document.createElement('span');
textRedNum.innerHTML = 'Номера красных: ';
spanRedNum.setAttribute('id', 'saved');
spanRedNum.innerHTML = 0;//сюда пока попадает весь счетчик, далее будем писать код подсчета красных
document.getElementById('wrapper').appendChild(textRedNum);
textRedNum.appendChild(spanRedNum);

// сумма красных (сумма проданных билетов)
//Номера красных: <span id="sum">0</span></p>

var textRedSum = document.createElement('p');
var spanRedSum = document.createElement('span');
textRedSum.innerHTML = 'Сумма красных: ';
spanRedSum.setAttribute('id', 'sum');
spanRedSum.innerHTML = 0;//сюда попадает весь счетчик пока, далее будем писать код подсчета красных
document.getElementById('wrapper').appendChild(textRedSum);
textRedSum.appendChild(spanRedSum);

//создаем три кнопки
//кнопка сброс всех ячеек и статистики
var buttonClear = document.createElement('button');
buttonClear.setAttribute('id', 'btn-clear');
buttonClear.innerHTML = 'Сбросить все';//надпись на кнопке
buttonClear.style.marginRight = '10px';//отступ справа до следующей кнопке
document.getElementById('wrapper').appendChild(buttonClear);//выводим кнопку во wrapper

//кнопка сброс желтых
var buttonClearYellow = document.createElement('button');
buttonClearYellow.setAttribute('id', 'btn-clear-yellow');
buttonClearYellow.innerHTML = 'Сбросить желтые';//надпись на кнопке
buttonClearYellow.style.marginRight = '10px';
document.getElementById('wrapper').appendChild(buttonClearYellow);//выводим кнопку во wrapper

//кнопка сохранить желтые становятся красными (проданные) - меняем состояние
var buttonSave = document.createElement('button');
buttonSave.setAttribute('id', 'btn-clear-yellow');
buttonSave.innerHTML = 'Сохранить';//надпись на кнопке
document.getElementById('wrapper').appendChild(buttonSave);//выводим кнопку во wrapper

//обработчик события onClick кнопки id="btn-clear"
buttonClear.onclick = function(){
    for (var i = 1; i < count; i++){
        //у каждой ячейки есть id который мы сравниваем с текущим сквозным номером обращаясь к ячейке через него
        document.getElementById(i).style.backgroundColor = 'green';
        document.getElementById(i).style.color = 'white';
    }
    document.getElementById('saved').innerHTML = 0;//сбрасываем текущую надписи на кнопках
    document.getElementById('sum').innerHTML = 0;
    document.getElementById('red').innerHTML = 0;
    document.getElementById('green').innerHTML = (count - 1);
    // здесь обнулить массив красных
    saved = [];
};

//обработчик события onclick для id="btn-clear-yellow"

buttonClearYellow.onclick = function(){
    for (var i = 1; i < count; i++){
        //просто меняем бекграунд с желтого на зеленый и цвет текста на белый, а document.getElementById(i).style можно присвоить перемешки и заменить в строке
        var item = document.getElementById(i).style;
        if(item.backgroundColor === 'yellow'){item.backgroundColor = 'green';
            item.color = 'white';
        }
    }
};

//обработчик события onclick для id="btn-save"
//кнопка сохраняет желтые ячейки и делает их краными, и все счетчики должны обновиться и в номера красных будет формироваться массив, сумма будет формироваться путем умножения красных на цену

buttonSave.onclick = function(){
    for(var i = 1; i < count; i++){
        var item = document.getElementById(i).style;
        if(item.backgroundColor === 'yellow'){
            item.backgroundColor = 'red';
            item.color = 'white';
            saved.push(i);//так как он под условием текущего if, он попадает здесь в массив для хранения красных, объявленный в начале
            //считаем сумму красных и сохраняем в id = "sum"
            var sum = Number(document.getElementById('sum').innerHTML);//пока он равен нулю, но по мере прохода и нахождения красных в цикле for, на каждом шаге будет создаваться и складываться. innerHTML - браузер может вернуть как string поэтому делаем Number
            //получаем цену из input
            var price = Number(document.getElementById('price').value);
            //теперь есть сумма и цена, надо перемножить
          sum = Number(sum) + Number(price);//так как это цикл, то на каждом шаге в этом выражении прибавляется один билет и его стоимость, т. о. фактически сумируются стоимость одного билета alert(sum)
            //теперь кладем его обратно для того, что б оно там было и потом сложилось со стоимостью следуюдщего билета после очередного прохода цикла
            document.getElementById('sum').innerHTML = sum;

            //а можно привычным способом
            // sum = saved.lenght * Number(price);
        }
    }
    //вышли из цикла обновляем статистику
    //сколько зеленых их общее количество минус столько сколько теперь красных
    var green = Number(count-1) - saved.length;
    document.getElementById('green').innerHTML = green;//записываем в id = green значение переменной green

    //количество красных равно saved.length
    document.getElementById('red').innerHTML = saved.length;//тип значени важен, когда мы значения переменных получаем, а когда пише в браузер, то не важно

    //теперь выводим в массив номера красных (занятых мест)
    document.getElementById('saved').innerHTML = saved.toString();

};