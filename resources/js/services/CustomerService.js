import { Api } from "./Api";
// import Axios from "axios";

export class CustomerService extends Api {
    constructor() {
        super();
    }

    store(data) {
        return axios.post(`${this.API_URL}/api/customers`, data, {
            headers: this.HEADERS
        });
    }

    index(queryString) {
        queryString = super.getQueryString(queryString);

        return axios.get(`${this.API_URL}/api/customers?${queryString}`);
    }

    get(id) {
        return axios.get(`${this.API_URL}/api/customers/${id}`);
    }

    update(data) {
        return axios.put(`${this.API_URL}/api/customers/${data.id}`, data, {
            headers: this.HEADERS
        });
    }

    delete(id) {
        return axios.delete(`${this.API_URL}/api/customers/${id}`, {
            headers: this.HEADERS
        });
    }


      
}