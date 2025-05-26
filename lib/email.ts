import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const sendConfirmationEmail = async (registrationData: any) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: registrationData.email,
    subject: 'ResGenXAI 2025 - Registration Confirmation',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmation - ResGenXAI 2025</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #E65100, #FF9800); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #fff; padding: 30px; border: 1px solid #ddd; }
          .footer { background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; }
          .info-box { background: #f0f8ff; padding: 15px; border-left: 4px solid #E65100; margin: 20px 0; }
          .button { background: #E65100; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .details-table th, .details-table td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
          .details-table th { background-color: #f8f9fa; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Registration Confirmed!</h1>
            <h2>ResGenXAI 2025</h2>
            <p>International Conference on Responsible, Generative and Explainable AI</p>
          </div>
          
          <div class="content">
            <h3>Dear ${registrationData.participantName},</h3>
            
            <p>Thank you for registering for <strong>ResGenXAI 2025</strong>! Your registration has been successfully confirmed and your payment has been processed.</p>
            
            <div class="info-box">
              <h4>📋 Registration Details</h4>
              <table class="details-table">
                <tr>
                  <th>Registration ID</th>
                  <td>${registrationData.registrationId}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>${registrationData.participantName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${registrationData.email}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>${registrationData.category}</td>
                </tr>
                <tr>
                  <th>IEEE Member</th>
                  <td>${registrationData.ieeeStatus === 'yes' ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <th>Paper ID</th>
                  <td>${registrationData.paperId}</td>
                </tr>
                <tr>
                  <th>Amount Paid</th>
                  <td><strong>${registrationData.calculatedFee} ${registrationData.currency}</strong></td>
                </tr>
                <tr>
                  <th>Payment ID</th>
                  <td>${registrationData.paymentId}</td>
                </tr>
              </table>
            </div>
            
            <div class="info-box">
              <h4>📅 Conference Information</h4>
              <table class="details-table">
                <tr>
                  <th>Dates</th>
                  <td>September 10-12, 2025</td>
                </tr>
                <tr>
                  <th>Venue</th>
                  <td>Centurion University of Technology and Management<br>Bhubaneswar, Odisha, India</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td><a href="https://www.resgenxai.co.in">www.resgenxai.co.in</a></td>
                </tr>
              </table>
            </div>
            
            <h4>📋 What's Next?</h4>
            <ul>
              <li><strong>Keep this email safe</strong> - You'll need it for conference check-in</li>
              <li><strong>Prepare your presentation</strong> - Details will be shared closer to the event</li>
              <li><strong>Book accommodation</strong> - We recommend booking early for better rates</li>
              <li><strong>Plan your travel</strong> - Check our website for travel information</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.resgenxai.co.in" class="button">Visit Conference Website</a>
            </div>
            
            <div class="info-box">
              <h4>📞 Contact Information</h4>
              <p>For any queries regarding your registration or the conference:</p>
              <ul>
                <li><strong>Email:</strong> saneev.das@cutm.ac.in</li>
                <li><strong>Phone:</strong> +91 7978029866</li>
                <li><strong>Website:</strong> <a href="https://www.resgenxai.co.in">www.resgenxai.co.in</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>ResGenXAI 2025 Organizing Committee</strong></p>
            <p>Centurion University of Technology and Management</p>
            <p>This is an automated email. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  return await transporter.sendMail(mailOptions)
}
