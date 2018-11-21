const graphql = require('graphql');

const { GraphQLObejctType, GraphQLString } = graphql;

const BookType = new GraphQLObejctType({
    name: 'Book',
    fields: () => {
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    }
});