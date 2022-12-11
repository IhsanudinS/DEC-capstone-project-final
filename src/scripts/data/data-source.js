import schools from "./school-data";

class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    static async getAllSchool() {
        await fetch('https://datasekolahapi.herokuapp.com/api/data/sd/jakarta/cilandak')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    searchSchool(keyword) {
        const filteredSchools = schools.data.filter(function (school) {
          return school.name.toUpperCase().includes(keyword.toUpperCase());
        });
    
        if (filteredSchools.length) {
          this.onSuccess(filteredSchools);
        } else {
          this.onFailed(keyword + ' is not found');
        }
    }
    



}

export default DataSource;