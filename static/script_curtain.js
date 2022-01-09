var open_1 = document.getElementById('open');
var close_1 = document.getElementById('close');
var woke = document.getElementById('woke');
var bed = document.getElementById('bed');

const sendHttpRequest = (method, url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
  
    xhr.responseType = 'json';
    
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.send(JSON.stringify(data));
    
};

const sendData_open = () => {
    sendHttpRequest('POST', '/curtain', 1, {
    })
};
const sendData_close = () => {
    sendHttpRequest('POST', '/curtain', 2, {
    })
};
const sendData_woke = () => {
    sendHttpRequest('POST', '/curtain', 1, {
    })
    sendHttpRequest('POST', '/light', 1, {
    })
};
const sendData_bed = () => {
    sendHttpRequest('POST', '/curtain', 2, {
    })
    sendHttpRequest('POST', '/light', 4, {
    })
};



open_1.addEventListener('click', sendData_open);
close_1.addEventListener('click', sendData_close);
woke.addEventListener('click', sendData_woke);
bed.addEventListener('click', sendData_bed);


