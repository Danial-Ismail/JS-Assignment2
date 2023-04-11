///***Question 1 ***///

// function sumNumber(num){
//     return function(x){
//         return x+num;
//     }
// }
// const addFive=sumNumber(5);
// console.log(addFive(10));

//***Question 2 ****//

// function searchArray(array, value) {
//     if (array.length === 0) {
//       return false;
//     }
//     if (array[0] === value) {
//       return true;
//     }
//     return searchArray(array.slice(1), value);
//   }

//***Question 3 *///

// function addParagraph(text){
//     var newPara=document.createElement("p");
//     newPara.textContent=text;
//     var body=document.getElementsByTagName("body")[0];
//     body.appendChild(newPara);
// }
// addParagraph("This is a new paragraph");

//Question 4///

// function addListItem(listId, content) {
//     const list = document.getElementById(listId);
    
//     const listItem = document.createElement("li");
//     listItem.textContent = content;
    
//     list.appendChild(listItem);
//   }
//   addListItem("my-list","Chocolate");


//Question 5////

// function changeBackgroundColor(element,color){
//     element.style.backgroundcolor=color;
// }
// const myElement=document.getElementById("my-element");

// changeBackgroundColor(myElement,"red");



//Question 6///

// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }
//   const myObject = { foo: 'bar', baz: 42 };
//   saveObjectToLocalStorage('myKey', myObject);
    
//Question 7///

// function getFromLocalStorage(key) {
//     const value = localStorage.getItem(key);
//     if (value === null) {
//       return null;
//     }
//     try {
//       return JSON.parse(value);
//     } catch (error) {
//       console.error(`Error parsing stored value for key "${key}":`, error);
//       return null;
//     }
//   }
//   const myObject = getFromLocalStorage('myKey');
// console.log(myObject);


//Question 8///

// function saveObjectToLocalStorage(obj) {
//     for (const [key, value] of Object.entries(obj)) {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//     const newObj = {};
//     for (const key in localStorage) {
//       if (localStorage.hasOwnProperty(key)) {
//         newObj[key] = JSON.parse(localStorage.getItem(key));
//       }
//     }
//     return newObj;
//   }
  
  
