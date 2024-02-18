function calculateAge(){
    //get values from the form
    var name=document.getElementById('name').value;
    var day=document.getElementById('day').value;
    var month=document.getElementById('month').value;
    var year=document.getElementById('year').value;
    // Create a Date object from the input values
    var birthDate= new Date(year,month - 1,day);
    //Calculate the age
    var currentDate=new Date();
    var age=currentDate.getFullYear() - birthDate.getFullYear();

    if(currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())){
        age--;
    }
     
    var resultElement= document.getElementById('result');
    resultElement.innerHTML = name + ",votre age est:"+ age + "ans.";
}