//Importamos Apollo Server
const {gql } = require('apollo-server');
const typeDefs = gql`

    type Curso {
        titulo : String
    }

    type Tecnologia{
        tecnologia : String
    }

    input CursoInput{
        tecnologia : String
    }

    type Query {
        obtenerCursos : [Curso]
        obtenerUnCurso : Curso
        obtenerTecnologia : [Tecnologia]
        obtenerCursoByTecnologia(input: CursoInput!) : [Curso]
    }

`;

module.exports = typeDefs;