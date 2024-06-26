let targets = document.querySelectorAll('.addnew');
let availTables  = document.querySelectorAll('table tbody');
let newItems  = document.querySelectorAll('.new-items');
let selectType  = document.querySelectorAll('.type');
let quantity =  document.querySelectorAll('.new-items_input');
let addNew =  document.querySelectorAll('.addMain');



/* open tab */
function openTab(evt, cityName) {
  let i, tabcontent, tablinks,firstTab;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

addNew.forEach((val)=>{
  val.addEventListener("click",()=>{
   newItems.forEach((newItem)=>{
    newItem.classList.toggle("show");
   })
   });
      
});

targets.forEach((target)=>{
  target.addEventListener("click",()=>{
   newItems.forEach((newItem)=>{
    newItem.classList.toggle("show");
   })
   let vals = [selectType.value,quantity.value];
   let tr =  document.createElement("tr");
   let iconsTd = `
      <td data-label="edit">
         <span><a><i class="fas fa-edit"></i></a></span>
         <span><a><i class="fas fa-trash-alt"></i></a></span>
       </td>
   `;
   vals.forEach((val)=>{
     let td = document.createElement("td");
     td.setAttribute("data-label","quantity");
     td.innerHTML = val; 
     tr.appendChild(td);   
   });
    

   tr.insertAdjacentHTML('beforeend',iconsTd);
   availTables.forEach((availTable)=>{
   availTable.appendChild(tr);
   });
   addTrash();
});
});
//add event remove to all trash icons
function addTrash(){
document.querySelectorAll('.fa-trash-alt').forEach(item => {
  item.addEventListener('click', event => {
  item.offsetParent.parentNode.remove();
  })
});
}
addTrash();
/*let targets = document.querySelectorAll('.addnew');
let availTables = document.querySelectorAll('table tbody');
let newItems = document.querySelectorAll('.new-items');
let selectType = document.querySelectorAll('.type');
let quantity = document.querySelectorAll('.new-items_input');
let addNew = document.querySelectorAll('.addMain');

// Function to open tab
function openTab(evt, cityName) {
  let i, tabcontent, tablinks, firstTab;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Function to toggle show/hide for new items
addNew.forEach((val) => {
  val.addEventListener("click", () => {
    newItems.forEach((newItem) => {
      newItem.classList.toggle("show");
    })
  });
});

// Function to handle adding new items and storing them in local storage
targets.forEach((target) => {
  target.addEventListener("click", () => {
    newItems.forEach((newItem) => {
      newItem.classList.toggle("show");
    })

    let vals = [selectType.value, quantity.value];
    let tr = document.createElement("tr");
    let iconsTd = `
      <td data-label="edit">
         <span><a><i class="fas fa-edit"></i></a></span>
         <span><a><i class="fas fa-trash-alt"></i></a></span>
       </td>
   `;

    vals.forEach((val) => {
      let td = document.createElement("td");
      td.setAttribute("data-label", "quantity");
      td.innerHTML = val;
      tr.appendChild(td);
    });

    tr.insertAdjacentHTML('beforeend', iconsTd);
    availTables.forEach((availTable) => {
      availTable.appendChild(tr);
    });

    // Store the values in local storage
    localStorage.setItem('selectedType', selectType.value);
    localStorage.setItem('enteredQuantity', quantity.value);

    // Retrieve values from local storage and display them
    let storedType = localStorage.getItem('selectedType');
    let storedQuantity = localStorage.getItem('enteredQuantity');
    selectType.value = storedType;
    quantity.value = storedQuantity;

    addTrash();
  });
});

// Function to add event listener to all trash icons for removal
function addTrash() {
  document.querySelectorAll('.fa-trash-alt').forEach(item => {
    item.addEventListener('click', event => {
      item.offsetParent.parentNode.remove();
    })
  });
}

addTrash();*/
