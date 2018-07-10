export default function (type, query) {
  let method
  let body
  let baseURL = 'https://api-si.herokuapp.com/graphql'
  if (type == 'query'){
    method = 'GET'
    baseURL += `?query=${query}`
  } else {
    method = 'POST'
    body = JSON.stringify({query})
  }
  console.log(method, body)
  return fetch(baseURL, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method,
    body
  })
}