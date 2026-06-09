(function(){
  'use strict';

  const SELECTORS = ['#hero', '#about', '#services', '#portfolio', '#contact', 'footer'];

  function createSkeletonFor(section){
    const wrap = document.createElement('div');
    wrap.className = 'skeleton-wrap';
    const overlay = document.createElement('div');
    overlay.className = 'skeleton-overlay';
    overlay.setAttribute('aria-hidden','true');

    // lightweight placeholder structure
    const placeholder = document.createElement('div');
    placeholder.style.padding = '20px';

    const title = document.createElement('div');
    title.className = 'skeleton-title';
    placeholder.appendChild(title);

    for(let i=0;i<3;i++){
      const t = document.createElement('div');
      t.className = 'skeleton-text';
      placeholder.appendChild(t);
    }

    wrap.appendChild(overlay);
    wrap.appendChild(placeholder);

    // insert as first child so layout is preserved
    section.insertBefore(wrap, section.firstChild);
  }

  function removeSkeletons(){
    SELECTORS.forEach(sel=>{
      const el = document.querySelector(sel);
      if(!el) return;
      const wrap = el.querySelector('.skeleton-wrap');
      if(wrap) wrap.remove();
    });
  }

  function waitForImages(){
    const images = Array.from(document.images);
    if(!images.length) return Promise.resolve();
    return Promise.all(images.map(img=>{
      if(img.complete) return Promise.resolve();
      return new Promise(res=>{ img.addEventListener('load',res); img.addEventListener('error',res); });
    }));
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    // insert skeletons quickly
    SELECTORS.forEach(sel=>{
      const el = document.querySelector(sel);
      if(el) createSkeletonFor(el);
    });
  });

  // remove skeletons when images decode or window load, whichever first after a small timeout
  window.addEventListener('load', async ()=>{
    // small grace to allow fonts/images to settle
    try{ await waitForImages(); }catch(e){}
    setTimeout(()=>{
      removeSkeletons();
      // initialize AOS if main provided init
      if(window.initAOS && typeof window.initAOS === 'function'){
        window.initAOS();
      }
    }, 200);
  });

})();
