const navigation = document.querySelector('#navigation')
const gernes = document.querySelector('.gernes')

let buildNavHtml = "<ul>"

for (let i = 0; i < topNavigation.length; i++) {
    buildNavHtml += `  <li><a href="#">${topNavigation[i]}</a></li>`;
}
buildNavHtml = "</ul>"
navigation.innerHTML = buildNavHtml;

let buildGernes = "";
for (let i = 0; i < topNavigation.length; i++) {
    buildGernes += `<li><a href="#">${allMovies[i].gendre}</a></li>`
}

allgernes.innerHTML = buildGernes
    ;