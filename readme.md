# Utilização

para utilizar a aplicação com docker:

`docker compose up --build`

--------------------------------------------

## Requisitos

Nesta avaliação somativa, você deverá:

1. **Desenvolver um pequeno site**, com um padrão visual uniforme (cores, fontes, imagens, ...), no qual um mesmo menu, visualizado em todas as páginas do site, orienta a navegação do usuário, com, pelo menos, os arquivos principais:
   - `index.html`: página inicial do site;
   - `form.html`: página com formulário para captação e validação de dados;
   - `formAction.html`: página para receber, via Javascript, dados enviados com método GET;
   - `about.html`: página de conteúdo informativo sobre o site.

2. **Utilizar os elementos HTML** para estruturar o conteúdo do documento web, mantendo regras de estilo e códigos de script em arquivos separados, organizados em subpastas por tipo (script, imagens e estilos).

3. **Utilizar regras de estilo CSS** para formatar a apresentação visual dos elementos HTML, organizadas preferencialmente em classes que podem ser reaproveitadas em diferentes elementos HTML.

4. **Utilizar Javascript** para prover dinamicidade à interação com o usuário, como por exemplo: para controle de menus ou janelas de pop-up, ou validação de dados, ou alteração de estilo de elementos HTML, entre outros.

5. **Criar formulário**, com validação de TODOS os seus campos, e recuperar os dados enviados via método GET com Javascript.

6. **Utilizar o caminho relativo** para fazer referência a recursos internos ao site.

## Entrega

Você deverá entregar:

1. **Conjunto de arquivos deste site**, enviados em um único arquivo compactado formato .ZIP.
2. **Um vídeo (.MP4, link não listado Youtube)**, de até 5 minutos, onde você realiza a defesa do trabalho de acordo com o roteiro descrito a seguir.

## Roteiro de Defesa

1. Se apresenta (aparece no vídeo e diz o seu nome).
2. Narra a explicação (não é mais necessário aparecer no vídeo) da navegação pelo site, apresentando a página funcional e seu código (HTML / CSS / Javascript), de acordo com o roteiro a seguir:
   - Página inicial (`index.html`), em equipamento local (localhost ou pasta do equipamento, como por exemplo c:\meusite).
   - Menu padrão, igual em todas as demais páginas do site, criado com pelo menos HTML e CSS, sem utilização de frameworks ou outras plataformas de código.
   - Página de formulário (`form.html`), que valida seus dados recebidos (usa expressão regular, ou Javascript, ou tipo de input, ou preenchimento obrigatório, ...).
   - Página para receber dados do formulário (`formAction.html`) enviados com método GET e tratados com Javascript.
   - Página de conteúdo informativo sobre o site (`about.html`), com apresentação do trabalho, autor, evidenciando no código o tratamento dos elementos (HTML / CSS / Javascript).
