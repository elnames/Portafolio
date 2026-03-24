import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body: ContactPayload = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Todos los campos son requeridos.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email inválido.' },
        { status: 400 }
      )
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'El mensaje es demasiado corto.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'NMS | Javier <contacto@nmsdev.tech>',
      to: 'javier.jorquera@nmsdev.tech',
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e7eb; padding: 32px; border-radius: 12px; border: 1px solid #1f2937;">
          <div style="margin-bottom: 24px;">
            <span style="font-family: monospace; font-weight: 700; font-size: 20px; background: linear-gradient(to right, #60a5fa, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">NMS Tech Group</span>
            <p style="color: #6b7280; margin: 4px 0 0; font-size: 13px;">Formulario de contacto — nmsdev.tech</p>
          </div>

          <hr style="border: none; border-top: 1px solid #1f2937; margin-bottom: 24px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 80px;">Nombre</td>
              <td style="padding: 8px 0; color: #f9fafb; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #1f2937; margin: 20px 0;" />

          <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Mensaje</p>
          <p style="color: #e5e7eb; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>

          <hr style="border: none; border-top: 1px solid #1f2937; margin: 24px 0 16px;" />
          <p style="color: #374151; font-size: 12px; margin: 0;">${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })} · nmsdev.tech</p>
        </div>
      `,
    })

    if (error) {
      console.error('[Contact] Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'No se pudo enviar el mensaje. Intenta de nuevo.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact] Unexpected error:', error)
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}
