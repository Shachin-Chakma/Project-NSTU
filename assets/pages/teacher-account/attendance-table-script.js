const submit_btn = document.getElementById('submit-attendance');
var attendance_table = document.getElementById('attendance-table-data');
var attendance = document.getElementById('attendance');

submit_btn.addEventListener('click', () => {
   var i = 0;
   let checkedItems =  document.querySelectorAll('input[type="checkbox"]:checked');
   console.log(checkedItems);
   if(checkedItems[0].id === 'example-select-all'){
    i = 1;
   }
   for(i;i<checkedItems.length;i++){
    let data = checkedItems[i].closest('tr').querySelectorAll('#attendance')
    if(data[0].innerText.toLowerCase() === 'absent') {
        data[0].innerText = 'PRESENT'
    }else {
        data[0].innerText = 'absent'
    }
   }
});


