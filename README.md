# 🚀 Landing Page Empresa

Landing page desenvolvida para fins comerciais, com o objetivo de promover os serviços da Empresa e captar potenciais clientes por meio de um formulário de contato inteligente.

## 🧱 Stack do Projeto

### Frontend
- [React](https://reactjs.org/) com [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deploy via [Netlify](https://www.netlify.com/)

### Backend
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- Banco de dados: PostgreSQL
- Deploy via [Render](https://render.com/)

---

## 📁 Estrutura do Projeto

```bash
.
├── backend/
│   ├── prisma/                 # Esquema do banco de dados Prisma
│   └── src/
│       ├── config/             # Configurações globais
│       ├── controllers/        # Lógica de controle da aplicação
│       ├── models/             # Modelos (caso aplicável)
│       └── routes/
│           └── contacts/       # Rotas para o formulário de contato

├── frontend/
│   ├── public/                 # Arquivos estáticos
│   └── src/
│       ├── assets/             # Imagens e ícones
│       ├── components/         # Componentes reutilizáveis
│       │   ├── Carousel/
│       │   ├── ContactUsForm/
│       │   ├── Form/
│       │   ├── HomePageForm/
│       │   ├── LgpdModal/
│       │   └── Modal/
│       ├── environments/       # Configurações por ambiente
│       ├── layouts/            # Layouts principais
│       │   ├── Footer/
│       │   ├── HeroSection/
│       │   └── Navbar/
│       ├── pages/              # Páginas do site
│       │   ├── ContactUs/
│       │   ├── Home/
│       │   └── Services/
│       ├── router/             # Definição de rotas do frontend
│       └── services/           # Integrações e serviços externos

└── README.md

## 📦 Instalação Local

### 🔧 Pré-requisitos

- Node.js v18+
- npm
- PostgreSQL
- Arquivo `.env` configurado com as variáveis de ambiente necessárias

---

### 🔄 Clone o repositório

```bash
git clone https://github.com/seu-usuario/landing-page-pulsares.git
cd landing-page-pulsares

### 🛠 Configuração do Backend

```bash
cd backend
npm install
cp .env.example .env    # configure DATABASE_URL com sua instância PostgreSQL
npx prisma generate
npx prisma migrate dev
npm run dev

### 🖼️ Configuração do Frontend

```bash
cd ../frontend
npm install
npm run dev

### ✅ Funcionalidades
- Formulário de contato com envio para API backend
- Consentimento LGPD obrigatório
- Campo “Outros” dinâmico e tratado
- Toasts de sucesso/erro com react-toastify
- Otimizações de carregamento (LCP, preload de imagens)
- Projeto responsivo
- Separação clara entre frontend e backend
- Uso de .env para variáveis sensíveis

### 🛠 Scripts
### backend
```bash
npm run dev       # Inicia o servidor Express
npm run build     # (Se aplicável)

### frontend
```bash
npm run dev       # Inicia o frontend com Vite
npm run build     # Build para produção
