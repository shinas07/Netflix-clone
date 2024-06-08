import axios from "axios";
import { baseUrl } from './constents/constants';


const instance = axios.create({
    baseURL: baseUrl,
  });


export default instance