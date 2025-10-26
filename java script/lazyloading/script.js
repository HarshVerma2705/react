document.addEventListener('DOMContentLoaded', function() {
    // 1. Get all elements with the class 'lazy'
    const lazyImages = document.querySelectorAll('.lazy');
    
    // 2. Options for the observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.01 // Trigger when at least 1% of the target is visible
    };

    /**
     * Loads the actual image source from data-src attribute.
     * @param {Element} image - The image element to load.
     */
    function loadImage(image) {
        // Check if the image has the data-src attribute
        if (image.dataset.src) {
            // Set the 'src' attribute to the value of 'data-src'
            image.src = image.dataset.src;
            // Remove the 'lazy' class and add a 'lazy-loaded' class for styling transition
            image.classList.remove('lazy');
            image.classList.add('lazy-loaded');
            // Remove the 'data-src' to save memory and indicate loading is complete
            image.removeAttribute('data-src');
        }
    }

    // 3. The observer callback function
    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            // Check if the element is intersecting (in the viewport)
            if (entry.isIntersecting) {
                // Get the image element
                const image = entry.target;
                
                // Load the image
                loadImage(image);
                
                // Stop observing the image since it's loaded
                observer.unobserve(image);
            }
        });
    }

    // 4. Create the observer and attach it to all lazy images
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        lazyImages.forEach(image => {
            observer.observe(image);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyImages.forEach(loadImage);
        console.log("Intersection Observer not supported. All images loaded immediately.");
    }
});
