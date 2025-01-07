
![Captura de tela de 2025-01-07 20-22-33](https://github.com/user-attachments/assets/7fc15ed7-9b52-4917-b7ef-1ba56acb744e)

# 🛡️ Projeto de Autenticação com Strapi e Next.js 15

## 📚 Visão Geral
Este projeto implementa um sistema de autenticação utilizando **Strapi** como backend headless CMS e **Next.js 15** como frontend. A aplicação permite registro, login, logout e gerenciamento de sessão de usuários.

## 🚀 Tecnologias Utilizadas

- **Strapi** (Backend)
- **Next.js 15** (Frontend)
- **TypeScript**
- **TailwindCSS** (Estilização)
- **JWT** (Autenticação via Token)

## 🛠️ Funcionalidades

- Registro de novos usuários
- Autenticação e autorização com JWT
- Proteção de rotas no Next.js
- Persistência de sessão
- Logout seguro

## 📦 Estrutura do Projeto

```
📂 frontend (Next.js 15)
.editorconfig
.gitignore
.next/
package.json
public/
README.md
│   ├── src/
│   │   ├── actions/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── services/
│   │   ├── styles/
tailwind.config.ts
tsconfig.json
```

## ⚙️ Configuração backend

1. Crie um projeto Strapi:
   ```bash
   npx create-strapi-app@latest
   ```
   
2. Suba o servidor com o comando:
   ```bash
   npm run develop
   ```

## ⚙️ Configuração frontend

1. Clone o repositório frontend:
   ```bash
   git clone https://github.com/EvandroCalado/auth_strapi_template
   cd  auth_strapi_template
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Suba o servidor com o comando:
   ```bash
   npm run dev
   ```

## 🔑 Rotas

- **Home:** `/`
- **Sign In:** `/signin`
- **Sign Up:** `/signup`
- **Dashboard (rota protegida):** `/dashboard`


## 📝 Contribuição
Contribuições são bem-vindas! Abra uma issue ou envie um PR com melhorias.

## 📄 Licença
Este projeto está sob a licença MIT.

## 🤝 Contato
- **Autor:** Evandro Calado
- **Email:** [evandrocalado07@gmail.com](mailto:evandrocalado07@gmail.com)

---
Feito com ❤️ por Evandro Calado 🚀

