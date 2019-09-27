class LivrosDAO {
    constructor(db) {
        this._db = db;
    }

    list(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros', (err, res) => {
                    if (err) return reject('Não foi possível lista os livros');
                    return resolve(res);
                }
            )
        }
        )
    }

    insert(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?,?,?)
            `, [livro.titulo, livro.preco, livro.descricao],
            err => {
                if (err) {
                    console.log(err);
                    return reject('Não foi possível adicionar o livro');
                }
                resolve({ status: 200, data: { } });
            }

            )
        })
    }
}

module.exports = LivrosDAO;