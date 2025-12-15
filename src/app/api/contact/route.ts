import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, visaType, targetCountry, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !visaType || !targetCountry) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter - using Gmail SMTP
        // For production, use environment variables for credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'globalconsultingusa24@gmail.com',
                pass: process.env.EMAIL_PASS || '', // App password required for Gmail
            },
        });

        // Email content to send to the business
        const mailOptions = {
            from: `"Global Consulting Website" <${process.env.EMAIL_USER || 'globalconsultingusa24@gmail.com'}>`,
            to: 'globalconsultingusa24@gmail.com',
            replyTo: email,
            subject: `New Consultation Request - ${visaType}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%); padding: 20px; text-align: center;">
                        <h1 style="color: white; margin: 0;">New Consultation Request</h1>
                    </div>
                    
                    <div style="padding: 30px; background: #f9f9f9;">
                        <h2 style="color: #3B5998; margin-top: 0;">Client Information</h2>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 40%;">Full Name:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                                    <a href="mailto:${email}" style="color: #3B5998;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone/WhatsApp:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                                    <a href="tel:${phone}" style="color: #3B5998;">${phone}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Visa Type:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${visaType}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Target Country:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${targetCountry}</td>
                            </tr>
                        </table>
                        
                        ${message ? `
                        <h3 style="color: #3B5998; margin-top: 25px;">Message:</h3>
                        <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3B5998;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                        ` : ''}
                        
                        <div style="margin-top: 30px; padding: 15px; background: #e8f5e9; border-radius: 8px;">
                            <p style="margin: 0; color: #2e7d32;">
                                <strong>Quick Actions:</strong><br>
                                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="color: #25D366; margin-right: 15px;">WhatsApp Client</a>
                                <a href="mailto:${email}" style="color: #3B5998;">Reply via Email</a>
                            </p>
                        </div>
                    </div>
                    
                    <div style="background: #3B5998; padding: 15px; text-align: center;">
                        <p style="color: white; margin: 0; font-size: 12px;">
                            Global Consulting & Visa Hub - Website Inquiry
                        </p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Optional: Send confirmation email to client
        const clientMailOptions = {
            from: `"Global Consulting & Visa Hub" <${process.env.EMAIL_USER || 'globalconsultingusa24@gmail.com'}>`,
            to: email,
            subject: 'Thank you for contacting Global Consulting & Visa Hub',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%); padding: 20px; text-align: center;">
                        <h1 style="color: white; margin: 0;">Thank You!</h1>
                    </div>
                    
                    <div style="padding: 30px;">
                        <p>Dear ${name},</p>
                        
                        <p>Thank you for reaching out to Global Consulting & Visa Hub. We have received your consultation request for <strong>${visaType}</strong>.</p>
                        
                        <p>Our team will review your inquiry and get back to you within 24 hours.</p>
                        
                        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #3B5998; margin-top: 0;">Need Immediate Assistance?</h3>
                            <p style="margin-bottom: 10px;">
                                <strong>WhatsApp:</strong> 
                                <a href="https://wa.me/19367884084" style="color: #25D366;">+1 936 788 4084</a>
                            </p>
                            <p style="margin-bottom: 0;">
                                <strong>Email:</strong> 
                                <a href="mailto:globalconsultingusa24@gmail.com" style="color: #3B5998;">globalconsultingusa24@gmail.com</a>
                            </p>
                        </div>
                        
                        <p>Best regards,<br><strong>Global Consulting & Visa Hub Team</strong></p>
                    </div>
                    
                    <div style="background: #3B5998; padding: 15px; text-align: center;">
                        <p style="color: white; margin: 0; font-size: 12px;">
                            Your Trusted Partner for US & Schengen Visa Success
                        </p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(clientMailOptions);

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
