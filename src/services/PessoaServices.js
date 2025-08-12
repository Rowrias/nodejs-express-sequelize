const Services = require('./Services.js');

class PessoaServices extends Services{
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculas();
        return listaMatriculas;
    }
}

module.exports = PessoaServices;
