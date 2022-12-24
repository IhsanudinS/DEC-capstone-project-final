const createSchoolDetailTemplate = (schools) => `
<div class="info-container" style="background-image: 
linear-gradient(90deg, rgba(255,255,255,0.8580474426098564) 40%, rgba(238,238,238,0.7730800938539478) 71%, rgba(255,255,255,0.44815012186515235) 100%),url('${schools.image}');>
<div class="school__info">
    <h2 class="school__title" tabindex="0">${schools.name}</h2>
    <br>
    <h4 tabindex="0">Alamat</h4>
    <p tabindex="0">${schools.alamat}</p>
    <h4 tabindex="0">Nomer telepon :</h4>
    <p tabindex="0">${schools.no_tlp}</p>
    <h4 tabindex="0">NPSN</h4>
    <p tabindex="0">${schools.NPSN}</p>
    <br>
    <a href="${schools.website}" class="btn-act" target="_blank" rel="noreferrer noopener">Lihat</a>
</div>
</div>
`;

const createFormVolunteer = `
    <div class="vol-form">
        <form name="inputForm" id="form">
            <label for="fname">Nama</label>
            <input type="text" id="name" name="name" placeholder="Your name..">
            <div class="errtext" id="nameErr"></div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email..">
            <div class="errtext" id="emailErr"></div>
            <label for="email">No Telepon</label>
            <input type="text" id="mobile" name="mobile" placeholder="Your number..">
            <div class="errtext" id="mobileErr"></div>
            <label for="pendidikan">Pendidikan Terakhir</label>
            <input type="text" id="education" name="education" placeholder="......">
            <div class="errtext" id="educationErr"></div>
            <label for="pendidikan">Pekerjaan</label>
            <input type="text" id="job" name="job" placeholder="......">
            <div class="errtext" id="jobErr"></div>
            <label for="city">Domisili</label>
            <select id="city" name="city">
            <option value="Select">.....</option>
            <option value="jakarta">Jakarta</option>
            <option value="surabaya">Surabaya</option>
            <option value="semarang">Semarang</option>
            <option value="bandung">Bandung</option>
            <option value="madiun">Madiun</option>
            <option value="jogja">Jogja</option>
            </select>
            <div class="errtext" id="cityErr"></div>
        
            <input type="submit" value="Submit">
        </form>
        </div>
    `;

export { createSchoolDetailTemplate, createFormVolunteer };