class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header class="header-area">
            <a href="/"><img src="images/logo.png" class="logo"></a>
            <input type="checkbox" id="toggler">
            <label for="toggler">☰</label>
            <nav class="menu" id="drawer">
                <ul class="links">
                    <li><a href="/">Home</a></li>
                    <li class="dropdown">
                        Services ⏷
                        <div class="dropdown-content">
                            <a href="#/school">Info Sekolah</a>
                            <a href="#/info-donasi">Info Donasi</a>
                            <a href="#/volunteer">volunteer</a>
                        </div>
                    </li>
                    <li><a href="#/about">About Us</a></li>
                    <li><a href="#/about">Information</a></li>
                    <a href="#/join-form" class="button">Join Us</a>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('nav-bar', NavBar);