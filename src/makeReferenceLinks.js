const containerWithReferenceLinks = document.getElementById('containerWithReferenceLinks');

export function makeReferenceLinks(hrefElement){
    let link = document.createElement('link');

    link.href = hrefElement;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    
    if (containerWithReferenceLinks) {
      containerWithReferenceLinks.appendChild(link);
    }
   
  };