# UrlShortener-WE
Projeto encurtador de url para Wiser Educação

Url da aplicação: http://rocky-plateau-58551.herokuapp.com\
Url de documentação: https://app.swaggerhub.com/apis/luancsl/urlshortened-WE/1.0.0


## Estrutura
O projeto seguiu a [arquitetura limpa](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture) e a estrutura das pastas está como se segue:

```
src                   pasta raiz
  -date               interfaces e gateways
  -delivery           acesso e despacho da aplicação
    -controller       
    -presenter        
  -domain             core da aplicação
    -entity           objetos de regra de negocio
    -usercase         casos de uso
  -helper             
  -infrastructure     bibliotecas e códigos de terceiros
  -main               
    -adapter          adaptores de codigo terceiros
    -config           
    -factory          criadores de objetos 
    -model            esquemas de orm utilizado
    -router           rotas para endpoints da aplicação
    -util             
  -index.js           
  -server.js
```

## Informações

- Para modifcar modificar o tempo limpeza de url curtas amazenadas no banco deve alterar a constante BD_CLEANING_TIME em index.js na pasta raiz
- A geração dos short codes se dá a partir da funcçao shortCodeGen() em util
- O método de geração dos short codes é baseado em um datatime do momento presente com adição um fator aleatorio 
- Os short codes gerados são utilizados para id dos objetos salvos no banco de dados

## Instalação

Para local:
```
docker-compose up
```

Para testes:
```
npm teste
```


