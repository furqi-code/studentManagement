let studentArray = [] ;

if(localStorage.getItem("studentsData"))
    studentArray = JSON.parse(localStorage.getItem("studentsData")) ;

class Student{
    static count = localStorage.getItem("stdsCount") ? JSON.parse(localStorage.getItem("stdsCount")) : 0 ;

    constructor(name, age, klass, gender, uniqueid)
    {
        this.name = name ;
        this.age = age ;
        this.klass = klass ;
        this.gender = gender ;
        this.uniqueID = uniqueid
        this.id = ++Student.count ;
        localStorage.setItem("stdsCount",Student.count) ;
    }
}

$("#submitBtn").on("click", function(){
    let name = $("#studentName").val() ;
    let age = $("#studentAge").val() ;
    let klass = $("#studentClass").val() ;
    let uniqueid = $("#studentId").val() ;
    let gender = $("input[name='gender']:checked").val();

    let obj = new Student(name, age, klass, gender, uniqueid) ;
    studentArray.push(obj) ;
    localStorage.setItem("studentsData", JSON.stringify(studentArray)) ;

    // setTimeout(function(){
    //     window.open("C:\\Users\\Dell\\Desktop\\Web Deveploment\\class work\\Javascript\\Student management system\\Viewstudent.html") ;
    // },1000) ;

    $("#studentName, #studentAge, #studentClass, #gender").val("") ;
})