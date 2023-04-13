// CONSTANTS
const contBtn = document.getElementsByClassName('contContainer');
const bookedLabel = document.getElementById('bookedID');
const chargedAmnt = document.getElementById('charge');
const calcAmnt = document.getElementById('calculate');
const totalAmnt = document.getElementById('total');
const totalNights = document.getElementById('ttlNights').value;
const nights = document.getElementById('ttlNights');
const checkIn = document.getElementById('checkin');
const checkOut = document.getElementById('checkout');
const nightDiff = document.getElementById('nightdiff');
const roomWrapper = document.getElementById('roomwrapper');
const paymentPanel = document.getElementById('paymentpanel');
const wrapperLabel = document.getElementById('thetitle');
const directLabel = document.getElementById('titlecontent');

const deluPrice = "Php 5,720.00";
const premPrice = "Php 5,980.00";
const execPrice = "Php 6,500.00";
const supPrice = "Php 7,800.00";
const delfamPrice = "Php 8,215.00";
const sunPrice = "Php 10,140.00";
const seaPrice = "Php 13,000.00";
const casaPrice = "Php 18,579.00";
const barkPrice = "Php 21,398.00";

const deluBtn = document.getElementById('rb1');
const deluInfo = document.getElementById('deluxe');

const premBtn = document.getElementById('rb2');
const premInfo = document.getElementById('premier');

const execBtn = document.getElementById('rb3');
const execInfo = document.getElementById('executive');

const supBtn = document.getElementById('rb4');
const supInfo = document.getElementById('superior');

const delfamBtn = document.getElementById('rb5');
const delfamInfo = document.getElementById('delfam');

const sunBtn = document.getElementById('rb6');
const sunInfo = document.getElementById('sunset');

const seaBtn = document.getElementById('rb7');
const seaInfo = document.getElementById('seaview');

const casaBtn = document.getElementById('rb8');
const casaInfo = document.getElementById('casa');

const barkBtn = document.getElementById('rb9');
const barkInfo = document.getElementById('barkada');

const closeBtn = document.querySelectorAll('.closeSummary');
const parent = closeBtn.parentElement;

const contB1 = document.getElementById('contContainer1');
const contB2 = document.getElementById('contContainer2');
const contB3 = document.getElementById('contContainer3');
const contB4 = document.getElementById('contContainer4');
const contB5 = document.getElementById('contContainer5');
const contB6 = document.getElementById('contContainer6');
const contB7 = document.getElementById('contContainer7');
const contB8 = document.getElementById('contContainer8');
const contB9 = document.getElementById('contContainer9');

// VARIABLES
var a = checkIn.value;
var b = checkOut.value;

// BOOKING FUNCTIONS
function paymentForm() {
    roomWrapper.style.opacity = 0;
    paymentPanel.style.display = "flex";
    wrapperLabel.style.position = "absolute";
    directLabel.innerHTML = "Provide Your Information";
    wrapperLabel.style.bottom = "27.45rem";
}

function closeSummary() {
    totalAmnt.innerHTML = "Php 0.00";
    contB1.style.display = "none";
    contB2.style.display = "none";
    contB3.style.display = "none";
    contB4.style.display = "none";
    contB5.style.display = "none";
    contB6.style.display = "none";
    contB7.style.display = "none";
    contB8.style.display = "none";
    contB9.style.display = "none";
    bookedLabel.style.display = "none";
    chargedAmnt.style.display = "none";
}

function deluSum() {
    deluInfo.style.display = "block";
    contB1.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = deluPrice;
}

function calcDelu() {
    if (getComputedStyle(deluInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 5720;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function premSum() {
    premInfo.style.display = "block";
    contB2.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = premPrice;
}

function calcPrem() {
    if (getComputedStyle(premInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 5980;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function execSum() {
    execInfo.style.display = "block";
    contB3.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = execPrice;
}

function calcExec() {
    if (getComputedStyle(execInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 6500;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function supSum() {
    supInfo.style.display = "block";
    contB4.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = supPrice;
}

function calcSup() {
    if (getComputedStyle(supInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 7800;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function delfamSum() {
    delfamInfo.style.display = "block";
    contB5.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = delfamPrice;
}

function calcDelFam() {
    if (getComputedStyle(delfamInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 8215;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function sunSum() {
    sunInfo.style.display = "block";
    contB6.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = sunPrice;
}

function calcSun() {
    if (getComputedStyle(sunInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 10140;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function seaSum() {
    seaInfo.style.display = "block";
    contB7.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = seaPrice;
}

function calcSea() {
    if (getComputedStyle(seaInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 13000;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function casaSum() {
    casaInfo.style.display = "block";
    contB8.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = casaPrice;
}

function calcCasa() {
    if (getComputedStyle(casaInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 18579;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}

function barkSum() {
    barkInfo.style.display = "block";
    contB9.style.display = "block";
    bookedLabel.style.display = "block";
    chargedAmnt.style.display = "block";

    totalAmnt.innerHTML = barkPrice;
}

function calcBark() {
    if (getComputedStyle(barkInfo)["display"] === "block"){
        num1 = document.getElementById('ttlNights').value;
        num2 = 21398;

        totalAmnt.innerHTML = "Php" +  " " + num1 * num2 + ".00";
    }
}