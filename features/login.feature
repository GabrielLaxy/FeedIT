Funcionalidade: Login de usuário

  Cenário: Login com sucesso
    Dado que o usuário está na tela de login
    Quando o usuário insere um nome de usuário e uma senha válidos
    E o usuário clica no botão "Entrar"
    Então o usuário deve ser redirecionado para a página inicial

  Cenário: Login com credenciais inválidas
    Dado que o usuário está na tela de login
    Quando o usuário insere um nome de usuário ou senha inválidos
    E o usuário clica no botão "Entrar"
    Então uma mensagem de erro deve ser exibida

