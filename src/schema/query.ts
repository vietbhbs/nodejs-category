export const queryCategory = `
    categories(page: Int, offset:Int): [Category]
    category(id: ID!): Category
`