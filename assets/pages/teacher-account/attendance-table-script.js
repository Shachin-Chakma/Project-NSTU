const attendance_date = document.getElementById('attendance-date');
const submit_btn = document.getElementById('submit-attendance');
const edit_btn = document.getElementById('edit-attendance');
var attendance_table = document.getElementById('attendance-table-data');
const attendance = document.getElementById('attendance');

submit_btn.addEventListener('click', () => {
    let checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkedItems);

    if (checkedItems.length === 0) {
        alert('Please select any student to submit!');
        return
    }

    for (let i = 0; i < checkedItems.length; i++) {
        if (checkedItems[i].id !== 'example-select-all') {
            let data = checkedItems[i].closest('tr').querySelectorAll('#attendance')
            if (data[0].innerText.toLowerCase() === 'absent') {
                data[0].innerText = 'PRESENT'
            } else {
                data[0].innerText = 'absent'
            }
        }
        checkedItems[i].checked = false;
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