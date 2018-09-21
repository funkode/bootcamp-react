console.log("sending")

const myFetch = (url) =>  {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest() ;
      xhr.addEventListener('readystatechange', () => {
          if(xhr.status === 200 && xhr.readyState === 4) {
              //console.log(JSON.parse(xhr.responseText));
              resolve(JSON.parse(xhr.responseText)) ;
          }
         
      }); 
      xhr.open('GET', url);
      xhr.send() ;
      
  })
}

myFetch('http://localhost:3020/widgets').then(widgets => console.log(widgets));