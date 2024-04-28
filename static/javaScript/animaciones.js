
  function copyEmail( email ) {
   
    navigator.clipboard.writeText(email).then(function() {
        alert('¡El correo electrónico ha sido copiado!');
    }, function() {
        alert('Lo siento, no se pudo copiar el correo electrónico. Puedes copiarlo manualmente.');
    });
}
function downloadCV() {
    var cvUrl = "../CV_JhonnyDiaz/Curriculum Jhonny.docx";
    var link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
