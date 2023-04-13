// INPUT CONSTANT


const delInput = document.getElementById('delSold');
const preInput = document.getElementById('preSold');
const exeInput = document.getElementById('exeSold');
const supInput = document.getElementById('supSold');
const famInput = document.getElementById('famSold');
const sunInput = document.getElementById('sunSold');
const seaInput = document.getElementById('seaSold');
const casInput = document.getElementById('casSold');
const barInput = document.getElementById('barSold');


// BUTTON CONSTANT


const delCalc = document.getElementById('calcDel');
const preCalc = document.getElementById('calcPre');
const exeCalc = document.getElementById('calcExe');
const supCalc = document.getElementById('calcSup');
const famCalc = document.getElementById('calcFam');
const sunCalc = document.getElementById('calcSun');
const seaCalc = document.getElementById('calcSea');
const casCalc = document.getElementById('calcCas');
const barCalc = document.getElementById('calcBar');


// TOTAL CONSTANT


const delProd = document.getElementById('delTotal');
const preProd = document.getElementById('preTotal');
const exeProd = document.getElementById('exeTotal');
const supProd = document.getElementById('supTotal');
const famProd = document.getElementById('famTotal');
const sunProd = document.getElementById('sunTotal');
const seaProd = document.getElementById('seaTotal');
const casProd = document.getElementById('casTotal');
const barProd = document.getElementById('barTotal');


// FUNCTIONS


function calD() {
    let x = delInput.value;
    let y = 5720;


    delProd.innerHTML = 'Php ' + x * y + '.00';
}


function calP() {
    let x = preInput.value;
    let y = 5980;


    preProd.innerHTML = 'Php ' + x * y + '.00';
}


function calX() {
    let x = exeInput.value;
    let y = 6500;


    exeProd.innerHTML = 'Php ' + x * y + '.00';
}


function calS() {
    let x = supInput.value;
    let y = 7800;


    supProd.innerHTML = 'Php ' + x * y + '.00';
}


function calF() {
    let x = famInput.value;
    let y = 8215;


    famProd.innerHTML = 'Php ' + x * y + '.00';
}


function calU() {
    let x = sunInput.value;
    let y = 10140;


    sunProd.innerHTML = 'Php ' + x * y + '.00';
}


function calE() {
    let x = seaInput.value;
    let y = 13000;


    seaProd.innerHTML = 'Php ' + x * y + '.00';
}


function calC() {
    let x = casInput.value;
    let y = 18579;


    casProd.innerHTML = 'Php ' + x * y + '.00';
}


function calB() {
    let x = barInput.value;
    let y = 21398;


    barProd.innerHTML = 'Php ' + x * y + '.00';
}

