require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS hanya benarkan domain resume anda
const allowedOrigins = [process.env.ALLOWED_ORIGIN || 'http://localhost:3000'];
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy: Not allowed by CORS'), false);
    }
    return callback(null, true);
  }
}));

app.use(helmet());
app.use(express.json());

// Rate limiting (max 5 request/minit per IP)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: 'Terlalu banyak permintaan, sila cuba sebentar lagi.'
});
app.use('/api/contact', limiter);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API Contact Form
app.post('/api/contact', async (req, res) => {
  const { nama, email, mesej } = req.body;
  // Validasi asas
  if (!nama || !email || !mesej) {
    return res.status(400).json({ error: 'Semua medan wajib diisi.' });
  }
  if (!/^[\w\s'.-]{2,50}$/.test(nama)) {
    return res.status(400).json({ error: 'Nama tidak sah.' });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Email tidak sah.' });
  }
  if (mesej.length < 5 || mesej.length > 2000) {
    return res.status(400).json({ error: 'Mesej terlalu pendek/panjang.' });
  }
  // Hantar email
  try {
    await transporter.sendMail({
      from: `Resume Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Mesej Resume: ${nama}`,
      text: `Nama: ${nama}\nEmail: ${email}\n\n${mesej}`
    });
    res.json({ success: true, message: 'Mesej berjaya dihantar!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ralat pelayan. Sila cuba lagi.' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
