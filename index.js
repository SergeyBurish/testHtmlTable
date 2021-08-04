$(document).ready(function(){
  $("#rowsCounter").on('input',function(e){
    let count = e.target.value;
    if (count < 1) {
      count = 1;
      $("#rowsCounter").val(1);
    }

    const table = $("#testTable")
    table.empty();
    table.append('<thead><tr><th>Ind</th><th>Name</th><th>Image</th></tr></thead>');

    for (let i = 0; i < count; i++){
      table.append(`<tr><td>${i}</td><td>Name ${i}</td><td>Img</td></tr>`);
    }    
  });
});