// components/ModelUploader.jsx
import React, { useState, useRef } from 'react';
import { FiUpload, FiFile, FiTrash2 } from 'react-icons/fi';

const ModelUploader = () => {
  // Estado para manejar los archivos y el paso actual
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);
  
  // Función para manejar la carga de archivos
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newFiles = Array.from(files).map(file => ({
        name: file.name,
        file: file,
        id: Date.now() + Math.random().toString(36).substring(2)
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };
  
  // Función para eliminar un archivo
  const removeFile = (fileId) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
  };
  
  // Función para verificar el tipo de archivo
  const isValidFileType = (fileName) => {
    const validExtensions = ['.stl', '.obj', '.step', '.pdf'];
    const ext = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
    return validExtensions.includes(ext);
  };
  
  // Función para avanzar al siguiente paso
  const goToNextStep = () => {
    if (currentStep < 3 && uploadedFiles.length > 0) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Función para manejar el drop de archivos
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const newFiles = Array.from(files)
        .filter(file => isValidFileType(file.name))
        .map(file => ({
          name: file.name,
          file: file,
          id: Date.now() + Math.random().toString(36).substring(2)
        }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };
  
  // Previene el comportamiento por defecto de drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const submitFiles = async () => {
    if (uploadedFiles.length === 0) return;
    
    const formData = new FormData();
    
    uploadedFiles.forEach(fileObj => {
      formData.append('modelFiles', fileObj.file);
    });
    
    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Manejar éxito - puedes avanzar al siguiente paso
        goToNextStep();
      } else {
        // Manejar error
        console.error('Error al subir archivos:', data.message);
      }
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-10">Cotiza tu modelo</h1>
      
      {/* Indicador de pasos */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col items-center">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${currentStep >= 1 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            ●
          </div>
          <div className="text-center mt-2">
            <div className="font-semibold">Paso 1</div>
            <div className="text-sm">Cargar archivo</div>
          </div>
        </div>
        
        <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
        
        <div className="flex flex-col items-center">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${currentStep >= 2 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            ○
          </div>
          <div className="text-center mt-2">
            <div className="font-semibold">Paso 2</div>
            <div className="text-sm">Detalles del modelo</div>
          </div>
        </div>
        
        <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
        
        <div className="flex flex-col items-center">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${currentStep >= 3 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            ○
          </div>
          <div className="text-center mt-2">
            <div className="font-semibold">Paso 3</div>
            <div className="text-sm">Datos de contacto</div>
          </div>
        </div>
      </div>
      
      {/* Área principal según el paso actual */}
      {currentStep === 1 && (
        <div>
          <p className="text-base mb-6">
            Por favor cargue su diseño 3D en formato .STL .OBJ o .STEP, en caso de no contar con un diseño suba la imagen de 
            referencia con medidas (largo x alto x ancho) en formato PDF.
          </p>
          
          {/* Área de carga de archivos */}
          <div 
            className="border-2 border-dashed border-gray-300 rounded-md p-8 mb-6 flex flex-col items-center justify-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <FiUpload className="text-gray-400 text-5xl mb-4" />
            <p className="text-lg mb-2">Arrastrar y soltar archivo</p>
            <p className="text-sm text-gray-500 mb-4">o</p>
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md"
              onClick={() => fileInputRef.current.click()}
            >
              Cargar archivo
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
              accept=".stl,.obj,.step,.pdf"
              multiple
            />
            <p className="text-gray-500 text-sm mt-4">.STL .OBJ .STEP o .PDF</p>
          </div>
          
          {/* Lista de archivos cargados */}
          {uploadedFiles.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Archivos cargados</h3>
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-3 border-b">
                  <div className="flex items-center">
                    <FiFile className="mr-2" />
                    <span>{file.name}</span>
                  </div>
                  <button 
                    onClick={() => removeFile(file.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Botón de siguiente */}
      <div className="flex justify-end mt-8">
        <button 
        className={`px-6 py-2 rounded-full text-white ${uploadedFiles.length > 0 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
        onClick={submitFiles}
        disabled={uploadedFiles.length === 0}
        >
        Siguiente
        </button>
      </div>
    </div>
  );
};

export default ModelUploader;