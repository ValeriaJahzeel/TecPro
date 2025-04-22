import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Obtener los datos del formulario con archivos incluidos
    const formData = await request.formData();
    
    // Extraer datos del formulario
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const services = formData.get('services') as string;
    const material = formData.get('material') as string;
    const quality = formData.get('quality') as string;
    const resistanceLevel = formData.get('resistanceLevel') as string;
    const additionalInfo = formData.get('additionalInfo') as string;
    
    // Obtener los archivos adjuntos
    const attachments = [];
    for (let i = 0; ; i++) {
      const file = formData.get(`file${i}`) as File;
      if (!file) break;
      
      // Convertir el archivo a buffer para el adjunto
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type
      });
    }

    // Configurar el transporte de correo electrónico
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes cambiarlo según tu proveedor de correo
      auth: {
        user: process.env.EMAIL_USER, // Configurar en .env
        pass: process.env.EMAIL_PASS  // Configurar en .env
      }
    });

    // Crear el HTML del correo electrónico
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #0056b3; text-align: center; margin-bottom: 20px;">Nueva solicitud de cotización</h2>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #0056b3;">
          <h3 style="color: #333; margin-top: 0;">Información del cliente</h3>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Correo:</strong> ${email}</p>
        </div>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #0056b3;">
          <h3 style="color: #333; margin-top: 0;">Detalles del servicio</h3>
          <p><strong>Servicios solicitados:</strong> ${services}</p>
          <p><strong>Material:</strong> ${material}</p>
          <p><strong>Calidad:</strong> ${quality}</p>
          <p><strong>Resistencia:</strong> ${resistanceLevel}</p>
        </div>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #0056b3;">
          <h3 style="color: #333; margin-top: 0;">Archivos adjuntos</h3>
          <p>${attachments.length > 0 
              ? `Se han adjuntado ${attachments.length} archivo(s): ${attachments.map(a => a.filename).join(', ')}` 
              : 'No se adjuntaron archivos'}</p>
        </div>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #0056b3;">
          <h3 style="color: #333; margin-top: 0;">Información adicional</h3>
          <p>${additionalInfo}</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
          <p>Este correo ha sido generado automáticamente desde el formulario de cotización del sitio web.</p>
        </div>
      </div>
    `;

    // Opciones del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tecprocdmx@gmail.com', // Correo del administrador
      subject: `Nueva solicitud de cotización de ${name}`,
      html: htmlContent,
      replyTo: email, // Para que puedan responder directamente al cliente
      attachments: attachments
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    // Responder con éxito
    return NextResponse.json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    
    // Responder con error
    return NextResponse.json(
      { success: false, message: 'Error al enviar el correo', error: (error as Error).message },
      { status: 500 }
    );
  }
}