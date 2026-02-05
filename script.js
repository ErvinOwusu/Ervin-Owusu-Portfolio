// ========================================
// COLLAPSIBLE BOX FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.querySelectorAll('.collapsible-box');
    
    collapsibles.forEach(box => {
        const header = box.querySelector('.collapsible-header');
        const content = box.querySelector('.collapsible-content');
        const icon = box.querySelector('.toggle-icon');
        
        // Set initial state
        const isOpen = content.classList.contains('open');
        header.setAttribute('aria-expanded', isOpen);
        
        header.addEventListener('click', () => {
            const isCurrentlyOpen = content.classList.contains('open');
            
            if (isCurrentlyOpen) {
                // Close
                content.classList.remove('open');
                icon.textContent = '+';
                header.setAttribute('aria-expanded', 'false');
            } else {
                // Open
                content.classList.add('open');
                icon.textContent = '−';
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Auto-expand the target section
            const targetBox = targetElement.querySelector('.collapsible-box');
            if (targetBox) {
                const content = targetBox.querySelector('.collapsible-content');
                const header = targetBox.querySelector('.collapsible-header');
                const icon = targetBox.querySelector('.toggle-icon');
                
                if (!content.classList.contains('open')) {
                    content.classList.add('open');
                    icon.textContent = '−';
                    header.setAttribute('aria-expanded', 'true');
                }
            }
        });
    });
});

