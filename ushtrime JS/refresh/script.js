const userMgnBTN = document.querySelector('#userMgnBTN');
const learningPlanBTN = document.querySelector('#learningPlanBTN');
const reportsBTN = document.querySelector('#reportsBTN');
const settingsBTN = document.querySelector('#settingsBTN');

const pageFeed = document.querySelector('#page-feed');

userMgnBTN.addEventListener('click', function () {
    pageFeed.innerHTML += `
         <h2>${0}</h2>
        <p> ${1}</p>         
        `;
});

learningPlanBTN.addEventListener('click', function () {
});

reportsBTN.addEventListener('click', function () {
});

settingsBTN.addEventListener('click', function () {
});