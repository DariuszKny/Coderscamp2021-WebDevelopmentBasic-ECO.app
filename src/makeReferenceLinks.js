const containerWithReferenceLinks = document.getElementById('containerWithReferenceLinks');

export function makeReferenceLinks(hrefElement){
    let link = document.createElement('link');

    link.href = hrefElement;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    
    if (containerWithReferenceLinks) {
      containerWithReferenceLinks.appendChild(link);
    }
   
<<<<<<< HEAD
  };
=======
  };
>>>>>>> bee3b3bacd1c08bd092e0de80d29135d0ab3dc7b
