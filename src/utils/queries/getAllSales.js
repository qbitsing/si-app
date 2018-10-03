import http from '../http'
const query = `
{
    sales {
        _id
        brand
        category
        subcategory
        quantity
        value_end
        time
        description
        photos
        state
        quantity
    } 
}
`
export default () => http('query', query)
