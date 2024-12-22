
import emailjs from '@emailjs/browser';

export const WelcomeEmail = (email, displayName) => {
    var templateParams = {
        app_name: 'MockSkills',
        user_name: displayName,
        user_email: email,
        reply_to:"kmithalesh356@gmail.com",
        message: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to MockSkills</title>
            </head>
            <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px;">
                    <h1 style="color: #333; text-align: center;">Welcome to MockSkills, ${displayName}!</h1>
                    <p style="font-size: 18px; color: #555; text-align: center;">
                        We're excited to have you as part of our community! Here's a quick overview of what you can expect from us:
                    </p>
                    <ul style="text-align: left; margin: 0 auto; width: 60%; color: #555;">
                        <li>💻 Access to a wide variety of courses</li>
                        <li>🎓 Track your progress</li>
                        <li>📈 Improve your skills</li>
                    </ul>
                    <p style="font-size: 16px; color: #333; text-align: center;">Start learning now and unlock your potential!</p>
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="https://www.mockskills.com" style="background-color: #007BFF; color: white; text-decoration: none; padding: 15px 30px; border-radius: 5px; font-size: 18px;">
                            Start Learning
                        </a>
                    </div>
                    <p style="font-size: 14px; color: #777; margin-top: 20px; text-align: center;">
                        If you have any questions or need assistance, feel free to contact us at 
                        <a href="mailto:support@mockskills.com" style="color: #007BFF;">support@mockskills.com</a>.
                    </p>
                    <footer style="font-size: 12px; color: #888; text-align: center; margin-top: 40px;">
                        <p>&copy; 2024 MockSkills. All rights reserved.</p>
                    </footer>
                </div>
            </body>
            </html>`
    };

    emailjs.send('service_e4svl64', 'template_z8zoyix', templateParams, {
        publicKey: 'GUIeDN7aXeTVTDvqI',
    }).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        }
    );
};


