let toDoList = [
  "acheter des légumes",
  "finir le dossier de stage",
  "faire les exos de javascript"
];

document.querySelector('.add-button').addEventListener('click', function() {
  document.querySelector('.liste1').innerHTML = "";
  toDoList.forEach(function(elementToDoList){
    document.querySelector('.liste1').innerHTML += `<li><input type="checkbox" class="checkbox"><label>${elementToDoList}</label></li>`;
 });
});

document.querySelector('.add-button').addEventListener('click', function(){
   toDoList.push(document.querySelector('.champ-list').value);
   document.querySelector('.champ-list').value = "";
});
