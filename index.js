for(let i=0; i<10; i++){
  let line = '';
  for(let j = 1; j<=10-i; j++) {
    line = line + ' ';
  }
  for(let n = 1; n<2*i; n++) {
    line = line + '*'
  }
  console.log(line)
}
