const sections = [...document.querySelectorAll('.case-section')];
const links = [...document.querySelectorAll('.case-nav a[href^="#"]')];
if (sections.length) {
  const update = () => {
    const current = sections.filter(s => s.getBoundingClientRect().top < window.innerHeight * .4).at(-1) || sections[0];
    links.forEach(a => {
      const active = a.hash === '#' + current.id;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  };
  window.addEventListener('scroll', update, {passive:true});
  update();
}
document.addEventListener('play', e => {
  if (e.target instanceof HTMLMediaElement) document.querySelectorAll('video').forEach(v => {if(v !== e.target) v.pause()});
}, true);
