document.addEventListener('DOMContentLoaded', function() {
            const toggles = document.querySelectorAll('.toggle');

            toggles.forEach(function(toggle) {
                toggle.addEventListener('click', function() {
                    // Toggle the content's visibility
                    const content = toggle.nextElementSibling;
                    content.style.height = content.offsetHeight === 0 ? `${content.scrollHeight}px` : '0';
                    
                    // Toggle the plus/minus icon
                    const icon = toggle.querySelector('.icon');
                    icon.classList.toggle('fa-plus');
                    icon.classList.toggle('fa-minus');
                });
            });
        });