// Practicing Functions 

const grades = [85, 77, 82, 95, 68];

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);