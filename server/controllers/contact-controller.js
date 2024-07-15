const Contact = require('../models/contact-model')

const contactForm = async (req, res) =>{
    try {
        await Contact.create(req.body)
        return res.status(200).json({message: "Message sent successfully"})
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = contactForm