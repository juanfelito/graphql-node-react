const graphql = require('graphql');

const { GraphQLObejctType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObejctType({
    name: 'Book',
    fields: () => {
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    }
});

const RootQuery = new GraphQLObejctType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString}},
            resolve(parent, args) {
                // Code to get results
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});