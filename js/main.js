const positions = ['investor', 'manager', 'assistant', 'worker'];



//Перший варіант

positions.forEach(position => {
const getFile = (file) => {
const xhr = new XMLHttpRequest();
  xhr.open('GET', file, false);
  xhr.send()

  const isStatus = xhr.status >= 200 && xhr.status < 400;
  const response = isStatus ? JSON.parse(xhr.response) : [];
  
  return response;

}

const positionsAll = getFile(`files/${position}.json`)

console.log(positionsAll)
})

//Другий варіант вивід в масив
const results = [];

positions.forEach(position => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `files/${position}.json`, false);
    xhr.send();
    
    if (xhr.status === 200 && xhr.status < 400) {
      results[position] = JSON.parse(xhr.responseText);
    };
    
   });
  
  console.log(results);

const postArr = [{investor: {name: 'Dan', age: 50}}, {manager: {name: 'David', age: 30}}, {assistant: {name: 'Julia', age: 32}}, {worker: {name: 'Nikita', age: 28}}];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

for (const obj of postArr) {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const age = document.createElement('td');
    name.appendChild(document.createTextNode(Object.keys(obj)[0]));
    age.appendChild(document.createTextNode(Object.values(obj)[0].name + ', ' + Object.values(obj)[0].age));
    row.appendChild(name);
    row.appendChild(age);
    tableBody.appendChild(row);
}

table.appendChild(tableBody);
document.body.appendChild(table);

