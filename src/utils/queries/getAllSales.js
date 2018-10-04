import http from '../http'
const query = `
{
    sales {
        _id
        brand
        category
        quantity
        value_end
        endTime
        creationTime
        description
        photos
        state
        quantity
    } 
}
`
export default () => http('query', query)
