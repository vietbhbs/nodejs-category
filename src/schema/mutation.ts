export const mutationCategory = `
        createCategory(
        name: String!,
        language: String,
        slugs: String!,
        title: String!,
        description: String!,
        keywords: String!,
        photo: String
        parent: Int,
        order_stt: Int!,
        show_top: Int!,
        show_home: Int!,
        show_right: Int!,
        show_bottom: Int!,
        level: Int
        ): Category,
        
        updateCategory(
        id: ID!,
        name: String,
        language: String,
        slugs: String,
        title: String,
        description: String,
        keywords: String,
        photo: String
        parent: Int,
        order_stt: Int,
        show_top: Int,
        show_home: Int,
        show_right: Int,
        show_bottom: Int,
        level: Int
        ): Category,
        
        deleteCategory(id: ID!): String
`