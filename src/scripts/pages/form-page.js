const joinForm = {
    async render() {
        return `
        <div class="pages">
            <div class="main-info">
                <h1 style="text-align: center">Form Pedaftaran Volunteer</h1>
                <article id="item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const detailContainer = document.querySelector('#item');

        detailContainer.innerHTML = `
        <div class="vol-form">
        <form>
            <label for="fname">Nama</label>
            <input type="text" id="name" name="name" placeholder="Your name..">

            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email..">

            <label for="email">No Telepon</label>
            <input type="text" id="notlp" name="notlp" placeholder="Your number..">

            <label for="pendidikan">Pendidikan Terakhir</label>
            <input type="text" id="pendidikan" name="pendidikan" placeholder="......">

            <label for="pendidikan">Pekerjaan</label>
            <input type="text" id="pekerjaan" name="pekerjaan" placeholder="......">

            <label for="city">Domisili</label>
            <select id="city" name="city">
            <option value="">.....</option>
            <option value="jakarta">Jakarta</option>
            <option value="surabaya">Surabaya</option>
            <option value="semarang">Semarang</option>
            <option value="bandung">Bandung</option>
            <option value="madiun">Madiun</option>
            <option value="jogja">Jogja</option>
            </select>
        
            <input type="submit" value="Submit">
        </form>
        </div>
        `;
    }


}

export default joinForm;