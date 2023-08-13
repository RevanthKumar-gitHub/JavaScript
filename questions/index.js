const questions = document.querySelectorAll(".questionA");

questions.forEach((question) => {
  const questionBtn = question.querySelector(".btn");
  const closebtn = question.querySelector(".close");

  questionBtn.onclick = () => {
    const answer = question.querySelector(".answer");
    const line = question.querySelector(".line");
    questions.forEach((item) => {
      if (item != question) {
        const answer = item.querySelector(".answer");
        const line = item.querySelector(".line");
        line.style.display = "none";
        answer.style.display = "none";
      }
    });
    line.style.display = "flex";
    answer.style.display = "flex";
  };

  closebtn.onclick = () => {
    const answer = question.querySelector(".answer");
    const line = question.querySelector(".line");
    line.style.display = "none";
    answer.style.display = "none";
  };
});
