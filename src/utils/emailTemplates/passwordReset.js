/* eslint-disable no-new-wrappers */
/**
 * Template for reset password email
 * @param {string} url URL for account password reset
 * @return {string} account password reset template with URL
 */
export default (url) => `<!DOCTYPE html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Nunito:300,400&display=swap" rel="stylesheet">
    </head>
    <body>
      <table style="width:750px;height:1035px;background: #F5F5F5 0% 0% no-repeat padding-box;opacity: 1; color: #354052;">
        <tr style="height: 50px;">
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td style="width:700px; height:687px;background: #FFFFFF 0% 0% no-repeat padding-box;opacity: 1;">
            <table>
              <tr>
                <td style="padding-left: 40px; padding-bottom: 40px;"><img src="https://media.licdn.com/dms/image/C4D0BAQH4dq42Rbp22g/company-logo_200_200/0?e=2159024400&v=beta&t=Ob2j3RTuh96eW6JadanqyP8x3QnjBfK3Q1-4U_hqiEo" alt="Sterling trading platform logo" width="60"></td>
              </tr>
              <tr>
                <td style="font-size: 1rem; padding-top: 60px; font-family: 'Montserrat', sans-serif;"> You requested to reset your password <span style="font-weight: bold;">SABEX NG</span>. The password reset link expires in 10 minutes. Please click the button below to complete your password reset. </td>
                <td></td>
              </tr>
              <tr>
                <td style="padding-left: 40px; padding-top: 10px; font-size: 18px; font-weight: lighter; font-family: 'Montserrat', sans-serif; text-align: left;"> </td>
              </tr>
              <tr>
                <td style="text-align: center; padding-top: 30px; width: 100%">
                  <a href="${url}" target="_blank"><button style="color: #ffffff !important; background-color: #000000; text-align: center; padding: 17px 70px; letter-spacing: 1.2px; font-size: 12px; border: 0; border-radius: 5px;">CHANGE YOUR PASSWORD</button></a>
                </td>
              </tr>
            </table>
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <table style="text-align: center; width: 100%;">
              <tr>
                <td style="font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 30px; letter-spacing: 0;">We'd love to hear from you!</td>
              </tr>
              <tr>
                <td style="font-size: 14px; font-family: 'Montserrat', sans-serif;">
                  Help us improve by sharing your feedback in this short survey.
                </td>
              </tr>
              <tr>
                <td style="padding-top: 30px;"><span style="padding: 7px;font-size: 25px;"><img src="https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/ff70d617-4f02-4950-b1ae-c49ce80dad9f.png" alt="Facebook logo"></span> <span style="padding: 7px; font-size: 25px;"><img src="https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/999fbe47-fd4b-4679-9eff-9cc0301cd523.png" alt="Twitter logo"></span> <span style="padding: 7px; font-size: 25px;"><img src="https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/a8e97e7c-436c-47a0-b28d-53ec9f2922a1.png" alt="Instagram logo"></span></td>
              </tr>
              <tr>
                <td style="font-family: 'Montserrat', sans-serif;font-size: 16px; padding-top: 20px;">
                  Copyright &copy; 2020 <span style="font-weight: bold !important;">Sterling Trading Platform.</span> All Rights Reserved.
                </td>
              </tr>
              <tr>
                <td style="font-weight: bold; font-size: 16px;">
                </td>
              </tr>
            </table>
          </td>
          <td></td>
        </tr>
      </table>
    </body>
   </html>`;
