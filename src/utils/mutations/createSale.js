export default ({
  brand,
  subcategory,
  photos,
  description,
  quantity,
  uuidUser,
  category,
  time
}) => `
mutation {
  createSale(sale: {
    brand: "${brand}"
    category: "${category}"
    subcategority: "${subcategory}"
    time: ${time}
    user: "${uuidUser}"
    photos: ${JSON.stringify(photos)}
    description: "${description}"
    quantity: ${quantity}
  }) {
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
