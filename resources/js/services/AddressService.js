
import { Api } from './Api'

export class AddressService extends Api {

  constructor () {
      super();
  }

  indexStates (queryString) {
    queryString = super.getQueryString(queryString);
    return axios.get(`${this.API_URL}/api/states?${queryString}`)
  }

  indexCities (queryString) {
    queryString = super.getQueryString(queryString);
    return axios.get(`${this.API_URL}/api/cities?${queryString}`)
  }


}
