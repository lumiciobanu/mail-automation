function myFunction(e) {
  var userEmail = e.values[1];
  var userName = e.values[2];
  var phoneNumber = e.values[3]
  var q1 = e.values[4];
  var q2 = e.values[5];
  var q3 = e.values[6];
  var q4 = e.values[7];
  var q5 = e.values[8];
  var q6 = e.values[9];
  var q7 = e.values[10];
  var q8 = e.values[11];
  var q9 = e.values[12];
  var q10 = e.values[13];
  var q11 = e.values[14];
  var q12 = e.values[15];
  var subject = 'Formular Preturi Christiana';
  var messageStart = 'Multumim pentru interesul acordat serviciilor Asociatiei Christiana!\nPretul pentru serviciile solicitate este ';
  var messageMiddle = 'Pentru informatii suplimentare va rugam sa ne scrieti la adresa site@cristiana.ro si va vom contacta in cel mai scurt timp posibil la numarul de telefon ';
  var messageEnd = '\nO zi buna!\nAsociatia Christiana';

  
  
  if  ((q1 === 'Da') && (q2 === 'Da' ) && (q3 === 'Da' ) && (q4 === 'Da' ) && (q5 === 'Da' ) && (q6 === 'Da' ) && (q7 === 'Da' ) && (q8 === 'Da' ) && (q9 === 'Da' ) && (q10 === 'Da' ) && (q11 === 'Da' ) && (q12 === 'Da' )) {
    message = messageStart + '2500 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
  }

  else if ((q1 === 'Da') && (q2 === 'Da' ) && (q3 === 'Da' ) && (q4 === 'Da' ) && (q5 === 'Da' ) && (q6 === 'Da' ) && (q7 === 'Da' ) && (q8 === 'Da' ) && (q9 === 'Da' ) && (q11 === 'Da' ) && (q12 === 'Da' )) 
  {
    message = messageStart + '2714 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
  }

  else if ((q1 === 'Da') && (q2 === 'Da' ) && (q3 === 'Da' ) && (q4 === 'Da' ) && (q5 === 'Da' ) && (q7 === 'Da' ) && (q8 === 'Da' ) && (q9 === 'Da' ) && (q11 === 'Da' ) && (q12 === 'Da' )) 
    {
      message = messageStart + '2928 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
    }

    else if ((q1 === 'Da') && (q2 === 'Da' ) && (q3 === 'Da' ) && (q4 === 'Da' ) && (q5 === 'Da' ) && (q7 === 'Da' ) && (q9 === 'Da' ) && (q10 === 'Da' ) && (q12 === 'Da' )) 
    {
      message = messageStart + '3142 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
    }
    
     else if ((q1 === 'Da') && (q2 === 'Da' ) && (q4 === 'Da' ) && (q5 === 'Da' ) && (q7 === 'Da' ) && (q9 === 'Da' )) 
    {
      message = messageStart + '3356 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
    }

      else if ((q1 === 'Da') && (q4 === 'Da' ) && (q7 === 'Da' )) 
    {
      message = messageStart + '3570 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
    }

        else if (q1 === 'Da') 
    {
      message = messageStart + '3784 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
    }

    
    else {
         
          message = messageStart + '4000 lei\n' + messageMiddle + phoneNumber + '. ' + messageEnd;
        }

  

  MailApp.sendEmail(userEmail, subject, message);

 }
