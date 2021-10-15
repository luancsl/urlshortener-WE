# UrlShortener-WE
Projeto encurtador de url

Url da aplicação: http://rocky-plateau-58551.herokuapp.com \
Url de documentação: https://app.swaggerhub.com/apis/luancsl/urlshortened-WE/1.0.0

## Estrutura
O projeto seguiu um padrão de [arquitetura limpa](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture) e a estrutura das pastas do projeto pode ser visualizada logo a baixo:

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
    -adapter          adaptores para códigos de terceiros
    -config           
    -factory          criadores de objetos 
    -model            esquemas de orm utilizado
    -router           rotas para endpoints da aplicação
    -util             
  -index.js           
  -server.js
```

## Informações

- Para modificar o tempo limpeza de url curtas amazenadas no banco deve alterar a constante BD_CLEANING_TIME em **src\index.js**.
- A geração dos short codes se dá a partir da funçao shortCodeGen() em **util**.
- O método de geração dos short codes é baseado em um datatime do momento presente com adição de um fator aleatório. 
- Os short codes gerados são utilizados na formação da url curta e armazenados como id de objetos no banco de dados.

## Instalação

Com docker:
```
docker-compose up
```

Testes:
```
npm teste
```


