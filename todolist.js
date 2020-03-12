toDoList = [
  "acheter des légumes",
  "finir le dossier de stage",
  "faire les exos de javascript"
];

//comment empêcher que la liste se réécrive à chaque clic sur le bouton 'afficher la liste' ?   document.querySelector('.liste1').innerHTML = '';



document.querySelector('.display-button').addEventListener('click', function() {
  document.querySelector('.liste1').innerHTML = '';
  toDoList.forEach(function(theList) {
    document.querySelector('.liste1').innerHTML += `<li><input type="checkbox" class="checkbox"><label id="list">${theList}</label></li>`;
  });
});

document.querySelector('.add-button').addEventListener('click', function() {
  let newTask = document.querySelector('.champ-list').value;
  toDoList.push(newTask);
    document.querySelector('.liste1').innerHTML += `<li><input type="checkbox" class="checkbox"><label id="task">${newTask}</label></li>`;
    document.querySelector('.champ-list').value = '';
  });
