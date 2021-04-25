const classesData = [
    {
        id: 1,
        dep: 'CSE',
        session: '2018-2019',
        semester: '1',
        course: 'CSE-121',
        date: '01-04-2021',
        isActive: true
    },
    {
        id: 2,
        dep: 'CSE',
        session: '2018-2019',
        semester: '3',
        course: 'CSE-333',
        date: '01-04-2021',
        isActive: true
    },
    {
        id: 3,
        dep: 'CSE',
        session: '2018-2019',
        semester: '3',
        course: 'CSE-333',
        date: '03-04-2021',
        isActive: true
    },
    {
        id: 4,
        dep: 'EEE',
        session: '2018-2019',
        semester: '3',
        course: 'EEE-353',
        date: '01-04-2021',
        isActive: true
    },
    {
        id: 5,
        dep: 'EEE',
        session: '2018-2019',
        semester: '3',
        course: 'EEE-333',
        date: '01-04-2021',
        isActive: false
    },
    {
        id: 6,
        dep: 'CSE',
        session: '2018-2019',
        semester: '5',
        course: 'CSE-353',
        date: '03-04-2021',
        isActive: false
    },
];

var searchField = document.getElementById('selectDep');
var boxesDiv = document.getElementById('boxes');

console.log(boxesDiv)

const displayClasses = (data) => {
    data.map(classData => {
        const {session, semester, course, isActive, id} = classData;
       
        let createDiv = document.createElement('div');
        createDiv.classList.add('box');
       
        createDiv.innerHTML = `
            <div class="${isActive ? 'class-active' : 'class-unactive'}"></div>
            <a data-page="student-details-page-2.html" class="myBtn${id}" onmouseenter="helper(${id})">
                <p>SESSION: ${session}</p>
                <p>SEMESTER: ${semester}</p>
                <p>COURSE: ${course}</p>
            </a>
        `
        boxesDiv.appendChild(createDiv); 
        console.log('i am being called');
    });
}; 

//load data
displayClasses(classesData);

const filterDataAndDisplay = (data, searchInput) => {
    const filteredData = data.filter(classData => 
      classData.dep.toLowerCase().includes(searchInput.toLowerCase()) 
    );
    boxesDiv.innerHTML= " ";//clearing previous state
    displayClasses(filteredData); 
}

//gets called everytime input changes
searchField.addEventListener('change', (event) => {
    filterDataAndDisplay(classesData ,event.target.value);
})

