import api from "../service/api";

export function useFetch(url, method = 'get', params = {}, headers = {}){
  return api[method](url, params, headers);
}