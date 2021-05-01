var today=new Date();
var days=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
var months=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let weekDay=days[today.getDay()];
let monthDay=today.getDate();
let month=today.getMonth();
let year=today.getFullYear();
var fecha=document.getElementById('fecha');
fecha.innerHTML= `${year}, ${month}, ${year}`;

var btnAdd=document.getElementById('btnAdd');
var lista= document.querySelector('.lista');
var inputTarea=document.getElementById('inputTarea');
lista.addEventListener('click', function(){
    btnDone(event);
});
btnAdd.addEventListener('click', function(){
    addElement('li', inputTarea.value)
});

function addElement(lbl, text){
    console.log(text);

    if(text===''){
        return;
    }
    const htmlCode= `<p class="work">${text}</p>
    <i job="done" class="fa fa-check-circle fa-2x done"></i>
    <i job="remove" class="fa fa-trash fa-2x remove"></i>`;
    const element=document.createElement(lbl);
    element.innerHTML=htmlCode;
    lista.appendChild(element);
    inputTarea.value='';
    
}
function btnDone(event){
    let elem=event.target;
    let elementJob=elem.attributes.job.value;
    if(elementJob==='done'){
        const p=elem.parentNode;
        p.style="background: rgb(136, 239, 243);"
        alert("terminar: "+p.getElementsByTagName("p")[0].textContent)
    }else if(elementJob==='remove'){
        const li=elem.parentNode;
        lista.removeChild(li);
    }
}