/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here

    let developers = arr.map((data)=> {
      if (data.profession === "developer") {
        return data;
        }
    });
    console.log(developers);
    
  }
  


function PrintDeveloperbyForEach() {
  //Write your code here
    arr.forEach((data)=>{
      if (data.profession == "developer") {
        console.log(data.name);
      }
    });
  
  
}


  function addData(name, age, profession) {
    //Write your code here
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
  
  
}

function removeAdmin() {
//   //Write your code here

    arr = arr.filter(data => data.profession !== "admin");
    console.log(arr);
  
}

function concatenateArray() {
//   //Write your code here
let  concatArr= [{ id: 5, name: "Sonam", age: "26", profession: "coder" },{ id: 6, name: "Priyanka", age: "28", profession: "coder" },{ id: 7, name: "Vjeet", age: "27", profession: "coder" }
];
  arr = arr.concat(concatArr);
  console.log(arr);
}
