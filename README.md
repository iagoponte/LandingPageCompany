# LandingPageCompany

Landing page desenvolvida para simular um projeto real de uma empresa fictícia.  
O sistema é dividido em **frontend** e **backend**, cada um em sua respectiva pasta.

## 🚀 Tecnologias

### Frontend
- [ReactJS](https://react.dev/)  
- [TailwindCSS](https://tailwindcss.com/)  

### Backend
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Prisma ORM](https://www.prisma.io/)  
- [PostgreSQL](https://www.postgresql.org/)  

---

## 📂 Estrutura do projeto
LandingPageCompany/
│
├── frontend/ # Aplicação React + Tailwind
│ ├── src/ # Código-fonte do frontend
│ └── ...
│
├── backend/ # API Node.js com Express + Prisma
│ ├── prisma/ # Schemas e migrations do Prisma
│ ├── src/ # Código-fonte do backend
│ └── ...
│
└── README.md


---

## ⚙️ Como rodar o projeto

### 🔹 Pré-requisitos
- [Node.js](https://nodejs.org/) >= 18
- [PostgreSQL](https://www.postgresql.org/) (para o backend)

---

### 🔹 Clonar o repositório
```bash
git clone https://github.com/iagoponte/LandingPageCompany.git
cd LandingPageCompany
```

## Backend:
```bash
cd backend
npm i
configurar banco de dados, .env: DATABASE_URL="postgresql://user:password@localhost:5432/landingpage"
npx prisma migrate dev
npm run dev
```

## Frontend:
```bash
cd frontend
npm i
npm run dev
```
