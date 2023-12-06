// console.log(`works`);

const submitBtn = document.querySelector(`.submit`);
const clearBtn = document.querySelector(`.clear`);
const showRecords = document.querySelector(`.showRecords`);

submitBtn.addEventListener(`click`, ()=>{

    // get the value from the input field
    const nameStore = document.querySelector(`#yourName`).value;
    const emailStore = document.querySelector(`#yourEmail`).value;

    // console.log(nameStore, emailStore);

     // setItem needs two parameter, a key and a value
    localStorage.setItem(nameStore, emailStore);

});

// Clear all record from local storage
clearBtn.addEventListener(`click`, ()=> localStorage.clear());

// Get records and display them 