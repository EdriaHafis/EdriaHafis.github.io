const btn1 = document.querySelector('.btn-1');
const hitam = document.querySelector('#hmt');
const kotak1 = document.querySelector('.kotak-1');
const crtt = document.querySelector('.crt');
// kotak 1
btn1.addEventListener('click', function(){
    btn1.style.display = 'none';
    kotak1.style.display = 'block';
    hitam.classList.add('htm');
    crtt.classList.add('crtt');
    crtt.style.color = 'white';
});

// kotak 1
const but1 = document.querySelector('.but-1');
const kotak2 = document.querySelector('.kotak-2');
but1.addEventListener('click', function(){
    kotak1.style.display = 'none';
    kotak2.style.display = 'block';
})

// kotak2
const but2 = document.querySelector('.but-2');
const kotak3 = document.querySelector('.kotak-3');
const p3 = document.querySelector('.p-3');
but2.addEventListener('click', function(){
    kotak2.style.display = 'none';
    kotak3.style.display = 'block';
    p3.style.top = '50px';
})

const nama = []
function addNama(){
    const name = document.querySelector('.nama');
    nama.push(name.value);
    return addNama;
}

// kotak 3
const but3 = document.querySelector('.but-3');
const kotak4 = document.querySelector('.kotak-4');
const p4 = document.querySelector('.p-4');
but3.addEventListener('click', function(){
    kotak3.style.display = 'none';
    kotak4.style.display = 'block';
    addNama();
    p4.innerHTML = `Hai ${nama}`;
})

// kotak 4
const but4 = document.querySelector('.but-4');
const kotak5 = document.querySelector('.kotak-5');
const but5 = document.querySelector('.but-5');
const but51 = document.querySelector('.but-51');
but4.addEventListener('click', function(){
    kotak4.style.display = 'none';
    kotak5.style.display = 'block';
    but5.style.left = '120px';
    but51.style.left = '280px';
    but51.style.backgroundColor = 'blue';
    but51.style.border = '5px solid rgba(89, 89, 253, 0.89)';
})

// udah
const kotak6 = document.querySelector('.kotak-6');
const p6 = document.querySelector('.p-6');
const makan = document.querySelector('.mknApa');
but5.addEventListener('click', function(){
    kotak5.style.display = 'none';
    kotak6.style.display = 'block';
    p6.style.top = '50px';
})

const mknApa = []
function makanApa(){
    mknApa.push(makan.value);
    return makanApa;
}

const but6 = document.querySelector('.but-6');
const kotak7 = document.querySelector('.kotak-7');
const p7 = document.querySelector('.p-7');
but6.addEventListener('click', function(){
    kotak6.style.display = 'none';
    kotak7.style.display = 'block';
    makanApa();
    p7.innerHTML = `Hmm jadi pengen makan ${mknApa}`;
    p7.style.width = '300px';
    p7.style.fontSize = '20px';
})

const but7 = document.querySelector('.but-7');
const kotak8 = document.querySelector('.kotak-8');
const p8 = document.querySelector('.p-8');
but7.addEventListener('click', function(){
    kotak7.style.display = 'none';
    kotak8.style.display = 'block';
    p8.style.width = '300px';
    p8.style.fontSize = '18px';
})

const but8 = document.querySelector('.but-8');
const kotak9 = document.querySelector('.kotak-9');
const p9 = document.querySelector('.p-9');
but8.addEventListener('click', function(){
    kotak8.style.display = 'none';
    kotak9.style.display = 'block';
    p9.style.width = '350px';
})

const but9 = document.querySelector('.but-9');
const kotak10 = document.querySelector('.kotak-10');
but9.addEventListener('click', function(){
    kotak9.style.display = 'none';
    kotak10.style.display = 'block';
})

const but10 = document.querySelector('.but-10');
const kotak11 = document.querySelector('.kotak-11');
const p11 = document.querySelector('.p-11');
but10.addEventListener('click', function(){
    kotak10.style.display = 'none';
    kotak11.style.display = 'block';
    p11.style.width =  '300px';
})

