window.onload = function () {
	const urlParams = new URLSearchParams(window.location.search);

	const nome = urlParams.get('nome') || 'Não fornecido';
	const email = urlParams.get('email') || 'Não fornecido';
	const telefone = urlParams.get('telefone') || 'Não fornecido';
	const mensagem = urlParams.get('mensagem') || 'Não fornecida';

	// Exibir os dados na página
	const resultadoDiv = document.getElementById('resultado');
	resultadoDiv.innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
  `;
};
