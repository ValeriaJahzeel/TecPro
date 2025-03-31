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

// Types definitions
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

// Step components
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
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <p className="text-base mb-6 text-gray-700">
        Por favor cargue su diseño 3D en formato .STL .OBJ o .STEP, en caso de no contar con un diseño suba la imagen de 
        referencia con medidas (largo x alto x ancho) en formato PDF.
      </p>
      
      {/* Área de carga de archivos */}
      <div 
        className="border-2 border-dashed border-gray-300 rounded-lg p-10 mb-6 flex flex-col items-center justify-center transition-all hover:border-blue-400 hover:bg-blue-50"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <FiUpload className="text-azul-medio text-5xl mb-4" />
        <p className="text-lg mb-2 font-medium">Arrastrar y soltar archivo</p>
        <p className="text-sm text-gray-500 mb-4">o</p>
        <button 
          className="bg-azul-medio hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
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
        <p className="text-gray-500 text-sm mt-4">.STL .OBJ .STEP o .PDF</p>
      </div>
      
      {/* Lista de archivos cargados */}
      {uploadedFiles.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4 text-azul-medio">Archivos cargados</h3>
          <div className="max-h-60 overflow-y-auto">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-3 border-b rounded-md transition-colors">
                <div className="flex items-center">
                  <FiFile className="mr-2 text-azul-medio" />
                  <span className="text-gray-700">{file.name}</span>
                </div>
                <button 
                  onClick={() => removeFile(file.id)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
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
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-azul-medio">Servicio(s) que requiere:</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {/* Servicio de Impresión 3D */}
        <div 
          className={`border rounded-lg p-6 flex items-center cursor-pointer transition-all duration-200 hover:shadow-md ${formData.services.includes('impresion3d') ? 'border-azul-medio bg-blue-100' : 'border-gray-300'}`}
          onClick={() => handleServiceChange('impresion3d')}
        >
          <div className="flex items-center justify-center w-12 h-12 mr-3 rounded-full">
            <FiPrinter className={`w-6 h-6 ${formData.services.includes('impresion3d') ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>
          <span className="font-medium">Impresión 3D</span>
        </div>
        
        {/* Servicio de Diseño 3D */}
        <div 
          className={`border rounded-lg p-6 flex items-center cursor-pointer transition-all duration-200 hover:shadow-md ${formData.services.includes('diseno3d') ? 'border-azul-medio bg-blue-100' : 'border-gray-300'}`}
          onClick={() => handleServiceChange('diseno3d')}
        >
          <div className="flex items-center justify-center w-12 h-12 mr-3 rounded-full">
            <FiEdit className={`w-6 h-6 ${formData.services.includes('diseno3d') ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>
          <span className="font-medium">Diseño 3D</span>
        </div>
        
        {/* Servicio de Escaneo de objetos */}
        <div 
          className={`border rounded-lg p-6 flex items-center cursor-pointer transition-all duration-200 hover:shadow-md ${formData.services.includes('escaneo') ? 'border-azul-medio bg-blue-100' : 'border-gray-300'}`}
          onClick={() => handleServiceChange('escaneo')}
        >
          <div className="flex items-center justify-center w-12 h-12 mr-3 rounded-full">
            <FiBox className={`w-6 h-6 ${formData.services.includes('escaneo') ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>
          <span className="font-medium">Escaneo de objetos</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Selección de Material */}
        <div>
          <label className="block text-azul-medio font-medium mb-2">Material</label>
          <select 
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
          <label className="block text-gray-700 font-medium mb-2">Calidad</label>
          <select 
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
          <label className="block text-gray-700 font-medium mb-2">Nivel de resistencia</label>
          <select 
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <p className="text-lg mb-8 text-gray-700">
        Necesitamos de tu información para mandarte tu cotización, por favor llena los siguientes campos:
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
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Ej. Maria Sanchez Rodriguez"
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
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Ej. 5512345678"
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
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Ej. correo@ejemplo.com"
          />
        </div>
        
        {/* Campo Información adicional */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            ¿Tienes alguna duda o especificación adicional? Escríbela (opcional)
          </label>
          <textarea 
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={5}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Escribe tus dudas o especificaciones adicionales"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const ConfirmationScreen = () => {
  return (
    <div className="text-center py-10 bg-white rounded-lg p-8 shadow-lg">
      <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
        <FiCheck className="text-white text-3xl" />
      </div>
      
      <h2 className="text-2xl font-bold mb-3 text-azul-medio">
        ¡Listo! Se ha enviado tu solicitud de cotización
      </h2>
      
      <p className="text-lg mb-8 text-azul-medio">
        En breve te contactaremos al teléfono y/o correo que proporcionaste.
      </p>
      
      <button 
        className="mt-6 bg-azul-medio hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
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
    { title: "Carga de archivo", description: "Sube tus archivos" },
    { title: "Detalles", description: "Especifica servicios y materiales" },
    { title: "Contacto", description: "Información para contactarte" }
  ];

  return (
    <div className="flex items-center justify-between mb-12">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div className={`rounded-full w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 ${
              currentStep > index + 1 
                ? 'bg-green-700 border-green-700 text-white' 
                : currentStep === index + 1 
                  ? 'bg-azul-medio border-azul-medio text-white' 
                  : 'bg-white border-gray-300 text-gray-400'
            }`}>
              {currentStep > index + 1 
                ? <FiCheck className="text-white text-xl" /> 
                : index + 1}
            </div>
            <div className="text-center mt-2">
              <div className={`font-semibold ${currentStep === index + 1 ? 'text-blue-600' : 'text-gray-700'}`}>{step.title}</div>
              <div className="text-sm text-gray-500">{step.description}</div>
            </div>
          </div>
          
          {index < totalSteps - 1 && (
            <div className={`flex-1 h-1 mx-4 rounded-full ${
              currentStep > index + 1 ? 'bg-green-700' : 'bg-gray-300'
            }`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Main component
const QuoteForm = () => {
  // Estado para manejar el paso actual y los datos del formulario
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [formData, setFormData] = useState<FormData>({
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
  const handleSubmit = () => {
    if (!validateForm()) return;
    
    // Aquí iría la lógica para enviar los datos al backend
    console.log("Datos del formulario:", formData);
    console.log("Archivos:", uploadedFiles);
    
    // Simular envío exitoso
    setIsSubmitted(true);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-azul-oscuro">Cotiza tu modelo 3D</h1>
        
        {/* Indicador de pasos */}
        {!isSubmitted && <StepIndicator currentStep={currentStep} totalSteps={3} />}
        
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
          <div className="flex justify-between mt-10">
            {currentStep > 1 ? (
              <button 
                className="flex items-center px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 transition-colors"
                onClick={goToPreviousStep}
              >
                <FiArrowLeft className="mr-2" /> Anterior
              </button>
            ) : (
              <div></div> /* Espacio vacío para mantener el layout */
            )}
            
            {currentStep < 3 ? (
              <button 
                className={`flex items-center px-6 py-3 rounded-lg text-white transition-colors ${validateForm() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
                onClick={goToNextStep}
                disabled={!validateForm()}
              >
                Siguiente <FiArrowRight className="ml-2" />
              </button>
            ) : (
              <button 
                className={`flex items-center px-6 py-3 rounded-lg text-white transition-colors ${validateForm() ? 'bg-green-700 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                onClick={handleSubmit}
                disabled={!validateForm()}
              >
                Finalizar <FiCheck className="ml-2" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;