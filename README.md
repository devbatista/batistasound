# catSom — Site estático

Projeto: site estático promocional do catSom (aluguel de som, iluminação e estúdio).

Resumo
- HTML, CSS e JavaScript simples.
- Tailwind CDN está carregado, mas as seções principais foram refatoradas para classes semânticas e estilos centralizados em `css/styles.css`.
- Arquivos importantes:
  - `index.html` — página principal
  - `css/styles.css` — folha de estilos centralizada (sem `@apply`)
  - `js/main.js` — comportamentos (menu móvel, galeria/ modal, updates de `#year` etc.)
  - `images/` — imagens do projeto

Decisões e observações
- IDs e atributos usados por JS foram preservados (ex.: `mobile-menu-button`, `mobile-menu`, `gallery-modal`, `gallery-modal-image`, `gallery-modal-close`, `year`).
- Cores-chave: dourado (`#d4a43a`), WhatsApp (`#25D366`).

Como abrir localmente
- Opção rápida (Python 3):

```bash
# a partir da raiz do projeto
python3 -m http.server 8000
# depois abra http://localhost:8000 no navegador
```

- Ou use a extensão Live Server no VS Code para preview instantâneo.

Contribuições
- Faça um fork/branch, aplique mudanças pequenas e abra um pull request.
- Evite renomear IDs usados pelo `js/main.js` sem ajustar o JS correspondente.

Licença
- Coloque aqui a licença do projeto (ex.: MIT) ou mantenha os direitos reservados conforme necessário.

Contato
- Rafael Batista — rafael@devbatista.com
