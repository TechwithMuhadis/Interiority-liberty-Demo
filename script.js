const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');

        if (entry.isIntersecting) {
          let count = 0;
          const speed = 150;
          const increment = Math.ceil(target / speed);

          clearInterval(counter.timer);

          counter.timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.innerText = target;
              clearInterval(counter.timer);
            } else {
              counter.innerText = count;
            }
          }, 15);

        } else {
          // Screen se bahar jane par reset ho kar zero ho jayega
          clearInterval(counter.timer);
          counter.innerText = '0';
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('.counter').forEach(counter => {
      observer.observe(counter);
    });