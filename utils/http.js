export default function (type, query) {
  let method
  const baseURL = 'https://api-si.herokuapp.com/graphql'
  if (type == 'query'){
    method = 'GET'
    baseURL += `?query=${query}`
  } else method = 'POST'
  fetch(baseURL, {
    method,
  })
}