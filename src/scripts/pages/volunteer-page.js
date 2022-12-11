const volunteer = {
    async render() {
        return `
        <div class="pages">
            <div class="main-info">
                <article id="item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const volContainer = document.querySelector('#item');

        volContainer.innerHTML = `
        <div class="vol-container">
          <img src="https://i.ibb.co/6sPFbBd/development.png" alt="development" border="0">
        <h3>Mohon Maaf<br>Fitur ini masih dalam tahap pengembangan</h3>
        </div>
        `;
    }


}

export default volunteer;