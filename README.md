<h1 align="center">API de Festas</h1>

<h2> :speech_balloon: Descrição</h2>

 <p>Essa <strong>API</strong> guarda informações de uma festa com várias opções de interatividade!</p>
 

 - [x] Registro de novas festas
 - [x] Alterar dados
 - [x] Deletar dados
 - [x] Criptografia de dados
 - [x] Salvo em um banco de dados

 
<h2> :open_book: Como usar</h2>

> Fazer o fecth da URL a baixo e retornará todas as festas registradas.


    fetch("https://apiparty-cauastupp/api/parties")
	  .then(response => response.json())
	  .then(json => console.log(json));
