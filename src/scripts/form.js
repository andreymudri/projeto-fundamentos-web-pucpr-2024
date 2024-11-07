// Função de Validação de Formulário
function validarFormulario() {
	const nome = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
	const telefone = document.getElementById('telefone').value;
	const mensagem = document.getElementById('mensagem').value;

	if (nome.trim() === '') {
		// nome
		alert('Por favor, preencha o nome.');
		return false;
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // e-mail
	if (!emailRegex.test(email)) {
		alert('Por favor, insira um e-mail válido.');
		return false;
	}

	const telefoneRegex = /^[0-9]+$/; // telefone (somente números)
	if (!telefoneRegex.test(telefone) || telefone.length < 8) {
		alert('Por favor, insira um telefone válido (apenas números).');
		return false;
	}

	// Validação da mensagem
	if (mensagem.trim() === '') {
		alert('Por favor, escreva uma mensagem.');
		return false;
	}

	return true;
}
