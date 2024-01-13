function downloadPdf(pdfUrl, filename) {
  var link = document.createElement("a");
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("VL1").addEventListener("click", function() {
  downloadPdf("../PDF/MANGA1.pdf", "1° VOLUME MANGA 86");
});

document.getElementById("VL22").addEventListener("click", function() {
  downloadPdf("../PDF/MANGA2.pdf", "2° VOLUME MANGA 86");
});

document.getElementById("VL3").addEventListener("click", function() {
  downloadPdf("../PDF/MANGA3.pdf", "3° VOLUME MANGA 86");
});