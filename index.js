
document.getElementById('download').addEventListener('click', function () {
    let main = document.querySelector('body');
    html2canvas(main).then(canvas => {
        let img = canvas.toDataURL('image/png');
        let doc = new jsPDF.jsPDF(); // Pour jsPDF version 2.0.0 et plus tard
        doc.addImage(img, 'JPEG', 0, 0);
        doc.save('cv_jaouad.pdf');
    });
});
 
