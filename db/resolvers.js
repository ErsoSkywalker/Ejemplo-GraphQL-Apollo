
//Importamos Apollo Server
const { ApolloServer} = require('apollo-server');
const cursos = [
    {
        'titulo':'El Buen curso1',
        'tecnologia':'Más tecnología1'
    },
    {
        'titulo':'El Buen curso2',
        'tecnologia':'Más tecnología2'
    },
    {
        'titulo':'El Buen curso3',
        'tecnologia':'Más tecnología3'
    }
];
const resolvers = {
    Query:{
        obtenerCursos : ()=> cursos,
        obtenerUnCurso : () => cursos[0],
        obtenerTecnologia: () => cursos,
        obtenerCursoByTecnologia: (_, {input}, ctx, info)=>{
            console.log(input);
            const resultado = cursos.filter(curso => curso.tecnologia === input.tecnologia);
            return resultado;
        }
    }
}

module.exports = resolvers;