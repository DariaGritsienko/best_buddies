function checkbox(isValid){
  if(name.checkValidity() && document.querySelector('#check').checked && email.checkValidity()){
    document.querySelector('#submit').removeAttribute('disabled');
    document.querySelector('#submitOnes').removeAttribute('disabled');
  }else{
    document.querySelector('#submit').setAttribute('disabled', true);
    document.querySelector('#submitOnes').setAttribute('disabled', true);
  }
}

function checkboxPopup(isValid){
  if(namePopup.checkValidity() && document.querySelector('#checkbox').checked && emailPopup.checkValidity()){
    document.querySelector('#submitPopup').removeAttribute('disabled');
    document.querySelector('#submitOnesPopup').removeAttribute('disabled');
  }else{
    document.querySelector('#submitPopup').setAttribute('disabled', true);
    document.querySelector('#submitOnesPopup').setAttribute('disabled', true);
  }
}