const but11 = document.querySelector('.but-11');
const kotak12 = document.querySelector('.kotak-12');
const p12 = document.querySelector('.p-12');
but11.addEventListener('click', function(){
    kotak11.style.display = 'none';
    kotak12.style.display = 'block';
    p12.style.width =  '300px';
})

const but12 = document.querySelector('.but-12');
const kotak13 = document.querySelector('.kotak-13');
but12.addEventListener('click', function(){
    kotak12.style.display = 'none';
    kotak13.style.display = 'block';
})

const but13 = document.querySelector('.but-13');
const ily = document.querySelector('.ily');
but13.addEventListener('click', function(){
    kotak13.style.display = 'none';
    hitam.classList.remove('htm');
    ily.style.display = 'block';
    crtt.style.color = 'black';
})
// belum
const kotakb1 = document.querySelector('.kotak-b1');
but51.addEventListener('click', function(){
    kotak5.style.display = 'none';
    kotakb1.style.display = 'block';
})

const butb1 = document.querySelector('.but-b1');
const kotakb2 = document.querySelector('.kotak-b2');
butb1.addEventListener('click', function(){
    kotakb1.style.display = 'none';
    kotakb2.style.display = 'block';
})

const makananKesukaan = [];
function mknK() {
    const mknKesukaan = document.querySelector('.MK');
    makananKesukaan.push(mknKesukaan.value);
}

const butb2 = document.querySelector('.but-b2');
const kotakb3 = document.querySelector('.kotak-b3');
const pb3 = document.querySelector('.p-b3');
butb2.addEventListener('click', function(){
    kotakb2.style.display = 'none';
    kotakb3.style.display = 'block';
    pb3.style.top = '20%'
})

const butb3 = document.querySelector('.but-b3');
const kotakb4 = document.querySelector('.kotak-b4');
const pb4 = document.querySelector('.p-b4');
butb3.addEventListener('click', function(){
    kotakb3.style.display = 'none';
    kotakb4.style.display = 'block';
    mknK();
    pb4.innerHTML = `Hmm jadi pengen makan ${makananKesukaan}`
})

const butb4 = document.querySelector('.but-b4');
const kotakb5 = document.querySelector('.kotak-b5');
butb4.addEventListener('click', function(){
    kotakb4.style.display = 'none';
    kotakb5.style.display = 'block';
})

const butb5 = document.querySelector('.but-b5');
const kotakb6 = document.querySelector('.kotak-b6');
butb5.addEventListener('click', function(){
    kotakb5.style.display = 'none';
    kotakb6.style.display = 'block';
})

const butb6 = document.querySelector('.but-b6');
const kotakb7 = document.querySelector('.kotak-b7');
butb6.addEventListener('click', function(){
    kotakb6.style.display = 'none';
    kotakb7.style.display = 'block';
})

const butb7 = document.querySelector('.but-b7');
const kotakb8 = document.querySelector('.kotak-b8');
butb7.addEventListener('click', function(){
    kotakb7.style.display = 'none';
    kotakb8.style.display = 'block';
})

const butb8 = document.querySelector('.but-b8');
const kotakb9 = document.querySelector('.kotak-b9');
butb8.addEventListener('click', function(){
    kotakb8.style.display = 'none';
    kotakb9.style.display = 'block';
})

const butb9 = document.querySelector('.but-b9');
const kotakb10 = document.querySelector('.kotak-b10');
butb9.addEventListener('click', function(){
    kotakb9.style.display = 'none';
    kotakb10.style.display = 'block';
})

const butb10 = document.querySelector('.but-b10');
const kotakb11 = document.querySelector('.kotak-b11');
butb10.addEventListener('click', function(){
    kotakb10.style.display = 'none';
    kotakb11.style.display = 'block';
})

const butb11 = document.querySelector('.but-b11');
const kotakb12 = document.querySelector('.kotak-b12');
butb11.addEventListener('click', function(){
    kotakb11.style.display = 'none';
    kotakb12.style.display = 'block';
})

const butb12 = document.querySelector('.but-b12');
butb12.addEventListener('click', function(){
    kotakb12.style.display = 'none';
    hitam.classList.remove('htm');
    ily.style.display = 'block';
    crtt.style.color = 'black';
})