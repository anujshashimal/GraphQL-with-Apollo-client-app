const graphql = require('graphql');
const_ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id: { type:GraphQLString },
        name: {type: GraphQLString},
        gender: {type:GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args:{id: {type: GraphQLString }},
            resolve(parent, args){
                args.id
                return _.find(books, {id:args.id});
            }
        }
    }
});

var books = [
    {name:'anuj', gender:'male'},
    {name:'anuj12', gender:'male'},
    {name:'anuj123', gender:'male'},
];
module.exports = new GraphQLSchema({
    query: RootQuery
});
