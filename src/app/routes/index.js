const livros = require('./livros');

module.exports = app => {
    app.get('/', (req, res) => livros.list(req, res));
    app.get('/form', (req, res) => livros.showForm(req, res));
    app.post('/form/post', (req, res) => livros.insert(req, res));
}