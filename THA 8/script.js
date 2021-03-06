
(function () {
  const quizContainer = document.querySelector(".quiz");
  const outputContainer = document.querySelector(".output");
  const nextBtn = document.querySelector("#next");
  const prevBtn = document.querySelector("#prev");
  const submitBtn = document.querySelector("#submit");

  const quizQuestions = [
    {
  
    question: "How many numbers of the element in the open IoT architecture?",
    answers: {
      a: "Four elements",
      b: "Five elements",
      c: "Six elements",
      d: "Seven elements"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following is the way in which an IoT device is associated with data?",
    answers: {
      a: "Internet",
      b: "Network",
      c: "Cloud"
    },
    correctAnswer: "c"
  },
  {
    question: " MQTT stands for ___________",
    answers: {
      a: "MQ Telemetry Things",
      b: "MQ MQ Telemetry Transport",
      b: "MQ Transport Things",
      c: "MQ Transport Telemetry",
      
    },
    correctAnswer: "b"
  }];



  function buildQuiz() {
    let output = [];

    quizQuestions.forEach((question, index) => {
      let answers = [];

      for (let answer in question.answers) {
        answers.push(
        `<label>
            <input type='radio' name='question${index}' value='${answer}'/>
            ${answer} : ${question.answers[answer]}
          </label>`);

      }

      output.push(
      `<div class='slide'>
          <div class='questionTitle'>${index + 1}. ${question.question}</div>
          <div class='answer'>${answers.join("")}</div>
         </div>`);

    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = document.querySelectorAll(".answer");
    let numCorrect = 0;

    quizQuestions.forEach((question, index) => {
      const currAnswerContainer = answerContainers[index];
      const selectedAnswer = `input[type='radio']:checked`;
      const usersAnswer = (currAnswerContainer.querySelector(selectedAnswer) ||
      {}).value;

      if (usersAnswer === question.correctAnswer) {
        answerContainers[index].style.color = "#8BC34A";
        numCorrect++;
      } else {
        answerContainers[index].style.color = "#F44336";
      }
    });

    outputContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
  }

  buildQuiz();

  let currentSlide = 0;
  let slides = Array.from(document.querySelectorAll(".slide"));
  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      prevBtn.style.display = "none";
      submitBtn.style.display = "none";
    } else {
      prevBtn.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    } else {
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
    }
  }
  showSlide(0);

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  submitBtn.addEventListener("click", showResults);
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
})();