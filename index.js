
    document.getElementById('download').addEventListener('click', function () {
        var main = document.querySelector('body');
        html2canvas(main).then(canvas => {
            let img = canvas.toDataURL('image/png');
            let doc = new jsPDF();
            doc.addImage(img, 'JPEG', 0, 0);
            doc.save('cv_jaouad.pdf');
        });
    });

