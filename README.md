# Jogo da Memória - DIO 🧠

Um clássico Jogo da Memória desenvolvido com HTML, CSS e JavaScript. Este projeto foi criado com base em um dos desafios/cursos da DIO (Digital Innovation One).

## 🎮 Jogue agora

👉 **[Clique aqui para jogar o Jogo da Memória](https://jonathan000001.github.io/memory-card-game-DIO/)**

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

## 📁 Estrutura do Projeto

```text
📦 memory-card-game-DIO
 ┣ 📂 src
 ┃ ┣ 📂 scripts
 ┃ ┃ ┗ 📜 engine.js
 ┃ ┗ 📂 styles
 ┃   ┣ 📜 main.css
 ┃   ┗ 📜 reset.css
 ┗ 📜 index.html

#### ✨ Evoluções e Novas Funcionalidades
Este projeto foi originado na DIO, mas passou por uma refatoração completa, ganhando novas mecânicas e um design mais moderno:
* **Níveis de Dificuldade:** Implementação de Nível 1 (16 cartas) e Nível 2 (36 cartas) com renderização dinâmica do tabuleiro sem recarregar a página (DOM Manipulation).
* **Desafio contra o Tempo:** Criação de um cronômetro com lógica de `setInterval` e controle de estados (`isGameOver`) para adicionar mais desafio ao jogo.
* **UX/UI Design Modernizado:** Substituição do tema vibrante original por uma paleta neutra e sofisticada em tons de chumbo e uso de Flexbox para layout responsivo.
* **Código Otimizado:** Uso avançado de JavaScript ES6 (como *Spread Operator* para duplicar cartas) e limpeza de variáveis/funções globais.