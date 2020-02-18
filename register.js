function check(){
  if(document.getElementById('pass').value==""){
    document.getElementById('message').innerHTML="";
  }

  else if(document.getElementById('pass').value==document.getElementById('cpass').value){
    document.getElementById('message').style.color='green';
    document.getElementById('message').innerHTML='matching';
  }

  else
  {
    document.getElementById('message').style.color='red';
    document.getElementById('message').innerHTML='Invalid password';
  }
}