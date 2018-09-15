export default function(type, query) {
  let method
  let body
  let baseURL = 'https://api-si.herokuapp.com/'
  if (type == 'query') {
    method = 'GET'
    baseURL += `graphql?query=${query}`
  } else {
    method = 'POST'
    if (type === 'upload') {
      baseURL += 'upload'
      body = JSON.stringify({
        ...query
      })
    }
    else {
      baseURL += 'graphql'
      body = JSON.stringify({query})
    }
  }
  console.log(body)
  return fetch(baseURL, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method,
    body
  })
}
