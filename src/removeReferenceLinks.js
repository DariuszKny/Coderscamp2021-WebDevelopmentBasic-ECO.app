const containerWithReferenceLinks = document.getElementById('containerWithReferenceLinks');


export function removeReferenceLinks(){
    
      while (containerWithReferenceLinks.firstChild) {
        containerWithReferenceLinks.removeChild(containerWithReferenceLinks.firstChild);
      };
   
  };