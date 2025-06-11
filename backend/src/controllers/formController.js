const { contacts } = require("../models/formModels");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createNewContact = async (req, res) => {
  const { name, email, phone, position, businessType, technicalVisitAvailability, lgpdConsent } = req.body;

  try {
    if(!name || !email){
      return res.status(400).json({ error: "Name e email são obrigatórios." });
    }

    const isExistingEmail = await contacts.findUnique({
      where: { email },
    });

    if (isExistingEmail) {
      return res.status(400).json({ error: "Email já cadastrado." });
    }

    const newForm = await contacts.create({
      data: {
        name,
        email,
        phone:  phone || null,
        position: position || null,
        businessType: businessType || null,
        technicalVisitAvailability: technicalVisitAvailability || null,
        lgpdConsent: lgpdConsent || false
      },
    });

    res.status(200).json(newForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getListContacts = async (req, res) => {
  try {
    const contactsList = await contacts.findMany();
    res.status(200).json(contactsList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};