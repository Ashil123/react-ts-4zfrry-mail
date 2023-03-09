import * as React from 'react';
import './style.css';

function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'ashiljayaraj@gmail.com',
    Password: 'Ajay$@1908',
    To: 'anbusaranya04@gmail.com',
    From: 'ashiljayaraj@gmail.com',
    Subject: 'Sethu pooo',
    Body: 'naasama POoo',
  }).then((msg) => console.log('MSGG', msg));
  //         message => alert("mail sent successfully",message)
}
console.log('Nambu naaye ertyu');
export default function App() {
  return (
    <div>
      <input type="button" value="Send Email" onClick={sendEmail} />
    </div>
  );
}
