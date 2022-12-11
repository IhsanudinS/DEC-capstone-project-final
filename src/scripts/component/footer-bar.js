class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="footer-content">
            <h3>Disability Education Care</h3>
            <p>Membantu para penyandang disabilitas dari segi pendidikan</p>
            <p>Contact:</p>
            <ul class="socials">
            <li><a href="https://www.linkedin.com/in/yazidaqsaraisnaldi/" target="_blank" rel="noreferrer noopener"><i class="fa fa-linkedin-square"></i>Yazid</a></li>
            <li><a href="https://www.linkedin.com/in/afdol-fahmul-rozi-siregar-3188a024a/" target="_blank" rel="noreferrer noopener"><i class="fa fa-linkedin-square"></i>Afdol</a></li>
            <li><a href="https://www.linkedin.com/in/muhammad-ihsanudin-syaifullah-1128331bb/" target="_blank" rel="noreferrer noopener"><i class="fa fa-linkedin-square"></i>Ihsan</a></li>
            <li><a href="https://www.linkedin.com/in/akmad-faiz-fildan-nugroho-460a05246/" target="_blank" rel="noreferrer noopener"><i class="fa fa-linkedin-square"></i>Faiz</a></li>
         </ul>
        </div>
        <div class="footer-bottom">
        <p>copyright &copy;2022 <a href="/">Capstone_C22-184</a>  </p>
        </div>
        `;
    }
}

customElements.define('footer-bar', footerBar);