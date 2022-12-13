  
  

💻 Portfólio
============

Esse é o meu portfólio profissional demonstrando de forma objetiva minhas capacidades de técnicas e resolução de problemas, por meio de uma interface simples, moderna e intuitiva.

  
  

* * *

  
  

🎲 Utilizando o portfólio
---------------------

### ▪️ Baixando portfólio e instalando dependências

Para utilizar o projeto basta fazer o fork do repositório em computador e ao baixar realizar o download das dependências do portfólio com o comando:

```
yarn
```

### ▪️ Iniciando visualização do portfólio

Ao finalizar o download das dependências, inicie a visualização do projeto em ambiente de desenvolvimento com o comando:

```
yarn dev
```

  
  

* * *

🗂 Estrutura de pastas
----------------------

Todas as pastas são comuns de um projeto React, porém quero chamar atenção para alguns arquivos que são fundamentais para a customização das informações no portfólio

Segue as informações sobre cada um:

*   #### 🗂 Pasta utils
    
    _Nessa pasta você encontrará dois arquivos que ficarão responsáveis pelas informações exibidas no portfólio_
    
    *   **📄 userData.ts**
        
        _Nesse arquivo você pode fazer a troca das informações do objeto **UserData** para que reflita nas informações do portfólio_
        
        *   **nameUser:** _Nome que aparecerá como logotipo da página, bem como em outras seções onde existe alguma apresentação pessoal_
            
        *   **githubUser:** _Essa informação é bastante importante para que os repositórios sejam exibidos, bem como o link do seu github e a imagem de perfil que ficará disponível na portfólio_
            
        *   **linkedinUser:** _Inserindo o usuário do seu linkedin será gerado um link para que os usuários acessem seu LinkedIn_
            
        *   **whatsappNumber:** _Nessa propriedade você precisará inserir seu DDD junto com o seu número do whatsapp, assim quem clicar no link "whatsapp" irá ser enviado para o seu contato já com uma mensagem pré-definida_

        *   **emailUser:** _Nessa propriedade você precisará inserir seu email, assim quem clicar no link "email" irá abrir uma tela para mandar uma mensagem pelo email_

        *   **instagramUser:** _Nessa propriedade você precisará inserir nome de usuário do instagram o famoso '@', assim quem clicar na imagem do instagram no footer do portfólio você irá ser enviado para o meu perfil do instagram (já segue lá)_

    *   **📄 stackData.ts**

        _Nesse arquivo você pode fazer a troca das stacks ou adicionar mais no array **stackData** para mostrar no topo do portfólio_

        *   **stackData:** _Essa variável recebe um array com as stacks e dentro desse array você cria um objeto com as propriedades title, img e color_

            *   **title:** _Essa propriedade recebe o titulo ou nome da stack_

            *   **img:** _Essa propriedade recebe icon ou uma variável com o link de uma imagem de uma stack_

            *   **color:** _Essa propriedade recebe uma color em nome, #, rgb, rgba, hsl ou hsla_
