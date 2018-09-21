const youngMan = new Promise(function youngLady( resolve, reject ) {
  setTimeout(() => {
    //console.log('Younglady saying yes...');
    //resolve();
    // console.log('Younglady saying no...');
    // reject();

    console.log('Younglady saying yes...');
    resolve('Mom and dad think its a good idea');

    //console.log('Younglady saying no...');
    //reject('Not interested');

  }, 2000);
});

// youngMan.then(() => {
//   console.log('yay she said yes!');
// }).catch(() => {
//   console.log('She said no!');
// });


youngMan
  .then((result) => {
    console.log(result);
    return new Promise(resolve => {
      console.log('Find a place for marriage');
      setTimeout(() => {
        resolve('Found a place!');
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise(resolve => {
      console.log('Find some wedding clothes!');
      setTimeout(() => {
        resolve('Found wedding clothes!');
      }, 2000);
    })
    
  })
  .then(result => {
    console.log(result);
    console.log('all set!');
  }) 
  .catch((result) => {
    console.log(result);
  });

console.log('Waiting...');