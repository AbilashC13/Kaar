function validate{

	var name=document.pregister.fname;
	var email=document.pregister.mail;
	var pas=document.pregister.pass;
	var cpas=document.pregister.cpass;
	var phon=document.pregister.mobile;
	var cate=document.pregister.cat;
	var cite=document.pregister.city;
	var zcod=document.pregister.zip;
	var letters = /^[A-Za-z]+$/;
	
	
	if (name.value == 0)                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (email.value == 0)                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phon.value == 0)                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   
  
    if (cate.selectedIndex < 1)                  
    { 
        alert("Please enter your course."); 
        cate.focus(); 
        return false; 
    } 
	
	if (pas.value == 0)                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
	else  if(document.getElementById('pass').value==document.getElementById('cpass').value){
		document.getElementById('message').style.color='green';
		document.getElementById('message').innerHTML='matching';
	}

	else
	{
		document.getElementById('message').style.color='red';
		document.getElementById('message').innerHTML='Invalid password';
	}
    return true;
}
   
	
	
