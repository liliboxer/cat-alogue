const catDetailApi = {
    save(applicant) {
        // create array with applicant
        const cats = [];
        cats.push(applicant);
        // serialize to JSON
        const json = JSON.stringify(cats);
        // save to local storage
        localStorage.setItem('cats', json);
    },

    get() {
        // get from local storage
        const json = localStorage.getItem('cats');
        // parse 
        const cats = JSON.parse(json);
        // return
        return cats[0];
    }
};

export default catDetailApi;