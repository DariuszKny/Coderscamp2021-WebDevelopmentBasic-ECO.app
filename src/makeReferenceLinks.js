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
<<<<<<< HEAD
=======
  
>>>>>>> 33ed8f36b55f341b5afeb1e266d825d25155228f
