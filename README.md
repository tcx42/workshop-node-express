# Workshop: Node.js e Express - Manipulando dados com API

Crie uma API onde o usuário possa cadastrar seu nome, senha, e email e o tipo de usuário (operador, admin) , podem ser  colocadas outras informações caso queira, o usuário deve poder alterar esses dados exceto o e-mail, além disso ele pode deletar seu usuário caso queira, também será necessário uma rota para listar todos os usuário da API, e uma que liste um único usuário, porém somente os usuário do tipo admin podem listar os usuários da aplicação, um usuário do tipo operador só pode listar ele próprio, a aplicação deve se comunicar com um banco de dados usando o sequelize para armazenar os dados.