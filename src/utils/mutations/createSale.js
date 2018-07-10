export default ({
  brand,
  subcategory,
  photos,
  description,
  quantity,
  uuidUser
}) => `
mutation {
  createSale(sale: {
    brand: "${brand}"
    uuid_subcategority: "${subcategory}"
    time: 1
    uuid_user: "${uuidUser}"
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