const sentence ="hello there from lighthouse labs ";
let i = 0;

for(let char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + i);
  
  i += 50;  

}

setTimeout(() => {
  process.stdout.write('\n');
}, 1000 + i);