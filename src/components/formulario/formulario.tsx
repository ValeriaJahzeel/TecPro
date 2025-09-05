"use client"
import React, { useState, useRef } from 'react';
import { 
  FiUpload, 
  FiFile, 
  FiTrash2, 
  FiCheck, 
  FiPrinter, 
  FiEdit, 
  FiBox,
  FiArrowLeft,
  FiArrowRight
} from 'react-icons/fi';

type UploadedFile = {
  name: string;
  file: File;
  id: string;
};

type FormData = {
  services: string[];
  material: string;
  quality: string;
  resistanceLevel: string;
  name: string;
  phone: string;
  email: string;
  additionalInfo: string;
};

const FileUploadStep = ({ 
  uploadedFiles, 
  handleFileUpload, 
  handleDrop, 
  handleDragOver, 
  removeFile,
  fileInputRef
}: {
  uploadedFiles: UploadedFile[];
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  removeFile: (fileId: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-4 md:p-4 shadow-lg">
      <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-700">
        Por favor cargue su diseño 3D en formato .STL .OBJ o .STEP, en caso de no contar con un diseño suba la imagen de 
        referencia con medidas (largo x alto x ancho) en formato PDF.
      </p>
      
      {/* Área de carga de archivos */}
      <div 
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 md:p-10 mb-4 sm:mb-6 flex flex-col items-center justify-center transition-all hover:border-blue-400 hover:bg-blue-50"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <FiUpload className="text-azul-medio text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" />
        <p className="text-base sm:text-lg mb-1 sm:mb-2 font-medium text-center">Arrastrar y soltar archivo</p>
        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">o</p>
        <button 
          className="bg-azul-medio hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
          onClick={() => fileInputRef.current?.click()}
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
        <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">.STL .OBJ .STEP o .PDF</p>
      </div>
      
      {/* Lista de archivos cargados */}
      {uploadedFiles.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-azul-medio">Archivos cargados</h3>
          <div className="max-h-40 sm:max-h-60 overflow-y-auto">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-2 sm:p-3 border-b rounded-md transition-colors">
                <div className="flex items-center overflow-hidden">
                  <FiFile className="mr-2 text-azul-medio flex-shrink-0" />
                  <span className="text-gray-700 text-sm truncate">{file.name}</span>
                </div>
                <button 
                  onClick={() => removeFile(file.id)}
                  className="text-red-500 hover:text-red-700 p-1 sm:p-2 rounded-full hover:bg-red-50 transition-colors flex-shrink-0 ml-2"
                  aria-label="Eliminar archivo"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ModelDetailsStep = ({
  formData,
  handleServiceChange,
  handleInputChange
}: {
  formData: FormData;
  handleServiceChange: (service: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-azul-medio">Servicio(s) que requiere:</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-10">
        {/* Servicio de Impresión 3D */}
        <div 
          className={`border rounded-lg p-3 sm:p-6 flex items-center cursor-pointer transition-all duration-200 hover:shadow-md ${formData.services.includes('impresion3d') ? 'border-azul-medio bg-blue-100' : 'border-gray-300'}`}
          onClick={() => handleServiceChange('impresion3d')}
        >
          <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mr-2 sm:mr-3 rounded-full">
            <FiPrinter className={`w-4 h-4 sm:w-6 sm:h-6 ${formData.services.includes('impresion3d') ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>
          <span className="font-medium text-sm sm:text-base">Impresión 3D</span>
        </div>
        
        {/* Servicio de Diseño 3D */}
        <div 
          className={`border rounded-lg p-3 sm:p-6 flex items-center cursor-pointer transition-all duration-200 hover:shadow-md ${formData.services.includes('diseno3d') ? 'border-azul-medio bg-blue-100' : 'border-gray-300'}`}
          onClick={() => handleServiceChange('diseno3d')}
        >
          <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mr-2 sm:mr-3 rounded-full">
            <FiEdit className={`w-4 h-4 sm:w-6 sm:h-6 ${formData.services.includes('diseno3d') ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>
          <span className="font-medium text-sm sm:text-base">Diseño 3D</span>
        </div>
        
        {/* Servicio de Escaneo de objetos */}
        <div 
          className={`border rounded-lg p-3 sm:p-6 flex items-center cursor-pointer transition-all duration-200 hover:shadow-md ${formData.services.includes('escaneo') ? 'border-azul-medio bg-blue-100' : 'border-gray-300'}`}
          onClick={() => handleServiceChange('escaneo')}
        >
          <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mr-2 sm:mr-3 rounded-full">
            <FiBox className={`w-4 h-4 sm:w-6 sm:h-6 ${formData.services.includes('escaneo') ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>
          <span className="font-medium text-sm sm:text-base">Escaneo de objetos</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-10">
        {/* Selección de Material */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Material</label>
          <select 
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
            name="material"
            value={formData.material}
            onChange={handleInputChange}
          >
            <option value="PLA">PLA (Ácido Poliláctico)</option>
            <option value="PETG">PETG (Tereftalato de polietileno glicol)</option>
            <option value="Nylon">Nylon</option>
            <option value="TPU">TPU (Polímero termoplástico de ureano)</option>
            <option value="ASA">ASA (Acrilonitrilo Estireno Acrilato)</option>
            <option value="ABS">ABS (Acrilonitrilo Butadieno Estireno)</option>
            <option value="PC">Policarbonato </option>
          </select>
        </div>
        
        {/* Selección de Calidad */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Calidad</label>
          <select 
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
            name="quality"
            value={formData.quality}
            onChange={handleInputChange}
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        
        {/* Selección de Nivel de resistencia */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Nivel de resistencia</label>
          <select 
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
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
  );
};

const ContactDetailsStep = ({
  formData,
  handleInputChange
}: {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700">
        Necesitamos de tu información para mandarte tu cotización, por favor llena los siguientes campos:
      </p>
      
      <div className="space-y-4 sm:space-y-6">
        {/* Campo Nombre */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Nombre</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
            placeholder="Ej. Maria Sanchez Rodriguez"
          />
        </div>
        
        {/* Campo Teléfono */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Teléfono</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
            placeholder="Ej. 5512345678"
          />
        </div>
        
        {/* Campo Correo electrónico */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Correo electrónico</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
            placeholder="Ej. correo@ejemplo.com"
          />
        </div>
        
        {/* Campo Información adicional */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
            ¿Tienes alguna duda o especificación adicional? Escríbela (opcional)
          </label>
          <textarea 
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg py-2 sm:py-3 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
            placeholder="Escribe tus dudas o especificaciones adicionales"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const ConfirmationScreen = () => {
  return (
    <div className="text-center py-6 sm:py-10 bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <FiCheck className="text-white text-2xl sm:text-3xl" />
      </div>
      
      <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-azul-medio">
        ¡Listo! Se ha enviado tu solicitud de cotización
      </h2>
      
      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-azul-medio">
        En breve te contactaremos al teléfono y/o correo que proporcionaste.
      </p>
      
      <button 
        className="mt-4 sm:mt-6 bg-azul-medio hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        onClick={() => window.location.href = '/'}
      >
        Volver al inicio
      </button>
    </div>
  );
};

// Step indicator component
const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  const steps = [
    { title: "Archivo", description: "Sube tus archivos" },
    { title: "Detalles", description: "Especificaciones" },
    { title: "Contacto", description: "Información" }
  ];

  return (
    <div className="flex items-center justify-between mb-8 sm:mb-12">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div className={`rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center border-2 transition-all duration-300 ${
              currentStep > index + 1 
                ? 'bg-green-700 border-green-700 text-white' 
                : currentStep === index + 1 
                  ? 'bg-azul-medio border-azul-medio text-white' 
                  : 'bg-white border-gray-300 text-gray-400'
            }`}>
              {currentStep > index + 1 
                ? <FiCheck className="text-white text-base sm:text-xl" /> 
                : index + 1}
            </div>
            <div className="text-center mt-1 sm:mt-2">
              <div className={`font-semibold text-xs sm:text-sm ${currentStep === index + 1 ? 'text-blue-600' : 'text-gray-700'}`}>{step.title}</div>
              <div className="text-xs text-gray-500 hidden xs:block">{step.description}</div>
            </div>
          </div>
          
          {index < totalSteps - 1 && (
            <div className={`flex-1 h-0.5 sm:h-1 mx-1 sm:mx-4 rounded-full ${
              currentStep > index + 1 ? 'bg-green-700' : 'bg-gray-300'
            }`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Función para enviar el correo al administrador
const sendEmailToAdmin = async (formData: FormData, uploadedFiles: UploadedFile[]) => {
  try {
    // Formatear la información de los servicios seleccionados
    const servicesString = formData.services.map(service => {
      switch(service) {
        case 'impresion3d': return 'Impresión 3D';
        case 'diseno3d': return 'Diseño 3D';
        case 'escaneo': return 'Escaneo de objetos';
        default: return service;
      }
    }).join(', ');
    
    // Preparar los archivos para ser enviados
    const formDataToSend = new FormData();
    
    // Añadir datos del formulario
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('services', servicesString);
    formDataToSend.append('material', formData.material);
    formDataToSend.append('quality', formData.quality);
    formDataToSend.append('resistanceLevel', formData.resistanceLevel);
    formDataToSend.append('additionalInfo', formData.additionalInfo || 'No proporcionada');
    
    // Añadir archivos
    uploadedFiles.forEach((file, index) => {
      formDataToSend.append(`file${index}`, file.file);
    });
    
    // Enviar los datos y archivos a la API
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formDataToSend,
    });
    
    if (!response.ok) {
      throw new Error('Error al enviar el correo');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
};

// Main component
const QuoteForm = () => {
  // Estado para manejar el paso actual y los datos del formulario
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    material: 'PLA',
    quality: 'Media',
    resistanceLevel: 'Media',
    name: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Referencia para el input de archivo
  const fileInputRef = useRef<HTMLInputElement>(null);
  
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
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== fileId));
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
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Función para volver al paso anterior
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Función para manejar cambios en los checkboxes de servicios
  const handleServiceChange = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service]
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
  
  // Función para validar el formulario
  const validateForm = () => {
    if (currentStep === 1) {
      return uploadedFiles.length > 0;
    }
    
    if (currentStep === 2) {
      return formData.services.length > 0;
    }
    
    if (currentStep === 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        formData.name.trim() !== '' && 
        formData.phone.trim() !== '' && 
        emailRegex.test(formData.email)
      );
    }
    
    return true;
  };
  
  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Enviar el correo al administrador
      await sendEmailToAdmin(formData, uploadedFiles);
      
      // Si todo sale bien, mostrar la pantalla de confirmación
      setIsSubmitted(true);
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
      setError('Hubo un problema al enviar tu solicitud. Por favor, intenta de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="container mx-auto px-4 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-azul-oscuro">Cotiza tu modelo 3D</h1>
        
        {/* Indicador de pasos */}
        {!isSubmitted && <StepIndicator currentStep={currentStep} totalSteps={3} />}
        
        {/* Mensajes de error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {/* Contenido según el paso actual */}
        {currentStep === 1 && !isSubmitted && (
          <FileUploadStep 
            uploadedFiles={uploadedFiles}
            handleFileUpload={handleFileUpload}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            removeFile={removeFile}
            fileInputRef={fileInputRef as React.RefObject<HTMLInputElement>}
          />
        )}
        
        {/* Paso 2: Detalles del modelo */}
        {currentStep === 2 && !isSubmitted && (
          <ModelDetailsStep
            formData={formData}
            handleServiceChange={handleServiceChange}
            handleInputChange={handleInputChange}
          />
        )}
        
        {/* Paso 3: Datos de contacto */}
        {currentStep === 3 && !isSubmitted && (
          <ContactDetailsStep
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        
        {/* Página de confirmación */}
        {isSubmitted && <ConfirmationScreen />}
        
        {/* Botones de navegación */}
        {!isSubmitted && (
          <div className="flex justify-between mt-6 sm:mt-10">
            {currentStep > 1 ? (
              <button 
                className="flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 transition-colors text-sm sm:text-base"
                onClick={goToPreviousStep}
                disabled={isSubmitting}
              >
                <FiArrowLeft className="mr-1 sm:mr-2" /> <span className="hidden xs:inline">Anterior</span>
              </button>
            ) : (
              <div></div> /* Espacio vacío para mantener el layout */
            )}
            
            {currentStep < 3 ? (
              <button 
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white transition-colors text-sm sm:text-base ${validateForm() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
                onClick={goToNextStep}
                disabled={!validateForm() || isSubmitting}
              >
                <span className="hidden xs:inline">Siguiente</span> <FiArrowRight className="ml-1 sm:ml-2" />
              </button>
            ) : (
              <button 
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white transition-colors text-sm sm:text-base ${validateForm() ? 'bg-green-700 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                onClick={handleSubmit}
                disabled={!validateForm() || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="hidden xs:inline">Enviando...</span>
                  </>
                ) : (
                  <>
                    <span className="hidden xs:inline">Finalizar</span> <FiCheck className="ml-1 sm:ml-2" />
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


export default QuoteForm;