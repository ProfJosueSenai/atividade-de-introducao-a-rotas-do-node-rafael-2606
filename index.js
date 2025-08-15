const http = require('http');
const porta = 3000

const server = http.createServer((req, res) => {

    //Mostra a rota solicitada
    url = req.url
    console.log('url: ', url);

    //Aqui vão as Rotas
    //res.end('inicio do projeto'); //sera excluido no prox. passo
    //Aqui vão as Rotas
    if (url === '/') {
        res.end('<h1>Mercadinho da Juju</h1>');
    } else if (url === '/verduras') {
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<ul><li>alface</li><li>rucula</li></ul>');
    } else if (url === '/frutas') {
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<ul><li>maçã</li><li>tomate</li></ul>');
    } else if (url === '/bebidas') {
        res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<ul><li>Whisky</li><li>coca-cola zero</li></ul>');
    } else {
        res.writeHead(404, 'Pagina não encontrada', { 'Content-Type': 'text/html; charset=utf-8' }) //rota nao cadastrada
        res.end('Pagina não encontrada');
    }
});

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:' + porta);
});