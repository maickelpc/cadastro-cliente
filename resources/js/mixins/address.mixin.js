
import { AddressService }   from '../services'
const addressService = new AddressService();

export default {
    data() {
        return {
            states: [],
            cities: [],
            spinnerCity: false,
            spinnerState: false,
            timerCity: false,
            timerState: false,
        
        }
    },
    
    methods: {

        searchStateDebounce(param){
            let queryString = param;
            if (typeof param === 'string' || param instanceof String)
                queryString = {name: param}
            clearTimeout(this.timerState)
            this.timerState = setTimeout(() => {
                this.searchState(queryString)
            }, 700);
        },

        searchCityDebounce(param){
            let queryString = param;
            if (typeof param === 'string' || param instanceof String)
                queryString = {name: param}
            clearTimeout(this.timerCity)
            this.timerCity = setTimeout(() => {
                this.searchCities(queryString)
            }, 700);
        },

       searchState(queryString){
            this.states = []
            this.spinnerState = true
            addressService.indexStates(queryString).then( response => {
                    this.states = response.data.data
                }).finally( () => this.spinnerState = false)
       },

       searchCities(queryString){
            this.cities = []
            this.spinnerCity = true
            addressService.indexCities(queryString)
                .then( response => {
                    this.cities = response.data.data
                }).finally( () => this.spinnerCity = false)
        }
    }
};
