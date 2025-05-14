const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const contacts = prisma.contacts

module.exports = { contacts }