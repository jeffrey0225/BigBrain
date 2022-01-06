var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://raw.githubusercontent.com/jeffrey0225/nigger/main/assets/vendor/bootstrap-icons/bootstrap-icons.css", true);
xhttp.onreadystatechange = function() {
  if (xhttp.readyState === 4) {
    if (xhttp.status === 200) {
      var link = document.createElement('style');
link.innerHTML=xhttp.responseText;
document.getElementsByTagName('head')[0].appendChild(link);
    }
  }
}
xhttp.send(null);
