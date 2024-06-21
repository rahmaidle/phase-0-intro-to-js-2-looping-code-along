// Code your solutions in this file
function writeCards(names, occasion) {
    const result = [];
    for (let i = 0; i < names.length; i++) {
      result.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return result;
  }
  
  function countDown(n) {
    for (let i = n; i >= 0; i--) console.log(i);
  }
  
  export { writeCards, countDown };
