const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query{
    me: User
}
input BookInput {
    authors: [String]
    bookId: String!
    description: String!
    image: String
    link: String
    title: String!
}
type Mutation {
    login(
        email: String!
        password: String!
    ): Auth

    addUser(
        username: String!
        Email: String!
        password: String!
    ): Auth

    saveBook(
        bookData: BookInput!
    ): User

    removeBook(
    bookId: String!
    ): User
}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    authors: [String]
    bookId: String!
    description: String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
}

`;

module.exports = typeDefs;