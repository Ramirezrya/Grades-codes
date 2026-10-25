const passingGrade = 75;

function checkGrade() {
  const enteredGrade = Number(document.getElementById('gradeInput').value);
  const result = document.getElementById('gradeResult');

  if (enteredGrade >= passingGrade) {
    result.textContent = 'Passed';
    result.className = 'result passed';
  } else {
    result.textContent = 'Failed';
    result.className = 'result failed';
  }
}
