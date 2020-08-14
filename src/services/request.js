import axios from 'axios';
const baseUrl = 'https://burgervergleich.autoteile.check24.de/api';
//A SIMPLE REQUEST SERVICE WRAPPER ONLY GOOD FOR SUNNY DAYS!
class request {
  
  constructor() {
    let service = axios.create({});
    service.interceptors.request.use(async (config) => {
      return config
    })
    this.service = service;
  }
  get(node, callback, error) {
    return this.service.request({
      method: 'GET',
      url: `${baseUrl}/${node}`,
      responseType: 'json',
    }).then((response) => callback(response.data))
    .catch(error);
  }
}

export default new request();
