// Project One Scores //
const pOnePass = 32
const mOnePass = 0
const pOneMerit = 48
const mOneMerit = 0
const pOneDist = 64
const mOneDist = 0
// Project Two Scores //
const pTwoPass = 32
const mTwoPass = 0
const pTwoMerit = 48
const mTwoMerit = 0
const pTwoDist = 64
const mTwoDist = 0
// Project Three Scores //
const pThreePass = 32
const mThreePass =0
const pThreeMerit = 48
const mThreeMerit = 0
const pThreeDist = 64
const mThreeDist = 0
// Project Four Scores //
const pFourPass = 64
const mFourPass = 0
const pFourMerit = 96
const mFourMerit = 0
const pFourDist = 128
const mFourDist = 0
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