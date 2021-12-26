export function makeReferenceLinks(hrefElement){
    let link = document.createElement('link');
  
    link.href = hrefElement;
    link.rel = 'stylesheet';
    link.type = 'text/css';
  
    document.head.appendChild(link);
    console.log(link);
  }