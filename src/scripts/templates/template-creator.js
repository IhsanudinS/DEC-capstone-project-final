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

export { createSchoolDetailTemplate };