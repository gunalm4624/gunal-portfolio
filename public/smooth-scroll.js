// Enhanced smooth scrolling with custom easing
(function() {
  // Check if we're in the browser
  if (typeof window === 'undefined') return;
  
  let isScrolling = false;
  
  // Custom smooth scroll function with easing
  function smoothScrollTo(target, duration = 800) {
    if (isScrolling) return;
    
    isScrolling = true;
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();
    
    // Easing function for smooth acceleration/deceleration
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, start + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        isScrolling = false;
      }
    }
    
    requestAnimationFrame(animation);
  }
  
  // Wait for DOM to be ready
  function initSmoothScroll() {
    // Override default scroll behavior for links
    document.addEventListener('click', function(e) {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - 80; // Account for fixed headers
          smoothScrollTo(targetPosition);
        }
      }
    });
    
    // Enhanced scroll behavior for programmatic scrolling
    window.smoothScrollTo = smoothScrollTo;
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();
