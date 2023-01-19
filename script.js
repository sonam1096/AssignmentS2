/** @format */

let employee=document.getElementById("employee")

let arr = [
  { Id: 1, Name: "John", Age: "18", Profession: "Developer" },
  { Id: 2, Name: "Jack", Age: "20", Profession: "Developer" },
  { Id: 3, Name: "Karen", Age: "19", Profession: "Admin" },
];

 
 
 
function PrintDeveloperswithMap() {
  //Write your code here
  employee.innerHTML=""
   let output=""
      arr.map((data)=> {
      if (data.Profession === "Developer") {
        output +=`<tr>
        <td>${data.Id}</td>
        <td>${data.Name}</td>
        <td>${data.Age}</td>
        <td>${data.Profession}</td>
        </tr>`
        
        }
    });
    // console.log(developers);
    employee.innerHTML=`<table border="2" cellspacing="0" cellpadding="7">
    <thead>
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Age</td>
        <td>Profession</td>
        </tr>
        </thead>
    <tbody>
    ${output}
    </tbody>
    </table>`

    // output.appendChild("output")
    
  }
  


function PrintDeveloperbyForEach() {
  //Write your code here
  employee.innerHTML="";
  let output=""
    arr.forEach((data)=>{

        if (data.Profession === "Developer") {
          output +=`<tr>
          <td>${data.Id}</td>
           <td>${data.Name}</td>
          </tr>`
          
          }
      });
      // console.log(developers);
      employee.innerHTML=`<table border="2" cellspacing="0" cellpadding="7">
      <thead>
      <td>Id</td>
      <td>Name</td>
      </thead>
      <tbody>
      ${output}
      </tbody>
      </table>`
  
      // output.appendChild("output")
      
    }
  function addData( ) {
    //Write your code here
    employee.innerHTML="";
    let output="";
    let arr1=({Id:4,Name:"Susan",Age:"20",Profession:"Intern"});
    arr.push(arr1);
  // console.log(arr);
  arr.map(data=> {
     
      output +=`<tr>
      <td>${data.Id}</td>
      <td>${data.Name}</td>
      <td>${data.Age}</td>
      <td>${data.Profession}</td>
      </tr>`
      
      
  });
  // console.log(developers);
  employee.innerHTML=`<table border="2" cellspacing="0" cellpadding="7">
  <thead>
  <tr>
      <td>I</td>
      <td>Name</td>
      <td>Age</td>
      <td>Profession</td>
      </tr>
      </thead>
  <tbody>
  ${output}
  </tbody>
  </table>`

  // output.appendChild("output")
  
}
  
  


function removeAdmin() {
//   //Write your code here
employee.innerHTML="";
let output=""
   arr.map((data,index) => {
      if(data.Profession === "Admin"){
        arr.splice(index,1)
      }
    });
    // console.log(arr);
     arr.map(data=> {
       
        output +=`<tr>
        <td>${data.Id}</td>
        <td>${data.Name}</td>
        <td>${data.Age}</td>
        <td>${data.Profession}</td>
        </tr>`
        
        
    });
    // console.log(developers);
    employee.innerHTML=`<table border="2" cellspacing="0" cellpadding="7">
    <thead>
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Age</td>
        <td>Profession</td>
        </tr>
        </thead>
    <tbody>
    ${output}
    </tbody>
    </table>`

    // output.appendChild("output")
    
  }
  


function concatenateArray() {
//   //Write your code here
employee.innerHTML="";

let  concatArr= [{ Id: 5, Name: "Sonam", Age: "26", Profession: "Coder" },{ Id: 6, Name: "Priyanka", Age: "28", Profession: "Coder" },{ Id: 7, Name: "Vjeet", Age: "27", Profession: "Coder" }
];
 let  arr2 = arr.concat(concatArr);
  // console.log(arr);
  let output="";
  arr2.map((data)=> {
   
      output +=`<tr>
      <td>${data.Id}</td>
      <td>${data.Name}</td>
      <td>${data.Age}</td>
      <td>${data.Profession}</td>
      </tr>`
      
    
  });
  // console.log(developers);
  employee.innerHTML=`<table border="2" cellspacing="0" cellpadding="7">
  <thead>
  <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Age</td>
      <td>Profession</td>
      </tr>
      </thead>
  <tbody>
  ${output}
  </tbody>
  </table>`

  
  
}



