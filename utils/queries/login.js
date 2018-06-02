export default ({email, password}) => `
{
  singin(email: "${email}", password: "${password}"){
    uuid
    email
  }
}
`