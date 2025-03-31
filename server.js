// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de multer para almacenar los archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Asegúrate de que esta carpeta exista
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Renombra para evitar conflictos
  }
});

// Filtro para validar los tipos de archivo
const fileFilter = (req, file, cb) => {
  const validExtensions = ['.stl', '.obj', '.step', '.pdf'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (validExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Tipo de archivo no permitido'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024  // Límite de 10MB por archivo
  }
});

// Endpoint para subir archivos
app.post('/api/upload', upload.array('modelFiles'), (req, res) => {
  try {
    // Los archivos se guardan automáticamente gracias a multer
    const fileDetails = req.files.map(file => ({
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      path: file.path
    }));
    
    res.status(200).json({ 
      success: true, 
      message: 'Archivos subidos correctamente',
      files: fileDetails
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error al subir los archivos',
      error: error.message
    });
  }
});

// Servir la aplicación React
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});