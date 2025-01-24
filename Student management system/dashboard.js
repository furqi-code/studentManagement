let studentArray = [] ;

if(localStorage.getItem("studentsData"))
    studentArray = JSON.parse(localStorage.getItem("studentsData")) ;

let html = "" ;
html += `<h3>Current students -> ${studentArray.length}</h3>`
$("#totalStudents").append(html) ;

$("#delete").on("click",function(){
    studentArray = [] ;
    localStorage.clear() ;
})