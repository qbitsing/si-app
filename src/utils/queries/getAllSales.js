import http from '../http'
const query = `
{
    sales {
        uuid
        uuid_subcategority
        time
        quantity
        photos
        value_end
        description
        state
        brand
      }
}
`
export default () => http('query', query)
