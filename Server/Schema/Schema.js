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

var books = [
    {name:'anuj', gender:'male'},
    {name:'anuj12', gender:'male'},
    {name:'anuj123', gender:'male'},

]
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args:{id: {type: GraphQLString }},
            resolve(parent, args){
                args.id
                //get data from DB or any other source
                return _.find(books, {id:args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
