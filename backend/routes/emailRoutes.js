const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-email', (req, res) => {
    const { firstName, lastName, nationality, phoneNumber, email, age, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@example.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@example.com',
        to: 'recipient@example.com',
        subject: 'Contact Us Form Submission',
        html: `
            <h1>Contact Us Form Submission</h1>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

module.exports = router;
