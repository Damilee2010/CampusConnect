let signup = document.getElementById('signup')
let student = document.getElementById('student')
let staff = document.getElementById('staff')
let guest = document.getElementById('guest')

signup.addEventListener('click',()=>{
    if(student.checked){
        alert("Student login");
    }else if(staff.checked){
        alert("Staff login");
    }else if(guest.checked){
        alert("Guest login");
    }
})