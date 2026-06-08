StudyFlow

Sistema Web para gerenciamento acadêmico desenvolvido com Node.js, Express, MySQL e EJS.

O objetivo do projeto é auxiliar estudantes no controle de disciplinas, tarefas, prazos e atividades acadêmicas por meio de uma interface simples, moderna e responsiva.

Demonstração
- Aplicação Online
https://studyflow-j3z8.onrender.com

- Repositório
https://github.com/IgorVentura0517/StudyFlow

Sobre o Projeto

O StudyFlow foi desenvolvido como projeto acadêmico com o propósito de aplicar conceitos de desenvolvimento web Full Stack, banco de dados relacionais, autenticação de usuários e arquitetura MVC.

O sistema permite que cada usuário possua sua própria área de estudos, organizando disciplinas e tarefas de forma independente.

Objetivos
- Organizar disciplinas acadêmicas.
- Controlar atividades e tarefas.
- Acompanhar prazos de entrega.
- Gerenciar o progresso dos estudos.
- Aplicar conceitos modernos de desenvolvimento web.

Funcionalidades
Usuários
- Cadastro de usuários.
- Login.
- Logout.
- Sessão autenticada.
- Proteção de rotas privadas.

Disciplinas
- Criar disciplina.
- Listar disciplinas.
- Editar disciplina.
- Excluir disciplina.

Tarefas
- Criar tarefa.
- Listar tarefas.
- Editar tarefa.
- Excluir tarefa.
- Marcar tarefa como concluída.

Dashboard
- Quantidade total de disciplinas.
- Quantidade total de tarefas.
- Tarefas pendentes.
- Tarefas em andamento.
- Tarefas concluídas.
- Próximas entregas.

Interface
- Layout moderno.
- Design responsivo.
- Feedback visual para o usuário.
- Navegação intuitiva.
- Validação de formulários.

Arquitetura

O projeto foi desenvolvido utilizando o padrão MVC.

O projeto segue o padrão MVC.

### Estrutura Principal

- public
  - css
  - js

- src
  - controllers
  - database
  - middlewares
  - models
  - routes
  - views
  - app.js

- .env
- package.json
- README.md

Tecnologias Utilizadas
Backend:
- Node.js
- Express.js
  
Banco de Dados:
- MySQL
- Railway
  
Frontend:
- HTML5
- CSS3
- JavaScript
- EJS

Controle de Versão:
- Git
- GitHub

Deploy:
- Render
- Railway

Segurança

O sistema implementa:

- Sessões autenticadas.
- Proteção de rotas privadas.
- Isolamento de dados por usuário.
- Middleware de autenticação.
- Variáveis de ambiente para armazenamento de credenciais.

Requisitos: 
- Node.js 20 ou superior.
- MySQL 8 ou superior.
- Git.

Instalação Local

Clonar o repositório
- git clone https://github.com/IgorVentura0517/StudyFlow.git
  
Entrar na pasta do projeto
- cd StudyFlow
  
Instalar dependências
- npm install
  
Criar arquivo .env
- DB_HOST=localhost
- DB_PORT=3306
- DB_USER=root
- DB_PASSWORD=
- DB_NAME=studyflow

Executar migração do banco
- npm run db:migrate
  
Iniciar aplicação
- npm run dev

Acessar
- http://localhost:3000
  
Banco de Dados

O sistema utiliza três tabelas principais:

- usuarios
Responsável pelo armazenamento dos dados dos usuários cadastrados.

- disciplinas
Responsável pelo armazenamento das disciplinas vinculadas aos usuários.

- tarefas
Responsável pelo armazenamento das tarefas vinculadas às disciplinas e usuários.

Telas do Sistema
- Login
Tela de autenticação dos usuários.

- Cadastro
Tela de registro de novos usuários.

- Dashboard
Visão geral dos estudos e estatísticas.

- Disciplinas
Gerenciamento completo de disciplinas.

- Tarefas
Gerenciamento completo de tarefas.


Melhorias Futuras
- Recuperação de senha.
- Perfil do usuário.
- Upload de arquivos.
- Calendário acadêmico.
- Dashboard avançado.
- API REST.
- Integração com Google Calendar.
- Validação de e-mail via token.
- Sistema de notificações.
- Aplicativo mobile.

Equipe

Projeto desenvolvido por:

- Igor Ventura (RA: 1722540)
- Erick Ventura Gamberini (RA: 3099001)
- Pedro Paulo Camargo da Silva (RA: 1860175)
- Renam Henrique Fenich (RA: 3228327)
- Fernando Alves Landim (RA: 1794239)

Curso: Engenharia da Computação

Licença

Projeto desenvolvido para fins acadêmicos.

Todos os direitos reservados aos autores.

