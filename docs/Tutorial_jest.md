# Testando a aplicação com jest

## 1. Fontes de consulta

Getting Started

<https://jestjs.io/docs/getting-started>

supertest

<https://www.npmjs.com/package/supertest>

machers

<https://jestjs.io/docs/using-matchers>

beforeAll() afterAll()

<https://jestjs.io/docs/setup-teardown>

expressoes Regex

<https://blog.dp6.com.br/regex-o-guia-essencial-das-express%C3%B5es-regulares-2fc1df38a481>

## 2. Preparação o ambiente

### instalando o framework Jest e supertest
```npm install --save-dev jest supertest```


### Alterar package.json para mostrar rodar o jest 


```json
  "scripts": {
    "test": "jest"
  },
```

### acrescente a seguinte linha ao final do index.js


```javascript
module.exports = server
```

## 3. Criando o arquivo de teste com o teste da rota principal

### crie o arquivo index.test.js

```javascript
const request = require('supertest');
const server = require('./index');

describe('Testando rotas do mercadinho juju',()=>{

    //fecha o servidor depois que todos os testes forem executados
    afterAll(()=>{
        server.close();
    });

    //teste da rota principal
    test('GET / deve retornar Mercadinho da Juju',async ()=>{
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Mercadinho da Juju');
    });

});
```
### Descrição do código

| chamada de funcao   | Descrição |
|------|----------------------------------------|
|```afterAll()```| Executa um callback após todos os teste terminarem (hook)|
|```request().get()```| Abre o servidor faz request para uma rota específica|
|```expect(N1).toBe(N2)```| Compara valores numéricos (N1 == N2)|
|```expect(T1).toContain(T2)```| Compara valores detexto (T1 == T2)|
|```await```| Espera uma função assincrona retornar|


### 4. Acrescente o teste da rota /verduras 

```javascript
    //teste da rota /verduras
    test('/verduras Retornar HTML contendo pelo menos 2 verduras e status 200',async ()=>{
        const res = await request(server).get('/verduras');
        const qtdFrutas = (res.text.match(/<li>/g)||[]).length;
        
        expect(res.statusCode).toBe(200);
        expect(qtdFrutas).toBeGreaterThanOrEqual(2);
    });
```

### Descrição do código

```/<li>/g``` é uma expressão em regex que conta as tags li do retorno

Use o site abaixo para testar expressões regex

<https://regexr.com/>