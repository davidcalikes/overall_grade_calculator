// Project One Scores //
const pOnePass = 32
const mOnePass = 48
const pOneMerit = 48
const mOneMerit = 72
const pOneDist = 64
const mOneDist = 96
// Project Two Scores //
const pTwoPass = 32
const mTwoPass = 64
const pTwoMerit = 48
const mTwoMerit = 96
const pTwoDist = 64
const mTwoDist = 128
// Project Three Scores //
const pThreePass = 32
const mThreePass = 88
const pThreeMerit = 48
const mThreeMerit = 132
const pThreeDist = 64
const mThreeDist = 176
// Project Four Scores //
const pFourPass = 64
const mFourPass = 100
const pFourMerit = 96
const mFourMerit = 150
const pFourDist = 128
const mFourDist = 200
// Project Five Scores //
const pFivePass = 80
const pFiveMerit = 120
const pFiveDist = 160
// Overall Course Grades //

const overallPass = 'Pass';
const overallMerit = 'Merit';
const overallDist = 'Distinction';


function calculateOverallGrade() {

    let gradeOne = document.getElementById('gradeOne').selectedOptions[0].value;
    console.log(gradeOne)
    let gradeTwo = document.getElementById('gradeTwo').selectedOptions[0].value;
    console.log(gradeTwo)
    let gradeThree = document.getElementById('gradeThree').selectedOptions[0].value;
    console.log(gradeThree)
    let gradeFour = document.getElementById('gradeFour').selectedOptions[0].value;
    console.log(gradeFour)
    let gradeFive = document.getElementById('gradeFive').selectedOptions[0].value;
    console.log(gradeFive)
    
    let overallGradeOne = 0
    let overallGradeTwo = 0
    let overallGradeThree = 0
    let overallGradeFour = 0
    let overallGradeFive = 0
    
    
    if (gradeOne == 'Pass') {
        overallGradeOne = pOnePass;
      } else if (gradeOne == 'Merit') {
        overallGradeOne = pOneMerit;
      } else if (gradeOne == 'Distinction') {
        overallGradeOne = pOneDist;
      }
    
    if (gradeTwo == 'Pass') {
        overallGradeTwo = pTwoPass;
      } else if (gradeTwo == 'Merit') {
        overallGradeTwo = pTwoMerit;
      } else if (gradeTwo == 'Distinction') {
        overallGradeTwo = pTwoDist;
      }
    
    if (gradeThree == 'Pass') {
        overallGradeThree = pThreePass;
      } else if (gradeThree == 'Merit') {
        overallGradeThree = pThreeMerit;
      } else if (gradeThree == 'Distinction') {
        overallGradeThree = pThreeDist;
      }
    
      if (gradeFour == 'Pass') {
        overallGradeFour = pFourPass;
      } else if (gradeFour == 'Merit') {
        overallGradeFour = pFourMerit;
      } else if (gradeFour == 'Distinction') {
        overallGradeFour = pFourDist;
      }
    
    if (gradeFive == 'Pass') {
        overallGradeFive = pFivePass;
      } else if (gradeFive == 'Merit') {
        overallGradeFive = pFiveMerit;
      } else if (gradeFive == 'Distinction') {
        overallGradeFive = pFiveDist;
      }
    
    let combinedGrades = overallGradeOne + overallGradeTwo + overallGradeThree + overallGradeFour + overallGradeFive;
    console.log(combinedGrades)
    let finalCourseGrade = 0
    let displayGrade = document.getElementById('final-grade')
    
    if (combinedGrades >= 240 && combinedGrades <= 311) {
        finalCourseGrade = 'Pass';
      } else if (combinedGrades >= 312 && combinedGrades <= 383) {
        finalCourseGrade = 'Merit';
      } else if (combinedGrades >= 384 && combinedGrades <= 480) {
        finalCourseGrade = 'Distinction';
      }
    
    displayGrade.innerHTML = finalCourseGrade
    console.log(displayGrade)
    
    }

  function milestoneOverallGrade() {

    let gradeOne = document.getElementById('gradeOne').selectedOptions[0].value;
    console.log(gradeOne)
    let gradeTwo = document.getElementById('gradeTwo').selectedOptions[0].value;
    console.log(gradeTwo)
    let gradeThree = document.getElementById('gradeThree').selectedOptions[0].value;
    console.log(gradeThree)
    let gradeFour = document.getElementById('gradeFour').selectedOptions[0].value;
    console.log(gradeFour)
    
    let overallGradeOne = 0
    let overallGradeTwo = 0
    let overallGradeThree = 0
    let overallGradeFour = 0
    
    if (gradeOne == 'Pass') {
        overallGradeOne = mOnePass;
      } else if (gradeOne == 'Merit') {
        overallGradeOne = mOneMerit;
      } else if (gradeOne == 'Distinction') {
        overallGradeOne = mOneDist;
      }
    
    if (gradeTwo == 'Pass') {
        overallGradeTwo = mTwoPass;
      } else if (gradeTwo == 'Merit') {
        overallGradeTwo = mTwoMerit;
      } else if (gradeTwo == 'Distinction') {
        overallGradeTwo = mTwoDist;
      }
    
    if (gradeThree == 'Pass') {
        overallGradeThree = mThreePass;
      } else if (gradeThree == 'Merit') {
        overallGradeThree = mThreeMerit;
      } else if (gradeThree == 'Distinction') {
        overallGradeThree = mThreeDist;
      }
    
      if (gradeFour == 'Pass') {
        overallGradeFour = mFourPass;
      } else if (gradeFour == 'Merit') {
        overallGradeFour = mFourMerit;
      } else if (gradeFour == 'Distinction') {
        overallGradeFour = mFourDist;
      }
    
    let combinedGrades = overallGradeOne + overallGradeTwo + overallGradeThree + overallGradeFour;
    console.log(combinedGrades)
    let finalCourseGrade = 0
    let displayGrade = document.getElementById('final-grade')
    
    if (combinedGrades >= 300 && combinedGrades <= 381) {
        finalCourseGrade = 'Pass';
      } else if (combinedGrades >= 382 && combinedGrades <= 487) {
        finalCourseGrade = 'Merit';
      } else if (combinedGrades >= 488 && combinedGrades <= 600) {
        finalCourseGrade = 'Distinction';
      }
    
    displayGrade.innerHTML = finalCourseGrade
    console.log(displayGrade)
    
    }

      