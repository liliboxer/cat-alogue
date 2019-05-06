const catDetailApi = {
    save(applicant) {
        // serialize to JSON
        const json = JSON.stringify(applicant);
        // save to local storage
        localStorage.setItem('applicant', json);
    },

    get() {
        // get from local storage
        const json = localStorage.getItem('applicant');
        // parse 
        const applicant = JSON.parse(json);
        // return
        return applicant;
    }
};

export default catDetailApi;