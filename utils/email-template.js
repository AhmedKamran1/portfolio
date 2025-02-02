export const HTML_TEMPLATE = (name, email, message) => {
  return `
    <!DOCTYPE html>
<html>
  <head>
    <title>Dining Plan Invitation</title>
    <style>
      body {
        background-color: #f6f6f6;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      .container {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .header {
        margin-bottom: 20px;
      }
      .logo {
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }
      .title {
        font-size: 24px;
        margin-top: 10px;
      }
      .content {
        font-weight: normal;
        text-align: center;
        margin-bottom: 20px;
      }
      .footer {
        margin-top: 30px;
        color: #333333;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1 class="title">A Message from Portfolio Website</h1>
      </div>

      <div class="content">
        <h2>
          You've recieved a message from <b>${name}</b>, email address is <b>${email}</b>.
        </h2>
      </div>


      <div class="content">
        <h3> <b>Message:</b> ${message}</h3>
      </div>

      <hr />

      <div class="footer">
      </div>
    </div>
  </body>
</html>
    `;
};
