export default ({email, password}) => `
{
  singin(email: "${email}", password: "${password}"){
    uuid
    email
    password
    city
    phone
    document
    name
  }
}
`
