const httpRequest = (method,url) =>{
    var coco = {'text':'我好酷'};
    const http = new XMLHttpRequest();
    http.responseType = 'json'
    http.setRequestHeader('Content-Type','json')
    http.open(method,url);
    http.send(JSON.stringify(coco));
};


var push = document.getElementById('push');
push.addEventListener('click',httpRequest('POST','http://127.0.0.1:8000/'));


