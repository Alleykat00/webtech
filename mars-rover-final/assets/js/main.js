document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DYNAMIC MISSION LOG TOGGLE
    // Enhances the 'mission-details' sections with interactive controls
    const missionDetails = document.querySelectorAll('.mission-details');
    
    missionDetails.forEach((detailBox) => {
        // Create the toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.innerHTML = '<span>+</span> Open Mission Log';
        
        // Style the button using existing theme concepts via JS
        Object.assign(toggleBtn.style, {
            background: 'rgba(11, 61, 145, 0.3)',
            color: 'var(--silver-metallic)',
            border: '1px solid var(--nasa-blue)',
            padding: '10px 15px',
            cursor: 'pointer',
            fontFamily: "'Goldman', cursive",
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            width: '100%',
            marginBottom: '15px',
            transition: 'all 0.3s ease'
        });

        // Hide detail box by default
        detailBox.style.display = 'none';
        
        // Insert button before the details
        detailBox.parentNode.insertBefore(toggleBtn, detailBox);

        // Click Event
        toggleBtn.addEventListener('click', () => {
            const isOpen = detailBox.style.display === 'block';
            detailBox.style.display = isOpen ? 'none' : 'block';
            toggleBtn.innerHTML = isOpen ? '<span>+</span> Open Mission Log' : '<span>-</span> Close Mission Log';
            toggleBtn.style.background = isOpen ? 'rgba(11, 61, 145, 0.3)' : 'var(--nasa-blue)';
            toggleBtn.style.color = isOpen ? 'var(--silver-metallic)' : 'white';
        });
    });

    // 2. "RETURN TO ORBIT" (BACK TO TOP) BUTTON
    const topBtn = document.createElement('button');
    topBtn.innerHTML = '🚀';
    topBtn.id = 'rocketBtn';
    topBtn.title = 'Return to Orbit';
    
    // Add styles to CSS via JS for the rocket
    Object.assign(topBtn.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        fontSize: '2rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'none',
        zIndex: '1000',
        filter: 'drop-shadow(0 0 5px var(--nasa-blue))'
    });

    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. IMAGE LIGHTBOX OVERLAY
    const overlay = document.createElement('div');
    overlay.id = 'space-overlay';
    
    Object.assign(overlay.style, {
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.9)',
        zIndex: '2000',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'zoom-out',
        backdropFilter: 'blur(5px)'
    });

    const fullImg = document.createElement('img');
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '80%';
    fullImg.style.border = '2px solid var(--silver-metallic)';
    fullImg.style.boxShadow = '0 0 30px var(--nasa-blue)';

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    // Attach to all images in posts
    document.querySelectorAll('.post img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            fullImg.src = img.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});