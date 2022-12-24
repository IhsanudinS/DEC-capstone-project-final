import { createFormVolunteer } from "../templates/template-creator";

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

        detailContainer.innerHTML = createFormVolunteer;

        function printerrtext(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }

        function inputValidation(){
            const name = document.inputForm.name.value;
            const email = document.inputForm.email.value;
            const mobile = document.inputForm.mobile.value;
            const city = document.inputForm.city.value;
            const job = document.inputForm.job.value;
            const education = document.inputForm.education.value;
            let [nameErr,emailErr,mobileErr,cityErr,jobErr,educationErr] = [true,true,true,true,true,true];

            if(name == "") {
                printerrtext("nameErr", "Please enter your name");
                } else {
                const regex = /^[a-zA-Z\s]+$/;
                if(regex.test(name) === false) {
                printerrtext("nameErr", "Please enter a valid name");
                } else {
                printerrtext("nameErr", "");
                nameErr = false;
                }
            }

            if(email == "") {
                printerrtext("emailErr", "Please enter your email address");
                } else {
                // Regular expression for basic email validation
                const regex = /^\S+@\S+\.\S+$/;
                if(regex.test(email) === false) {
                printerrtext("emailErr", "Please enter a valid email address");
                } else{
                printerrtext("emailErr", "");
                emailErr = false;
                }
            }

            if(mobile == "") {
                printerrtext("mobileErr", "Please enter your mobile number");
                } else {
                const regex = /^[1-11]\d{11}$/;
                if(regex.test(mobile) === false) {
                printerrtext("mobileErr", "Please enter a valid 10 digit mobile number");
                } else{
                printerrtext("mobileErr", "");
                mobileErr = false;
                }
            }

            if(city == "Select") {
                printerrtext("cityErr", "Please select your city");
                } else {
                printerrtext("cityErr", "");
                cityErr = false;
            }

            if(job == "") {
                printerrtext("jobErr", "Please enter your job");
                } else {
                printerrtext("jobErr", "");
                jobErr = false;
            }

            if(education == "") {
                printerrtext("educationErr", "Please enter your education");
                } else {
                printerrtext("educationErr", "");
                educationErr = false;
            }

        }

        form.addEventListener('submit',function(e) {
            e.preventDefault();
            inputValidation();
        }); 
    }


}

export default joinForm;