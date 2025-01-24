let studentArray = [] ;

if(localStorage.getItem("studentsData"))
    studentArray = JSON.parse(localStorage.getItem("studentsData")) ;

function deleteStudent(id)
{
    let studentIndex = studentArray.findIndex(function(element){
        return element.id === id ? true : false ;
    })    
    studentArray.splice(studentIndex,1) ;
    localStorage.setItem("studentsData", JSON.stringify(studentArray)) ;    // update the localStorage after removal of a student
    location.reload(true);  // display the updated list
}

// function editStudent()
// {

// }

function displayStudents()
{
    $(".details").remove() ;
    let html = '' ;
    studentArray.forEach(function(element){
        html += `
            <tr class="details">
                <th scope="row">${element.id}</th>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.klass}</td>
                <td>${element.gender}</td>
                <td>${element.uniqueID}</td>
                <td>
                    <button type="button" class="btn btn-danger" onclick="deleteStudent(${element.id})">Remove</button>
                    <button type="button" class="btn btn-primary" onclick="editStudent(${element.id})">Edit</button>
                </td>
            </tr>`
    })
    $("#list").append(html) ;
}

displayStudents() ;

// To sort the students
$("#byName").on("click",function(){
    studentArray.sort(function(a,b){
        return a.name.localeCompare(b.name) ;
    })
    localStorage.setItem("studentsData", JSON.stringify(studentArray));
    displayStudents() ;
})

$("#byGrade").on("click",function(){
    studentArray.sort(function(a,b){
        return a.klass - b.klass ;
    })
    localStorage.setItem("studentsData", JSON.stringify(studentArray));
    displayStudents() ;
})

$("#byAge").on("click",function(){
    studentArray.sort(function(a,b){
        return a.age - b.age ;
    })
    localStorage.setItem("studentsData", JSON.stringify(studentArray));
    displayStudents() ;
})

// To search the students --> i'll have the count for all the matching students and then
// use loop count times to create the html and append it but we have a better solution
$("#srchBtn").on("click",function(){
    let findBy = $("#search").val() ;
    let studentsFound = studentArray.filter(function(element){
        return findBy === element.name || findBy === element.klass || findBy === element.uniqueID ;
    })
    if(studentsFound.length === 0)
    {
        alert("Not found! Try different Name, Grade or uniqueID") ;
    }else{
        $(".details").remove() ;
        let html1 = '' ;
        studentsFound.forEach(function(element){
            html1 += `
            <tr class="details">
                <th scope="row">${element.id}</th>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.klass}</td>
                <td>${element.gender}</td>
                <td>${element.uniqueID}</td>
                <td><button type="button" class="btn btn-danger" onclick="deleteStudent(${element.id})">Remove</button>
                <button type="button" class="btn btn-primary" onclick="editStudent(${element.id})">Edit</button></td>
            </tr>`
        })   
        $("#list").append(html1) ;
    }
})