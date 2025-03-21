// components/QuoteForm.jsx
"use client"
import React, { useState } from 'react';
import { FiUpload, FiFile, FiTrash2, FiCheck, FiPrinter, FiEdit, FiBox } from 'react-icons/fi';

const QuoteForm = () => {
  // Estado para manejar el paso actual y los datos del formulario
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    services: [],
    material: 'PLC (Ácido poliláctico)',
    quality: 'Baja',
    resistanceLevel: 'Baja',
    name: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Referencia para el input de archivo
  const fileInputRef = React.useRef(null);
  
  // Función para manejar la carga de archivos
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files).map(file => ({
        name: file.name,
        file: file,
        id: Date.now() + Math.random().toString(36).substring(2)
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };
  
  // Función para eliminar un archivo
  const removeFile = (fileId: string): void => {
    setUploadedFiles(uploadedFiles.filter((file: { id: string }) => file.id !== fileId));
  };
  
  // Función para verificar el tipo de archivo
  const isValidFileType = (fileName: string) => {
    const validExtensions = ['.stl', '.obj', '.step', '.pdf'];
    const ext = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
    return validExtensions.includes(ext);
  };
  
  // Función para manejar el drop de archivos
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
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
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  // Función para avanzar al siguiente paso
  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Función para volver al paso anterior
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Función para manejar cambios en los checkboxes de servicios
  const handleServiceChange = (service: string) => {
    if (formData.services.includes(service as never)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service as never]
      });
    }
  };
  
  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Aquí iría la lógica para enviar los datos al backend
    console.log("Datos del formulario:", formData);
    console.log("Archivos:", uploadedFiles);
    // Simular envío exitoso
    setIsSubmitted(true);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-10">Cotiza tu modelo</h1>
      
      {/* Indicador de pasos */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex flex-col items-center">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${currentStep > 1 ? 'bg-black text-white' : currentStep === 1 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {currentStep > 1 ? <FiCheck className="text-white" /> : "●"}
          </div>
          <div className="text-center mt-2">
            <div className="font-semibold">Paso 1</div>
            <div className="text-sm">Cargar archivo</div>
          </div>
        </div>
        
        <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
        
        <div className="flex flex-col items-center">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${currentStep > 2 ? 'bg-black text-white' : currentStep === 2 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {currentStep > 2 ? <FiCheck className="text-white" /> : currentStep === 2 ? "●" : "○"}
          </div>
          <div className="text-center mt-2">
            <div className="font-semibold">Paso 2</div>
            <div className="text-sm">Detalles del modelo</div>
          </div>
        </div>
        
        <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
        
        <div className="flex flex-col items-center">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${currentStep === 3 ? 'bg-black text-white' : 'bg-white text-black'}`}>
            {isSubmitted ? <FiCheck className="text-white" /> : currentStep === 3 ? "●" : "○"}
          </div>
          <div className="text-center mt-2">
            <div className="font-semibold">Paso 3</div>
            <div className="text-sm">Datos de contacto</div>
          </div>
        </div>
      </div>
      
      {/* Contenido según el paso actual */}
      {currentStep === 1 && !isSubmitted && (
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
      
      {/* Paso 2: Detalles del modelo */}
      {currentStep === 2 && !isSubmitted && (
        <div>
          <h2 className="text-xl font-semibold mb-6">Servicio(s) que requiere:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Servicio de Impresión 3D */}
            <div 
              className={`border rounded-md p-4 flex items-center cursor-pointer ${formData.services.includes('impresion3d') ? 'border-black bg-gray-50' : 'border-gray-300'}`}
              onClick={() => handleServiceChange('impresion3d')}
            >
              <div className="flex items-center justify-center w-12 h-12 mr-3">
                <FiPrinter className="w-8 h-8" />
              </div>
              <span className="font-medium">Impresion 3D</span>
            </div>
            
            {/* Servicio de Diseño 3D */}
            <div 
              className={`border rounded-md p-4 flex items-center cursor-pointer ${formData.services.includes('diseno3d') ? 'border-black bg-gray-50' : 'border-gray-300'}`}
              onClick={() => handleServiceChange('diseno3d')}
            >
              <div className="flex items-center justify-center w-12 h-12 mr-3">
                <FiEdit className="w-8 h-8" />
              </div>
              <span className="font-medium">Diseño 3D</span>
            </div>
            
            {/* Servicio de Escaneo de objetos */}
            <div 
              className={`border rounded-md p-4 flex items-center cursor-pointer ${formData.services.includes('escaneo') ? 'border-black bg-gray-50' : 'border-gray-300'}`}
              onClick={() => handleServiceChange('escaneo')}
            >
              <div className="flex items-center justify-center w-12 h-12 mr-3">
                <FiBox className="w-8 h-8" />
              </div>
              <span className="font-medium">Escaneo de objetos</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Selección de Material */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Material</label>
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="material"
                value={formData.material}
                onChange={handleInputChange}
              >
                <option value="PLC (Ácido poliláctico)">PLC (Ácido poliláctico)</option>
                <option value="ABS">ABS</option>
                <option value="PETG">PETG</option>
                <option value="TPU">TPU (Flexible)</option>
                <option value="Nylon">Nylon</option>
              </select>
            </div>
            
            {/* Selección de Calidad */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Calidad</label>
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="quality"
                value={formData.quality}
                onChange={handleInputChange}
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
                <option value="Ultra">Ultra</option>
              </select>
            </div>
            
            {/* Selección de Nivel de resistencia */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nivel de resistencia</label>
              <select 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="resistanceLevel"
                value={formData.resistanceLevel}
                onChange={handleInputChange}
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Paso 3: Datos de contacto */}
      {currentStep === 3 && !isSubmitted && (
        <div>
          <p className="text-lg mb-8">
            Necesitamos de tu información para mandarte tu cotización, por favor llena los siguientes campos
          </p>
          
          <div className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nombre</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Campo Teléfono */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Campo Correo electrónico */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Campo Información adicional */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                ¿Tienes alguna duda o especificacion adicional? Escribela (opcional)
              </label>
              <textarea 
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="5"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
        </div>
      )}
      
      {/* Página de confirmación */}
      {isSubmitted && (
        <div className="text-center py-10">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheck className="text-white text-3xl" />
          </div>
          
          <h2 className="text-2xl font-bold mb-3">
            Listo, se ha mandado tu solicitud de cotización
          </h2>
          
          <p className="text-lg mb-8">
            En breve te contactaremos al teléfono y/o correo que proporcionaste
          </p>
        </div>
      )}
      
      {/* Botones de navegación */}
      {!isSubmitted && (
        <div className="flex justify-between mt-10">
          {currentStep > 1 ? (
            <button 
              className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
              onClick={goToPreviousStep}
            >
              Anterior
            </button>
          ) : (
            <div></div> /* Espacio vacío para mantener el layout */
          )}
          
          {currentStep < 3 ? (
            <button 
              className={`px-6 py-2 rounded-full text-white ${currentStep === 1 && uploadedFiles.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
              onClick={goToNextStep}
              disabled={currentStep === 1 && uploadedFiles.length === 0}
            >
              Siguiente
            </button>
          ) : (
            <button 
              className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
              onClick={handleSubmit}
            >
              Finalizar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuoteForm;