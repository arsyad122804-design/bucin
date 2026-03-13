// Auto play music dengan user interaction
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const envelope1 = document.getElementById('envelope1');
    const envelope2 = document.getElementById('envelope2');
    const envelopeWrapper1 = document.getElementById('envelopeWrapper1');
    const envelopeWrapper2 = document.getElementById('envelopeWrapper2');
    const letter1 = document.getElementById('letter1');
    const letter2 = document.getElementById('letter2');
    const closeLetter1 = document.getElementById('closeLetter1');
    const closeLetter2 = document.getElementById('closeLetter2');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const heartsContainer = document.getElementById('heartsContainer');
    const splashScreen = document.getElementById('splashScreen');
    const startBtn = document.getElementById('startBtn');
    const letterOverlay = document.getElementById('letterOverlay');
    
    let isPlaying = false;

    // Tombol mulai - pasti play musik
    startBtn.addEventListener('click', function() {
        music.play().then(function() {
            isPlaying = true;
            playIcon.textContent = '⏸️';
            
            // Hilangkan splash screen
            splashScreen.style.opacity = '0';
            setTimeout(function() {
                splashScreen.style.display = 'none';
            }, 500);
        }).catch(function(error) {
            console.log('Error playing music:', error);
            // Tetap hilangkan splash screen
            splashScreen.style.opacity = '0';
            setTimeout(function() {
                splashScreen.style.display = 'none';
            }, 500);
        });
    });

    // Tombol play/pause
    playPauseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (isPlaying) {
            music.pause();
            playIcon.textContent = '▶️';
            isPlaying = false;
        } else {
            music.play().then(function() {
                isPlaying = true;
                playIcon.textContent = '⏸️';
            });
        }
    });

    // Buat partikel love
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = '❤️';
        
        // Random posisi horizontal
        heart.style.left = Math.random() * 100 + '%';
        
        // Random delay
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        // Random ukuran
        const size = Math.random() * 20 + 15;
        heart.style.fontSize = size + 'px';
        
        heartsContainer.appendChild(heart);
        
        // Hapus setelah animasi selesai
        setTimeout(function() {
            heart.remove();
        }, 8000);
    }

    // Buat partikel love secara berkala
    setInterval(createHeart, 300);
    
    // Buat beberapa love di awal
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 200);
    }

    // Buka amplop 1
    envelope1.addEventListener('click', function() {
        envelope1.classList.add('open');
        
        setTimeout(function() {
            envelopeWrapper1.style.display = 'none';
            letter1.classList.add('show');
            letterOverlay.classList.add('show');
            document.body.classList.add('letter-open');
        }, 800);
    });

    // Tutup surat 1
    closeLetter1.addEventListener('click', function() {
        letter1.classList.remove('show');
        letterOverlay.classList.remove('show');
        document.body.classList.remove('letter-open');
        
        setTimeout(function() {
            envelopeWrapper1.style.display = 'block';
            envelope1.classList.remove('open');
        }, 300);
    });

    // Klik overlay untuk tutup surat 1
    letterOverlay.addEventListener('click', function() {
        if (letter1.classList.contains('show')) {
            closeLetter1.click();
        } else if (letter2.classList.contains('show')) {
            closeLetter2.click();
        }
    });

    // Buka amplop 2
    envelope2.addEventListener('click', function() {
        envelope2.classList.add('open');
        
        setTimeout(function() {
            envelopeWrapper2.style.display = 'none';
            letter2.classList.add('show');
            letterOverlay.classList.add('show');
            document.body.classList.add('letter-open');
        }, 800);
    });

    // Tutup surat 2
    closeLetter2.addEventListener('click', function() {
        letter2.classList.remove('show');
        letterOverlay.classList.remove('show');
        document.body.classList.remove('letter-open');
        
        setTimeout(function() {
            envelopeWrapper2.style.display = 'block';
            envelope2.classList.remove('open');
        }, 300);
    });
});
