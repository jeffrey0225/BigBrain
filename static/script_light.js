// btn id
var open_1 = document.getElementById('open');
var close_1 = document.getElementById('close');
var party = document.getElementById('party');
var sleep = document.getElementById('sleep');
var study = document.getElementById('study');
var relax = document.getElementById('relax');


//-------------------------------------------------------------

const sliderHttpRequest = (method, url, data) => {
  const slider_http = new XMLHttpRequest();
  slider_http.open(method, url, true);

  slider_http.responseType = 'json';
  
  slider_http.setRequestHeader('Content-Type', 'application/json');
  
  slider_http.send(JSON.stringify(data));
  
};

// slider_brightness
let rangeInput_bts = document.querySelector(".brightness .range-input input");
let rangeValue_bts = document.querySelector(".brightness .range-input .value div");

let start_bts = parseFloat(rangeInput_bts.min);
let end_bts = parseFloat(rangeInput_bts.max);
let step_bts = parseFloat(rangeInput_bts.step);

for(let i=start_bts;i<=end_bts;i+=step_bts){
  rangeValue_bts.innerHTML += '<div>'+i+'</div>';
}

rangeInput_bts.addEventListener("input",function(){
  let top = parseFloat(rangeInput_bts.value)/step_bts * -40;
  rangeValue_bts.style.marginTop = top+"px";
  const slider_brightness = new XMLHttpRequest();
  slider_brightness.open('POST', '/brightness', true);

  slider_brightness.responseType = 'json';
  
  slider_brightness.setRequestHeader('Content-Type', 'application/json');
  
  slider_brightness.send(JSON.stringify(rangeInput_bts.value));
});


// slider_r
let rangeInput_r = document.querySelector(".red .range-input input");
let rangeValue_r = document.querySelector(".red .range-input .value div");

let start_r = parseFloat(rangeInput_r.min);
let end_r = parseFloat(rangeInput_r.max);
let step_r = parseFloat(rangeInput_r.step);

for(let i=start_r;i<=end_r;i+=step_r){
  rangeValue_r.innerHTML += '<div>'+i+'</div>';
}

rangeInput_r.addEventListener("input",function(){
  let top = parseFloat(rangeInput_r.value)/step_r * -40;
  rangeValue_r.style.marginTop = top+"px";
  const slider_red = new XMLHttpRequest();
  slider_red.open('POST', '/red', true);

  slider_red.responseType = 'json';
  
  slider_red.setRequestHeader('Content-Type', 'application/json');
  
  slider_red.send(JSON.stringify(rangeInput_r.value));
});

//slider_g
let rangeInput_g = document.querySelector(".green .range-input input");
let rangeValue_g = document.querySelector(".green .range-input .value div");

let start_g = parseFloat(rangeInput_g.min);
let end_g = parseFloat(rangeInput_g.max);
let step_g = parseFloat(rangeInput_g.step);

for(let i=start_g;i<=end_g;i+=step_g){
  rangeValue_g.innerHTML += '<div>'+i+'</div>';
}

rangeInput_g.addEventListener("input",function(){
  let top = parseFloat(rangeInput_g.value)/step_g * -40;
  rangeValue_g.style.marginTop = top+"px";
  const slider_green = new XMLHttpRequest();
  slider_green.open('POST', '/green', true);

  slider_green.responseType = 'json';
  
  slider_green.setRequestHeader('Content-Type', 'application/json');
  
  slider_green.send(JSON.stringify(rangeInput_g.value));
});

//slider_b
let rangeInput_b = document.querySelector(".blue .range-input input");
let rangeValue_b = document.querySelector(".blue .range-input .value div");

let start_b = parseFloat(rangeInput_b.min);
let end_b = parseFloat(rangeInput_b.max);
let step_b = parseFloat(rangeInput_b.step);

rangeValue_b.innerHTML += '<div>'+rangeInput_b.value+'</div>';
for(let i=start_b;i<=end_b;i+=step_b){
  rangeValue_b.innerHTML += '<div>'+i+'</div>';
}

rangeInput_b.addEventListener("input",function(){
  let top = parseFloat(rangeInput_b.value)/step_b * -40;
  rangeValue_b.style.marginTop = top+"px";

  const slider_blue = new XMLHttpRequest();
  slider_blue.open('POST', '/blue', true);

  slider_blue.responseType = 'json';
  
  slider_blue.setRequestHeader('Content-Type', 'application/json');
  slider_blue.send(JSON.stringify(rangeInput_b.value));
  
});

// http-button
const sendHttpRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  xhr.responseType = 'json';
  
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.send(JSON.stringify(data));
  
};

const sendData_open = () => {
  sendHttpRequest('POST', '/light', 1, {
  })
};
const sendData_close = () => {
  sendHttpRequest('POST', '/light', 2, {
  })
};
const sendData_party = () => {
  sendHttpRequest('POST', '/light', 3, {
  })
};
const sendData_sleep = () => {
  sendHttpRequest('POST', '/light', 4, {
  })
};
const sendData_study = () => {
  sendHttpRequest('POST', '/light', 5, {
  })
};
const sendData_relax = () => {
  sendHttpRequest('POST', '/light', 6, {
  })
};
open_1.addEventListener('click', sendData_open);
close_1.addEventListener('click', sendData_close);
party.addEventListener('click', sendData_party);
sleep.addEventListener('click', sendData_sleep);
study.addEventListener('click', sendData_study);
relax.addEventListener('click', sendData_relax);
