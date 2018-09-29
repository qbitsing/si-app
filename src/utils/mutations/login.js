export default ({email, password}) => `
mutation {
  singin(email: "${email}", password: "${password}"){
    uuid
    email
    city
    phone
    document
    username
    name
  }
}
`
