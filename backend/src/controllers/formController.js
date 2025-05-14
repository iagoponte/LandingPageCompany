const { contacts } = require("../models/formModels");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createNewContact = async (req, res) => {
  const { name, email, phone, position, windTurbineCount, technicalVisitAvailability } = req.body;

  try {
    const newForm = await contacts.create({
      data: {
        name,
        email,
        phone,
        position,
        windTurbineCount,
        technicalVisitAvailability,
      },
    });

    res.status(200).json(newForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
