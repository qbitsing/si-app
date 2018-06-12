export default function (type, query) {
  let method
  let baseURL = 'https://api-si.herokuapp.com/graphql'
  if (type == 'query'){
    method = 'GET'
    baseURL += `?query=${query}`
  } else method = 'POST'
  return fetch(baseURL, {
    method,
  })
}