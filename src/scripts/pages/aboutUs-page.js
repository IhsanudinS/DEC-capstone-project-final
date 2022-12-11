const aboutUs = {
    async render() {
        return `
        <div class="pages">
            <div class="main-info">
                <h1 style="text-align: center">Tentang DEC</h1>
                <article id="item"></article>
            </div>
        </div>
        `;
    },

    async afterRender() {
        const detailContainer = document.querySelector('#item');

        detailContainer.innerHTML = `
        <div class="about-us">
            <p> 
            DEC (Disability Education Care) adalah sebuah website yang dibuat dengan tujuan untuk membantu para anak disabilitas untuk mencari sekolah atau tempat belajar. Website ini juga memberikan wadah bagi para volunteer yang ingin mengabdikan dirinya untuk membantu menjadi guru pembimbing khusus bagi para penyandang disabilitas. Selain itu, website ini juga bisa menjadi jembatan bagi orang-orang yang ingin mendonasikan hartanya untuk membantu para penyandang disabilitas.
            </p>
        </div>
        <div class="line"></div>
            <profile-bar></profile-bar>
        
        `;
    }


}

export default aboutUs;