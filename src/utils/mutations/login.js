export default ({email, password}) => `
mutation {
  singin(email: "${email}", password: "${password}"){
    _id
    email
    city
    phone
    document
    username
    name
  }
}
`
