// Contact form handling
const contactForm = document.getElementById('contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

// Form validation
function validateForm() {
    let isValid = true;
    
    formInputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            showError(input, 'This field is required');
        } else if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                isValid = false;
                showError(input, 'Please enter a valid email address');
            }
        } else {
            clearError(input);
        }
    });
    
    return isValid;
}

// Show error message
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorElement);
    }
    
    input.classList.add('error');
    
    // Add shake animation
    formGroup.classList.add('shake');
    setTimeout(() => {
        formGroup.classList.remove('shake');
    }, 500);
}

// Clear error message
function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    input.classList.remove('error');
}

// Handle form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<span class="loader"></span>';
        submitButton.disabled = true;
        
        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitButton.classList.add('success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button after delay
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.classList.remove('success');
                submitButton.disabled = false;
            }, 2000);
            
        } catch (error) {
            // Show error message
            submitButton.innerHTML = '<i class="fas fa-times"></i> Error!';
            submitButton.classList.add('error');
            
            // Reset button after delay
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.classList.remove('error');
                submitButton.disabled = false;
            }, 2000);
        }
    }
});

// Add floating label effect
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.closest('.form-group').classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value.trim()) {
            input.closest('.form-group').classList.remove('focused');
        }
    });
    
    // Check initial value
    if (input.value.trim()) {
        input.closest('.form-group').classList.add('focused');
    }
});

// Add character counter for message textarea
const messageTextarea = contactForm.querySelector('textarea');
const maxLength = 500;

messageTextarea.addEventListener('input', () => {
    const remaining = maxLength - messageTextarea.value.length;
    const counter = messageTextarea.closest('.form-group').querySelector('.char-counter') || 
                   document.createElement('div');
    
    if (!messageTextarea.closest('.form-group').querySelector('.char-counter')) {
        counter.className = 'char-counter';
        messageTextarea.closest('.form-group').appendChild(counter);
    }
    
    counter.textContent = `${remaining} characters remaining`;
    
    if (remaining < 50) {
        counter.classList.add('warning');
    } else {
        counter.classList.remove('warning');
    }
});

// Add social media hover effects
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const icon = link.querySelector('i');
        icon.classList.add('fa-bounce');
    });
    
    link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('i');
        icon.classList.remove('fa-bounce');
    });
});

// Add copy to clipboard functionality for contact information
const contactItems = document.querySelectorAll('.contact-item a');

contactItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const text = item.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Show copied tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = 'Copied!';
            item.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        });
    });
}); 