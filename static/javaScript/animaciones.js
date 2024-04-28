
  function copyEmail( email ) {
   
    navigator.clipboard.writeText(email).then(function() {
        alert('¡El correo electrónico ha sido copiado!');
    }, function() {
        alert('Lo siento, no se pudo copiar el correo electrónico. Puedes copiarlo manualmente.');
    });
}
