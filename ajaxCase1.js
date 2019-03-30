var oAJAX = new XMLHttpRequest();
var frmLogin = document.getElementById('frmLogin');
frmLogin.addEventListener('submit', function (evt) {

    var oForm = evt.target;//прочитал, что при отсутствии скобок мы получаем не результат выполнения функции как при их наличии, а ... непонятно?

    var s = "";
    var cEls = oForm.elements;
    for (var i in cEls){
        if(s !== 0) s += "&";//вот здесь вопрос "&" - что-то побитовое, я не знаю что это, какая логика этого выражения? Что s+= это s=s+"&" это я понимаю

        s =+ cEls[i].name + " = " + encodeURIComponent(cEls.value)
    }
    oAJAX.open(oForm.method, oForm.action, true);
    oAJAX.setRequestHeader("Content-type", oForm.enctype);
    oAJAX.addEventListener("readystatechange", function(evt){
        if((evt.target.readyState === 4) && (evt.target.status === 200)){
            var s = evt.target.responseText();
        }
        //вывод...
    });//end listener for oAJAX
    oAJAX.send(s);//здесь непонятно какая var s: из строки 6 или из строки 17? мое мнение что из строки 6, мы же отправляем пару "имя" => "значение" из полей формы, а в 17 строке объявляем новую
    evt.preventDefault();

});//end listener for frmLogin