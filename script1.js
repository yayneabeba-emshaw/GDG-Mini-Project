function startTest() {
  let score = 0;
  let sleepHours = Number(prompt("How many hours do you sleep per day? "));
  if (sleepHours >= 4) {
    score++;
  }
  let likesMusic = prompt("Do you enjoy music? (yes/no)");
  if (likesMusic === "yes") {
    score++;
  }
  let getsTired = prompt("Do you get tired?(yes/no)");
  if (getsTired === "yes") {
    score++;
  }
  let mathsCorrect = Number(prompt("What is the result of 2 ** 4?"));
  if (mathsCorrect === 16) {
    score++;
  }
  if (score >= 3) {
    alert("You are definitely Human!");
  } else if (score >= 1) {
    alert("Half human, half robot!");
  } else {
    alert("Robot detected!");
  }
  console.log("Score is:" + score);
}
