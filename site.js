document.getElementById('year').textContent = new Date().getFullYear();

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced){
    document.querySelectorAll('.reveal, .flight-path, .flight-bird').forEach(el=>{
      el.style.transition = 'none';
      el.classList.add('in-view');
    });
  }
