//i can't do it, i understand it only. We did it in class so i have the solution.

const rows = 6;

for (let i = 1; i <= rows; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '* ';
  }
  console.log(pattern);
}