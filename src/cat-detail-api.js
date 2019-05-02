const catDetailApi = {
    save(applicant) {
        // get our cats array
        const cats = catDetailApi.getAll();
        // add applicant to cats
        cats.push(applicant);
        // serialize to JSON
        const json = JSON.stringify(cats);
        // save to local storage
        localStorage.setItem('cats', json);
    },

    get() {
        // use get all to fetch cats
        const cats = catDetailApi.getAll();
        // return
        return cats[0];
    },
    getAll() {
        const json = localStorage.getItem('cats');
        let cats = JSON.parse(json);
        if(!cats) {
            cats = [];
        }
        return cats;
    }
};

export default catDetailApi;