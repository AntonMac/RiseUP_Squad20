![thumbnail](./Entrega_Parcial_Docs/banner-squad20.png)




---
# Apresentação
Repositório do Projeto do Squad 20 (UNIT), para Desafio proposto pela Liferay e Porto Digital como parte da Residência Tecnológica do Programa Embarque Digital Criado pela Prefeitura da Cidade do Recife, PE - Brasil . 


# Desafio

Desenvolver uma solução web Front-End seguindo o case e requisitos descritos no documento do [Desafio](./Entrega_Parcial_Docs/Programa_de_Residencia_Porto_Digital___Squad_Liferay_20_2024.1.pdf) proposto pela Liferay.

## Stack de Desenvolvimento

- HTML
- css
- JavaScript


## Implantação da Solução

Este guia descreve como implantar um site web estático a partir da pasta **release_beta.V3** em um novo ambiente. Siga os passos abaixo para garantir uma implantação bem-sucedida.

## Requisitos

- Acesso ao servidor web (Apache, Nginx, etc.) ou serviço de hospedagem (GitHub Pages, Vercel, etc.).
- Acesso ao terminal/linha de comando.
- Um editor de texto ou IDE para edição de arquivos (opcional).

## Passos para Implantação

1. **Obtenha o código-fonte**

   Clone o repositório ou baixe o código-fonte do projeto que contém a pasta **release_beta.V3**.

   ```bash
   git clone https://github.com/AntonMac/RiseUP_Squad20.git
   cd RiseUP_Squad20
   ```

   Se você baixou o código-fonte como um arquivo ZIP, extraia o conteúdo em seu computador e navegue até a pasta do projeto.

2. **Verifique a Estrutura do Projeto**

   Certifique-se de que a estrutura do projeto esteja correta. Ela deve se parecer com o seguinte:

   ```
   release_beta.V3/
   ├── Adecao-Comite.html
   ├── Adecao.html
   ├── Detalhescamp.html
   ├── DetalhescampComite.html
   ├── Exemploiraderir.html
   ├── Home-PosLoginColab.html
   ├── Home-PosLoginMembroC.html
   ├── HomeComite.html
   ├── PageFeed.html
   ├── TelaCardsColaborador.html
   ├── TelaCardsComite.html
   ├── cadastro.html
   ├── contribuicao.html
   ├── index.html
   ├── login.html
   ├── minhascampanhas.html
   ├── novacampanha.html
   ├── senharec.html
   └── senharecb.html
   ├── css/
       ├── Adecao.css
       ├── AdecaoEMinhascamps.css
       ├── HomeColaborador.css
       ├── Login.css
       ├── contribuicao.css
       ├── detalhescamp.css
       ├── index.css
       ├── novacampanha.css
       ├── style-rec.css
       ├── style-recb.css
       ├── style.css
   │   └── styleB.css
   ├── scripts/
       ├── BuscaCampanha.js
       ├── Contribuições.js
       ├── EscolhaCM.js
       ├── modal-criacao.js
       ├── modal.js
   │   └── script.js
   └── imagens/
       ├── Analytics-rafiki.svg
       ├── Data extraction-amico.svg
       ├── Destination-rafiki.svg
       ├── Liferay_Logo_No_Reg_Full_Color-Digital.png
       ├── Liferay_Logo_No_Reg_White_Only-Digital.png
       ├── Logo_Branco.webp
       ├── favicon.ico
       ├── fundoTexto.jpg
       ├── image.png
       ├── liferay.png
       ├── liferay_nome.jpg
       ├── liferay_nome.png
       ├── montanha.jpg
       ├── protecting-the-environment-animate.svg
       └── vermelho.png

   ```

3. **Configure o Servidor Web Local (Opcional)**

   Para testar localmente antes de implantar, você pode usar um servidor web simples. Se você tiver Python instalado, execute o seguinte comando a partir da pasta **release_beta.V3**:

   ```bash
   cd release_beta.V3
   python -m http.server 8000
   ```

   Abra um navegador web e navegue até [http://localhost:8000](http://localhost:8000) para acessar o site.

4. **Configure o Servidor Web de Produção**

   - **Opção A: Usando um Serviço de Hospedagem**

     - **GitHub Pages**:
       1. Crie um repositório no [GitHub](https://github.com/) e envie o conteúdo da pasta **release_beta.V3** para o repositório.
       2. No GitHub, vá para a página do repositório, clique em "Settings" (Configurações).
       3. Role até a seção "GitHub Pages".
       4. Em "Source" (Fonte), selecione **main** ou **master** e a pasta root (raiz).
       5. Salve as alterações. Seu site estará disponível em `https://<seu-usuario>.github.io/<nome-do-repositorio>`.

     - **Vercel**:
       1. Crie uma conta no [Vercel](https://vercel.com/signup).
       2. Clique em "New Project".
       3. Conecte-se ao seu repositório GitHub e selecione o repositório que contém o seu projeto.
       4. Configure as opções de implantação. Se Vercel não detectar automaticamente a pasta **release_beta.V3** como o diretório raiz, aponte manualmente na opção "Root Directory".
       5. Clique em "Deploy". Seu site estará disponível em uma URL fornecida pelo Vercel.

   - **Opção B: Usando um Servidor Web (Apache/Nginx)**

     Faça upload do conteúdo da pasta **release_beta.V3** para o diretório raiz do seu servidor web.

     - **Para Apache**:
       - Coloque os arquivos em `/var/www/html/release_beta.V3` (ou o diretório configurado).

     - **Para Nginx**:
       - Coloque os arquivos em `/usr/share/nginx/html/release_beta.V3` (ou o diretório configurado).
       - Configure o servidor web para servir o conteúdo da pasta **release_beta.V3** como o diretório raiz.

5. **Verifique a Implantação**

   Abra um navegador web e navegue até o endereço do seu servidor web para verificar se o site está funcionando corretamente.
   Uma versão já online pode ser visitada no [link](https://squad20-unit.vercel.app/) , utilize colaborador@gmail.com e membro@gmail.com para acesso, senha em branco para ambos.

Rise_Up: Squad20-Unit.

Obs: Esse fork foi modificado pelo Membro do Squad20 'Antonio Macena' para fins de Ajustes no caminho dos Diretorios.

Recife, Junho de 2024.
