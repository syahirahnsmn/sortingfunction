/* Sorting */
const list = document.querySelector('.list');

const sort_id_btn = document.querySelector('.sort-options .sort-id');
const sort_name_btn = document.querySelector('.sort-options .sort-name');
const sort_occup_btn = document.querySelector('.sort-options .sort-occup');
/*List of items in array */
let list_items = [
    {
        id: '1',
        name: 'Sofiah',
        occup: 'Manager'
    },
    {
        id: '2',
        name: 'Puteri',
        occup: 'Human Resource Team'
    },

    {
        id: '3',
        name: 'Ali',
        occup: 'Human Resource Team'
    },

    {
        id: '4',
        name: 'Chuah Yun Huang',
        occup: 'Software Engineer'
    },
];

/*Sorting functions*/
let desc = false;
sort_id_btn.addEventListener('click', ()=>{
    let array = sort_array_by(list_items, 'id', desc);
    displayList(array);

    desc = !desc;
});

sort_name_btn.addEventListener('click', ()=>{
    let array = sort_array_by(list_items, 'name', desc);
    displayList(array);

    desc = !desc;
});

sort_occup_btn.addEventListener('click', ()=>{
    let array = sort_array_by(list_items, 'occup', desc);
    displayList(array);

    desc = !desc;
});

function sort_array_by(array, sort, desc){
    array.sort(function (a, b){
        if(a[sort] < b[sort]) return -1;
        if(a[sort] > b[sort]) return 1;
        return 0;
    });

    if(desc) array.reverse();

    return array;
}

/* List of items being displayed*/
function displayList (array = []){
    list.innerHTML = "";

    for(let i=0; i<array.length; i++){
        let item = array[i];

        let item_element = document.createElement('div');
        item_element.classList.add('list-item');

        let id = document.createElement('div');
        id.classList.add('item-id');
        id.innerText = item.id;

        item_element.appendChild(id);

        let name = document.createElement('div');
        name.classList.add('item-name');
        name.innerText = item.name;

        item_element.appendChild(name);

        let occup = document.createElement('div');
        occup.classList.add('item-occup');
        occup.innerText = item.occup;

        item_element.appendChild(occup);

        list.appendChild(item_element);
    }
}

displayList(list_items);

/* Dropdown menu */
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("dropdownmenu").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

/* Local Storage */
/* Assign existing array list to local storage */
function addList(){
        localStorage.setItem("list_items", JSON.stringify(list_items));

        let jsonString = localStorage.getItem("list_items");

        let retrievedItem = JSON.parse(jsonString);
        console.log(retrievedItem);
};

/* Assign new input item to local storage */
    //define username, occupation, and add button
let userName = document.getElementById("username");
let userOccup = document.getElementById("occupation");

    //listener to get user input
function addData(){

    let inputName = userName.value;
    let inputOccup = userOccup.value;

    if(name && occupation){
        localStorage.setItem(inputName, inputOccup);
        location.reload();
    }

    /* Add new input to existing array */
    list_items.push({
        id: list_items.length + 1,
        name: inputName,
        occup: inputOccup
    });
    inputName.value = "";
    inputOccup.value = "";

    /* Update new user input to localStorage */
    localStorage.setItem("list_items", JSON.stringify(list_items));

    let jsonString = localStorage.getItem("list_items");

    /* Display new input */
    displayList(list_items);

};


