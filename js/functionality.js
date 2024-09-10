function Click(e){
    e.preventDefault();
   var name=document.getElementById('name').value;
   var password=document.getElementById('password').value;
   var gender=document.getElementsByName('gender');

   for(i=0;i<gender.length;i++){
    if(gender[i].checked===true){
        var valueofGender=gender[i].value;
    }
   }

   var v = document.getElementById("eduaction");
    var value = v.value;
    var text = v.options[v.selectedIndex].text;

   var hobbies=document.getElementsByName('hobbies');
   
   for(i=0;i<hobbies.length;i++){
    if(hobbies[i].checked==true){
        var hobbiesText=hobbies[i].value;
    }
   }

   
   var comment=document.getElementById('comment').value;




   document.getElementById('nameResult').innerHTML=name;
   document.getElementById('passwordResult').innerHTML=password;
   document.getElementById('genderResult').innerHTML=valueofGender;
   document.getElementById('educationResult').innerHTML=text;
   document.getElementById('hobbyResult').innerHTML+=hobbiesText;
   document.getElementById('commentResult').innerHTML=comment;
}
