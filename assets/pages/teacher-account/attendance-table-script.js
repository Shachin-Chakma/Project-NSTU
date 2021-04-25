const attendance_date = document.getElementById('attendance-date');
const submit_btn = document.getElementById('submit-attendance');
const edit_btn = document.getElementById('edit-attendance');
var attendance_table = document.getElementById('attendance-table-data');
const attendance = document.getElementById('attendance');

submit_btn.addEventListener('click', () => {
  
    console.log(edit_btn.style.display)
    let i = 0;
    let checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    //console.log(checkedItems);

    if (checkedItems.length === 0) {
        alert('Please select any student to submit!');
        return
    }

    if (checkedItems[0].id === 'example-select-all') {
        i = 1;
    }

    for (i; i < checkedItems.length; i++) {
        let data = checkedItems[i].closest('tr').querySelectorAll('#attendance')
        if (data[0].innerText.toLowerCase() === 'absent') {
            data[0].innerText = 'PRESENT'
        } else {
            data[0].innerText = 'absent'
        }
    }

    setTimeout(() => {
        alert('Attendance was saved');
        const today = new Date();
        attendance_date.innerText=`Attendance was taken for ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
        attendance_date.style.fontSize='small';
        attendance_date.style.display='';
        edit_btn.style.display='block';
        submit_btn.style.display='none';
    }, 1500);

    return;
});

edit_btn.addEventListener('click', () => {
    submit_btn.innerText='Update Attendance'
    submit_btn.style.display='block';
    edit_btn.style.display='none';
})