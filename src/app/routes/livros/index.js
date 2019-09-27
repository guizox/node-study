const LivrosDAO = require('../../DAOs/livro');
const db = require('../../../config/database');

const DAO = new LivrosDAO(db);

module.exports = ({
    list: (req, res) => {
        return DAO.list().then(
            data => res.marko(
                require('../../views/livros/lista/lista.marko'),
                {list: data}
            )
        ).catch(
            err => console.log(erro)
        )
    },
    showForm: (req, res) =>  res.marko(require('../../views/livros/lista/form/form.marko')),
    insert: async (req, res) => {
        try {
            const { status, data } = await DAO.insert(req.body);
            if ( status === 200 && data ) {
                res.redirect('/')
            } 
        } catch(e) {
            console.log('Erro ao tentar inserir. ', e);
        }
        
    }
})
    
