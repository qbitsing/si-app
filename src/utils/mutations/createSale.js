export default ({
  brand,
  subcategorie,
  photos,
  description,
  quantity
}) => `
mutation {
  createSale(sale: {
    brand: "${brand}"
    uuid_subcategority: "${subcategorie}"
    time: "${new Date()}"
    photos: "${photos}"
    description: "${description}"
    quantity: ${quantity}
  }) {
    uuid
    brand
    uuid_subcategority
    time
    state
    value_end
    quantity
    uuid_user
    photos
    description
  }
}
`