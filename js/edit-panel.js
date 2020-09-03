const form = document.querySelector('.form-principal');
const inputColumns = document.getElementById('input-columns');
const inputRows = document.getElementById('input-lines');

let columns = 0;
let rows = 0

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  columns = inputColumns.value;
  rows = inputRows.value;
  
  formValidation(columns, rows);
  newColumn(columns);
  newRow(rows);
  clearInput();
});

function newColumn(columns){
  document.getElementById("columns").innerHTML="";

  for (let i = 0; i < columns; i++) {
    
    var column = "<div class='column'></div>";

    document.getElementById("columns").innerHTML += column;
  }
}

function newRow(rows){
  document.getElementById("rows").innerHTML="";

  for (let i = 0; i < rows; i++) {
    
    var row = "<div class='row'></div>";

    document.getElementById("rows").innerHTML += row
  }
}

function clearInput() {
  inputColumns.value = '';
  inputRows.value = '';
}

function formValidation(columns, rows) {
  let errorHTML = document.querySelector('.danger');

  let er = /[^0-9]/;
  er.lastIndex = 0;

  if (
      columns == '' || columns < 0 ||
      rows == '' || rows < 0 ||
      er.test(columns) || er.test(rows)
    ) {
    inputColumns.classList.add('error');
    inputRows.classList.add('error');
    errorHTML.classList.remove('invisible');
  } else {
    errorHTML.classList.add('invisible');
    inputColumns.classList.remove('error');
    inputRows.classList.remove('error');
  }
};