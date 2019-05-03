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

    get(name) {
        // use get all to fetch cats
        const cats = catDetailApi.getAll();
    
        for(let i = 0; i < cats.length; i++) {
            const cat = cats[i];
            if(cat.owner === name) {
                return cat;
            }
        }
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