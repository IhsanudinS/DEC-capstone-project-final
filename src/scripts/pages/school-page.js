import DataSource from "../data/data-source";
import schools from "../data/school-data";
import { createSchoolDetailTemplate } from "../templates/template-creator";
const school = {
    async render() {
        return `
        <div class="pages">
            <div class="main-info">
                <h1>Sekolah</h1>
                <div class="search">
                    <input type="text" placeholder="Cari Sekolah...." class="search-input" id="searchElement" style="border: none; outline: none;">
                    <button type="submit" class="search-button" id="searchButtonElement"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg></button>
                </div>
                <article id="list-item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const buttonSearchElement = document.querySelector('#searchButtonElement');
        const searchElement = document.querySelector('#searchElement');
        const detailContainer = document.querySelector('#list-item');

        const onButtonSearchClicked = function () {
            const dataSource = new DataSource(renderResult, fallbackResult);
            dataSource.searchSchool(searchElement.value);
        };
        
        const renderResult = function (results) {
            detailContainer.innerHTML = '';
            results.forEach((school) => {
                detailContainer.innerHTML += createSchoolDetailTemplate(school);
            });
        };

        const fallbackResult = function () {
            detailContainer.innerHTML = '';
          };
       
        buttonSearchElement.addEventListener('click', onButtonSearchClicked);

    },
}

export default school;

