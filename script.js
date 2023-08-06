let form = document.getElementById("form");
form.addEventListener("submit",(event)=>{ 
    let email = event.target.email1.value;
    let password = event.target.pass.value;
    let age = event.target.age.value;
    let code = event.target.Code.value;
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for(let i = 0; i < userData.length;i++){
        if(userData[i].email == email || userData[i].password === password || userData[i].age === age || userData[i].code === code){
            alert("This user already exist")
            return false;
        }
        event.target.reset();
        event.preventDefault();
    }
    userData.push({
        'email':email,
        'password':password,
        'age':age,
        'code':code
    });
    localStorage.setItem("userDetails",JSON.stringify(userData));
    event.target.reset();
    window.location.reload();
  
});
function showData(){
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let tableBody = document.getElementById("recordBody");
    tableBody.innerHTML = '';
    let emailToMatch = prompt("Enter the email to match");
    if(!emailToMatch){
        alert("Email not provided. Please try again");
        return;
    };
    let matchUsers = userData.filter(user => user.email.toLowerCase() === emailToMatch.toLowerCase());
    if(matchUsers.length===0){
        alert("No User found with the provided email");
        return;
    };
    for(let i = 0;i <matchUsers.length;i++){
        let user = matchUsers[i];
        let newRow = document.createElement("tr");

        let emailCell = document.createElement("td");
        emailCell.innerHTML = user.email;

        let passwordCell = document.createElement("td");
        passwordCell.innerHTML = user.password;

        let ageCell = document.createElement("td");
        ageCell.innerHTML = user.age;

        let codeCell = document.createElement("td");
        codeCell.innerHTML = user.code;

        newRow.appendChild(emailCell);
        newRow.appendChild(passwordCell);
        newRow.appendChild(ageCell);
        newRow.appendChild(codeCell);

        tableBody.appendChild(newRow);
    }
    alert("Display successfully");
    // window.location.preventDefault();
    let counterDiv = document.getElementById("counter");
    counterDiv.textContent = "Total User: "+userData.length;
    return true;
};

//Delete user
function deleteUser(){
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let emailToDelete = prompt("Email that you want to delete");
    if(!emailToDelete){
        alert("Email not provided, Please try again");
        return;
    };
    let indexToDelete = userData.findIndex(user => user.email.toLowerCase()===emailToDelete.toLowerCase());
    if(indexToDelete===-1){
        alert("Email doesn't found. please try again");
        return;
    };
    userData.splice(indexToDelete,1)[0];
        localStorage.setItem("userDetails",JSON.stringify(userData));
        alert("Delete Successfully");
        window.location.reload();

}
function clearAll(){
    localStorage.clear("userDetails");
}



























const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
function toggle(){
    div1.classList.remove("awe");
   div2.classList.remove("hidden1");
};
// const toggle1 = document.getElementById("toggle1");
// let toggle2 = ()=>{
//     div1.classList.add("awe");
//    div2.classList.add("hidden1");
// };
// toggle1.addEventListener('click',toggle2);






















































// function togglecontent(){
//     var pagecontent = document.getElementById("content");
//     pagecontent.classList.toggle("hidden");
// };
// const form = document.querySelector("form");
// const main = document.querySelector(".main");
// form.addEventListener("submit",(event)=>{
//     let name = event.target.uname.value;
//     let email = event.target.email.value;
//     let password = event.target.password.value;
//     let code = event.target.code.value;
//     console.log(name,email,password,code);
//     let userData = JSON.parse(localStorage.getItem("userDetail")) ?? [];
//     userData.push({
//         "name":name,
//         'email':email,
//         'password':password,
//         'code':code
//     });
//     localStorage.setItem("userDetail",JSON.stringify(userData));
//     alert("Data Saved Successfully")
//     event.preventDefault();
// });
// let displayData = ()=>{
//     let userData = JSON.parse(localStorage.getItem("userDetail")) ?? [];
//     let finalData = '';
//     let objData = userData.forEach((element,i) => {
//         let element1 = [];
//         let email1 = prompt("Enter email")
//      for (const obj of objData) {
//         if(Object.values(obj).includes(email1)){
//             element1.push(obj);
//         }else{}
//      }
//         finalData +=` <div class="col">
//         <h5>Name</h5>
//         <div>${element1.name}</div>
//     </div>
//     <div class="col">
//         <h5>Email</h5>
//         <div>${element1.email}</div>
//     </div>
//      <div class="col">
//         <h5>password</h5>
//         <div>${element1.password}</div>
//      </div>
//   <div class="col">
//     <h5>Code</h5>
//     <div>${element1.code}</div>
//   </div>`
//    main.innerHTML = finalData;
//     });
// }
