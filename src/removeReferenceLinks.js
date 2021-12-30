const containerWithReferenceLinks = document.getElementById('containerWithReferenceLinks');


export function removeReferenceLinks(){
  console.log("tutaj");
    
      while (containerWithReferenceLinks.firstChild) {
        containerWithReferenceLinks.removeChild(containerWithReferenceLinks.firstChild);
      };
   
  };