

//Closure
const outer = () => { 
    let t = 2;

    setTimeout(() => {
      t = 4;
    }, 2000);

    const inner = () => {
      console.log(t);
    };
    return inner;
    //console.dir(inner); //This prints the function status
};

const g = outer();  
g();

setTimeout(() => {
  g();
}, 4000);