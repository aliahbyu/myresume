document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.certificate');
    let currentCertificateIndex = 0;

    function showCertificate(index) {
        certificates.forEach((certificate, i) => {
            certificate.classList.toggle('active', i === index);
        });
    }

    document.getElementById('left-arrow').addEventListener('click', function() {
        currentCertificateIndex = (currentCertificateIndex - 1 + certificates.length) % certificates.length;
        showCertificate(currentCertificateIndex);
    });

    document.getElementById('right-arrow').addEventListener('click', function() {
        currentCertificateIndex = (currentCertificateIndex + 1) % certificates.length;
        showCertificate(currentCertificateIndex);
    });

    // Show the first certificate initially
    showCertificate(currentCertificateIndex);
});

