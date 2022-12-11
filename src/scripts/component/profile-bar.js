class profileBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="profile">
        <h2>Our Team</h2>
        <p>Tim kami terdiri dari empat orang peserta SIB Dicoding Batch 3 pada learning Path Pengembang Front-End Web dan Back-End<br>
            dalam pengerjaan website DEC ini kami membagi role menjadi dua yaitu Front End dan Back End
        </p>
        <header class="foto">
                <div class="description">
                    <img src="images/photo/yazid.jpg" alt="Yazid">
                    <h3>Yazid Aqsa Raisnaldi</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                       Role : Front-End Developer
                    </p>
                </div>
                <div class="description">
                    <img src="images/photo/afdol.jpg" alt="Afdol">
                    <h3>Afdol Fahmul Rozi Siregar</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                        Role : Front-End Developer
                    </p>
                </div>
                <div class="description">
                    <img src="images/photo/ihsan.jpg" alt="ihsanudin">
                    <h3>Muhammad Ihsanudin Syaifullah</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                        Role : Back-End Developer
                    </p>
                </div>
                <div class="description">
                    <img src="images/photo/faiz.jpg" alt="Faiz">
                    <h3>Akmad Faiz Fildan Nugroho</h3>
                    <p>peserta SIB Dicoding Batch 3 <br>
                        Role : Back-End Developer
                    </p>
                </div>        
        </header>
        </div>
        `;
    }
}

customElements.define('profile-bar', profileBar);