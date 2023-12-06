// console.log(`works`);

const submitBtn = document.querySelector(`.submit`);
const clearAllBtn = document.querySelector(`.clear`);
const showRecords = document.querySelector(`.showRecords`);
const clearEntry = document.querySelector(`.clearEntry`);


submitBtn.addEventListener(`click`, ()=>{

    // get the value from the input field
    const nameStore = document.querySelector(`#yourName`).value;
    const emailStore = document.querySelector(`#yourEmail`).value;

    // console.log(nameStore, emailStore);

     // setItem needs two parameter, a key and a value
    localStorage.setItem(nameStore, emailStore);
}); // END submitBtn


// Clear all record from local storage
clearAllBtn.addEventListener(`click`, ()=> localStorage.clear());


// Get the record and display them
showRecords.addEventListener(`click`, () => {
    // console.log(`Show Record test`);
   
    // Create an fill-in element  
    let showResult = ``;

        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            // console.log(key, value);
            showResult += `<li>Name : <strong>${key}</strong><br>Email Address : <strong>${value}</strong><hr>`;
        }

        document.querySelector(`.addRecords`).innerHTML = showResult;

}); // End showRecords


// Clear Entry button
clearEntry.addEventListener(`click`, () => {
    const clearName = document.querySelector(`#entry-to-clear`).value;
    localStorage.removeItem(clearName);
});