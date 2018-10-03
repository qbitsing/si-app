export default ({
  brand,
  subcategory,
  photos,
  description,
  quantity,
  uuidUser,
  category
}) => `
mutation {
  createSale(sale: {
    brand: "${brand}"
    category: "${category}"
    subcategority: "${subcategory}"
    time: 1
    user: "${uuidUser}"
    photos: ${JSON.stringify(photos)}
    description: "${description}"
    quantity: ${quantity}
  }) {
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
