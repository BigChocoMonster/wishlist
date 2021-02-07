const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    wishes: [Wish!]
  }

  type Wish {
    title: String!
    desc: String
    budget: BudgetRange
    weblinks: [String!]
    isAcquired: Boolean!
  }

  type BudgetRange {
    from: Int!
    to: Int!
    amount: String!
  }
`;

module.exports = typeDefs;
