const user = [];

let userId = 0;

function addUser(){
   let name =  document.getElementById('name').value;
   let age =  document.getElementById('age').value;
   let gender =  document.querySelector('input[name="gender"]:checked').value;
   let hobbiesList = document.querySelectorAll('input[name="hobbies"]');
    let hobbies = '';
    for(let i=0;i<hobbiesList.length;i++)
    {
        hobbies += hobbiesList[i].value + ',';
    }

   console.log(name,age,gender, hobbies);
    user.push({name: name,age: age,gender : gender});
    console.log(user);

    addUserDataToTable(name,age,gender, hobbies);

}

function addHobbyTextBox(){
    let hobbiesGrid = document.getElementById('hobbies-grid');

    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('id', 'hobbies');
    newInput.setAttribute('name', 'hobbies');
    hobbiesGrid.append(newInput);
}

function removeHobbyTextBox(){
    let hobbiesGrid = document.getElementById('hobbies-grid');
    let hobbiesList = hobbiesGrid.querySelectorAll('input[name="hobbies"]');
    let hobby = hobbiesList[hobbiesList.length-1];
    hobbiesGrid.removeChild(hobby);
}

function addUserDataToTable(name, age, gender, hobbies)
{
    let table = document.getElementById('user-table');
    if (table!=null)
    {
        userId ++;
        let row = document.createElement('tr');
        row.setAttribute('id', userId);
        let userName = document.createElement('td');
        userName.textContent = name;
        let userAge = document.createElement('td');
        userAge.textContent = age;
        let userGender = document.createElement('td');
        userGender.textContent = gender;
        let userHobbies = document.createElement('td');
        userHobbies.textContent = hobbies;
        let userAction = document.createElement('td');
        userAction.innerHTML = `<a href = "#" onclick = deleteUser(${userId})>Delete </a>`;

        row.appendChild(userName);
        row.appendChild(userAge);
        row.appendChild(userGender);
        row.appendChild(userHobbies);
        row.appendChild(userAction);
        table.querySelector('tbody').appendChild(row);

    }
}

function deleteUser(id){
    let table = document.getElementById('user-table');
    let rowToDelete = document.getElementById(''+id);
    table.querySelector('tbody').removeChild(rowToDelete);
}