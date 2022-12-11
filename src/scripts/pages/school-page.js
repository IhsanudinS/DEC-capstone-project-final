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
                    <input type="text" placeholder="Cari Sekolah...." class="search-input" id="searchElement">
                    <button type="submit" class="search-button" id="searchButtonElement">Search</button>
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

