let teresa = document.getElementById('teresa');
let celmira = document.getElementById('celmira');
let azenate = document.getElementById('azenate');
let samuel = document.getElementById('samuel');
let cristovao = document.getElementById('cristovao');
const membros = [teresa, celmira, azenate, samuel, cristovao];
let input1 = document.getElementById('inp1');
input1.oninput = distribuir;
let valor;

function distribuir(){
    valor = input1.value/membros.length;
    for(let i = 0; i < membros.length; i++){
        membros[i].innerHTML = valor;
    }
    console.log('Hello world');
}

let input2 = document.getElementById('inp2');
input2.oninput = ateQuando;
function ateQuando(){
    let m, a, t = 0;
    console.log("I'm supposed to run!");
    while(t < valor){
        m += 1;
        t += input2.value;
        if(m > 12){
            a += 1;
            m = 0;
        }
    }
    document.getElementById('meses').innerHTML = m;
    document.getElementById('anos').innerHTML = a;
    document.getElementById('total').innerHTML = t;
}