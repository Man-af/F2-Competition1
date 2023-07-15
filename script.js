/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr
    .filter(value => value.profession === 'developer')
    .map(developer => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(value => {
        if (value.profession === 'developer') {
          console.log(value);
        }
      });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee = { id: 4, name: "adwi", age: "21", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let filteredArr = arr.filter(value => value.profession !== 'admin');
    console.log(filteredArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 5, name: "manaf", age: "24", profession: "SDE1" },
        { id: 6, name: "abhishek", age: "23", profession: "intern" },
        { id: 7, name: "aravind", age: "28", profession: "SDE2" }
      ];
    
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }