var push = document.getElementById('push');

const sendHttpRequest = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
  
    xhr.responseType = 'json';
    
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    var text = 123;
    
    xhr.send(JSON.stringify(text));
    
};

const sendData = () => {
    sendHttpRequest('POST', "/", {
    })
};

push.addEventListener('click', sendData);


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()