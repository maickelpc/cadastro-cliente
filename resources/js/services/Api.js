export class Api {

    constructor() {

        this.API_URL = document.querySelector('meta[name="url"]').getAttribute('content');
        this.HEADERS = {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'Content-Type': 'application/json'
        };

    }

    getQueryString(object) {

        if (!object)
            return ''

        if (typeof (object) === 'string')
            return object;

        if (typeof (object) === 'object')
            object = {...object}

        let queryString = ''

        // Monta a querystring 
        Object.keys(object).forEach((key) => {
            if (object[key] !== null && object[key] !== undefined && object[key] !== '') {
                if (queryString.length > 0)
                    queryString += '&'
                queryString += key + '=' + encodeURIComponent(object[key]);
            }
        });

        return queryString;

    }
}
  