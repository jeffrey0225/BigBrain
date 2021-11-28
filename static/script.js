const httpRequest = (method,url) =>{
    var coco = {'text':'我站在雲林'};
    const http = new XMLHttpRequest();
    http.responseType = 'json'
    http.setRequestHeader('Content-Type','json')
    http.open(method,url);
    http.send(JSON.stringify(coco));
};


var push = document.getElementById('push');
push.addEventListener('click',httpRequest('POST','https://flaskjeffreymaster.herokuapp.com'));


