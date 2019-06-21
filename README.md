# Backend do app Compartilhagram

Backend em NodeJS do app Compartilhagram

### API

Descrição dos endpoints disponíveis.

#### 1. GET /
Retorna a versão da API

**Exemplo:**

> `GET /`

> `200 OK`

```text
Content-Type: text/plain

Compartilhagram API v0.0.1
```

#### 2. POST /usuarios/autenticar
Realiza a autenticação de um usuário na aplicação. Recebe login como entrada e retorna todos os dados de usuário no sistema.

**Exemplo:**

> `POST /usuarios/autenticar`

```json
Content-Type: application/json

{
    "login":"joao"
}
```

> `200 OK`

```json
Content-Type: application/json

{
    "usuario": {
        "_id": "5d0d1d968eefb80004e67eb2",
        "nome": "João da Silva",
        "login": "joao",
        "avatar": "https://compartilhagram.s3.su-east-1.amazonaws.com/avatar-joao.png",
        "__v": 0
    }
}
```

#### 3. POST /usuarios/cadastrar
Cadastra um novo usuário no sistema. Recebe como entrada login, nome e avatar (arquivo) e retorna todos os dados do novo usuário.

**Exemplo:**

> `POST /usuarios/cadastrar`

```json
Content-Type: multipart/form-data

{
    "login":"joao",
    "nome":"João da Silva",
    "avatar": FOTO.png
}
```

> `200 OK`

```json
Content-Type: application/json

{
    "mensagem": "Novo usuário cadastrado no sistema",
    "usuario": {
        "_id": "5d0d269004cb14000433855c",
        "nome": "João da Silva",
        "login": "joao",
        "avatar": "https://compartilhagram.s3.su-east-1.amazonaws.com/avatar-joao.jpg"
    }
}
```

#### 4. POST /posts/cadastrar
Cadastra um novo post no sistema. Recebe como entrada os dados de autor do post, legenda e imagem e retorna todos os dados do novo post.

**Exemplo:**

> `POST /posts/cadastrar`

```json
Content-Type: multipart/form-data

{
    "loginAutor":"joao",
    "nomeAutor":"João da Silva",
    "avatarAutor":"https://compartilhagram.s3.su-east-1.amazonaws.com/avatar-joao.jpg",
    "legenda":"Meu primeiro post",
    "imagem": IMAGEM.png
}
```

> `200 OK`

```json
Content-Type: application/json

{
    "mensagem": "Novo post cadastrado no sistema",
    "post": {
        "_id": "5d0d2837f97dfc0004310513",
        "autor": {
            "nome": "João da Silva",
            "avatar": "https://compartilhagram.s3.su-east-1.amazonaws.com/avatar-joao.jpg",
            "login": "joao"
        },
        "curtidas": 0,
        "legenda": "Meu primeiro post",
        "imagem": "https://compartilhagram.s3.su-east-1.amazonaws.com/imagem-joaopost.png",
        "comentarios": []
    }
}
```

#### 5. GET /posts/
Retorna todos os posts cadastrados no sistema

**Exemplo:**

> `GET /posts/`

> `200 OK`

```json
Content-Type: application/json


{
    "posts": [
        {
            "autor": {
                "nome": "João da Silva",
                "avatar": "https://compartilhagram.s3.su-east-1.amazonaws.com/avatar-joao.jpg",
                "login": "joao"
            },
            "_id": "5d0d2837f97dfc0004310513",
            "curtidas": 0,
            "legenda": "Meu primeiro post",
            "imagem": "https://compartilhagram.s3.su-east-1.amazonaws.com/imagem-joaopost.png",
            "comentarios": []
        },
        {
            "autor": {
                "nome": "João da Silva",
                "avatar": "https://compartilhagram.s3.su-east-1.amazonaws.com/avatar-joao.jpg",
                "login": "joao"
            },
            "_id": "5d0d2837f97dfc0004310513",
            "curtidas": 2,
            "legenda": "Meu segundo post",
            "imagem": "https://compartilhagram.s3.su-east-1.amazonaws.com/imagem-joaopost2.png",
            "comentarios": []
        },
    ]
}
```