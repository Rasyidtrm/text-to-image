document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const textInput = document.getElementById('textInput').value;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Reset canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background warna putih
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set font dan ukuran teks
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';

    // Gambar teks di tengah canvas
    ctx.fillText(textInput, canvas.width / 2, canvas.height / 2);
});
