const catDetailApi = {
    key: 'cats',
    save(applicant) {
        // get our cats array
        const cats = catDetailApi.getAll();
        // add applicant to cats
        cats.push(applicant);
        // serialize to JSON
        const json = JSON.stringify(cats);
        // save to local storage
        localStorage.setItem(catDetailApi.key, json);
    },

    get(owner) {
        // use get all to fetch cats
        const cats = catDetailApi.getAll();
    
        for(let i = 0; i < cats.length; i++) {
            const cat = cats[i];
            if(cat.owner === owner) {
                return cat;
            }

        }
    },
    getAll() {
        const json = localStorage.getItem(catDetailApi.key);
        let cats = JSON.parse(json);
        if(!cats) {
            cats = [];
        }
        return cats;
    }
};

export default catDetailApi;