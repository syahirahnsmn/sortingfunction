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

        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.id;

        item_element.appendChild(title);

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
function myFunction() {
    document.getElementById("dropdownmenu").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
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

        var jsonString = localStorage.getItem("list_items");

        var retrievedItem = JSON.parse(jsonString);
        console.log(retrievedItem);
};

/* Assign new input item to local storage */
    //define username, occupation, and add button
var userName = document.getElementById("username");
var userOccup = document.getElementById("occupation");
const btn = document.getElementById("btn");

    //listener to get user input
btn.onclick = function(){
    
    var inputName = userName.value;
    var inputOccup = userOccup.value;

    if(name && occupation){
        localStorage.setItem(inputName, inputOccup);
        location.reload();
    }

        var newList = list_items.push(inputName + inputOccup);
        inputName.value = "";
        inputOccup.value = "";

        console.log(list_items);

        //getting the inpur from user and print on local storage
for (let i = 0; i< localStorage.length; i++){
    const inputName = localStorage.key(i);
    const inputOccup = localStorage.getItem(name);
    document.getElementsByClassName("list-item").innerHTML += `${inputName}: ${inputOccup}<br />`;
}

};

