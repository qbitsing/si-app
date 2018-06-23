export default function (type, query) {
  let method
  let body
  let baseURL = 'https://api-si.herokuapp.com/graphql'
  if (type == 'query'){
    method = 'GET'
    baseURL += `?query=${query}`
  } else {
    method = 'POST'
    body = query
  }
  return fetch(baseURL, {
    method,
    body
  })
}