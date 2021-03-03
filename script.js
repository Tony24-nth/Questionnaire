(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`);

      }

      // add this question and its answers to the output
      output.push(
      `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`);

    });


    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    
    resultsContainer.innerHTML = `votre score est de ${numCorrect}/${myQuestions.length}`;
  
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else
    {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
  {
    question: "1.Quel est ma couleur préferer?",
    answers: {
      a: "Rouge",
      b: "Bleu",
      c: "Vert" },

    correctAnswer: "b" },

  {
    question: "2.Quel est ma marque de vêtement préferer ?",
    answers: {
      a: "Adidas",
      b: "Nike",
      c: "Champion" },

    correctAnswer: "b" },

  {
    question: "3.Ma petite soeur s'appelle ?",
    answers: {
      a: "Eileen",
      b: "Aileen",
      c: "Ayleen"},

    correctAnswer: "a" },

 {
    question: "4.Mon frère s'appelle ?",
    answers: {
      a: "Maelle",
      b: "Mael",
      c: "Maloute" },

    correctAnswer: "b" },

  {
      question: "5.A quel age je me suis serieusement au sport ?",
      answers: {
        a: "16 ans",
        b: "14 ans",
        c: "18 ans" },
  
      correctAnswer: "a" },

  {
      question: "6.Quel est mon mange préférer ?",
      answers: {
        a: "One piece",
        b: "Naruto",
        c: "Dragon ball Z" },
    
        correctAnswer: "c" },

  {
      question: "7.Comment je comble mon ennuie ?",
      answers: {
        a: "je fait du sport",
        b: "je joue a la play",
        c: "je dort" },
      
        correctAnswer: "b" },

  {
      question: "8.Quel est mon sport favorie ?",
      answers: {
         a: "Tenis",
         b: "Football",
         c: "Hand-ball" },
        
         correctAnswer: "b" },

 {
      question: "9.Ma passion ?",
      answers: {
        a: "Musique",
        b: "Vélo",
        c: "Moto" },
          
              correctAnswer: "c" },

 {
       question: "10.Mon film préferer ?",
       answers: {
         a: "Avenger END-GAME",
         b: "Bon a tirer",
         c: "Spiderman" },
            
         correctAnswer: "a" },

  {
       question: "11.Ou j'aimerai voyager ?",
       answers: {
         a: "Dubai",
         b: "Maldive",
         c: "New-York" },
              
         correctAnswer: "a" },

  { 
       question: "12.J'ai déja voyager ?",
       answers: {
         a: "Oui",
         b: "Non",
         c: "Peut-etre que Oui , peut-etre que Non" },
                
          correctAnswer: "a" },

  {
       question: "13.Combien de temps je suis rester en France ?",
       answers: {
         a: "4 ans",
         b: "1 ans",
         c: "2 ans" },
                  
          correctAnswer: "b" },

  {
       question: "14.Quel est la voiture de mes rêves ?",
       answers: {
         a: "Audi RS5",
         b: "Subaru",
         c: "Bugatti" },
                    
         correctAnswer: "c" },

  {
       question: "15.Si un jour j'aurai le choix je choisirai de : ?",
       answers: {
         a: "Faire la moto tout ma vie",
         b: "Parir en voyage",
         c: "Faire de parapante" },
                      
         correctAnswer: "a" },

  {
       question: "16.J'ai peur de quoi ?",
       answers: {
         a: "Du vide",
         b: "De rien",
         c: "Du noir" },
                        
         correctAnswer: "a" },

  {
       question: "17.Quel est mon parfum de glace préférer ?",
       answers: {
         a: "Chocolat",
         b: "Vanille",
         c: "Caramel" },
                          
         correctAnswer: "a" },

  {
       question: "18.Je suis actuellement ?",
       answers: {
         a: "En Couple",
         b: "Célibataire",
         c: "En flirt depuis 2 mois mais chute faut pas le dire" },
                            
         correctAnswer: "a" },           

  {
        question: "19.J'ai eu combien de relation amoureuse ?",
        answers: {
           a: "4",
           b: "2",
           c: "6" },
                              
           correctAnswer: "a" },

  {
       question: "20.Qui sont les personnes qui compte le plus dans ma vie ?",
       answers: {
           a: "Mon parrain et ma marraine",
           b: "Ma Maman, mon Frère et ma Soeur",
           c: "Personne" },
                                
           correctAnswer: "b" },

  {
        question: "21.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                  
           correctAnswer: "c" },

  {
        question: "22.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                    
           correctAnswer: "c" },

  {
        question: "23.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                      
           correctAnswer: "c" },

  {
        question: "24.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                        
           correctAnswer: "c" },

  {
        question: "25.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                          
           correctAnswer: "c" },
    

  {
        question: "26.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                            
           correctAnswer: "c" },

  {
        question: "27.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                              
           correctAnswer: "c" },

 {
        question: "28.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                                
           correctAnswer: "c" },

 {
        question: "29.Qui est sangoku?",
        answers: {
           a: "Douglas Crockford",
           b: "Sheryl Sandberg",
           c: "Brendan Eich" },
                                                  
           correctAnswer: "c" },

 {
        question: "30.Qui est sangoku?",
        answers: {
             a: "Douglas Crockford",
             b: "Sheryl Sandberg",
             c: "Brendan Eich" },
                                                    
             correctAnswer: "c" },

 {
         question: "31.Qui est sangoku?",
         answers: {
             a: "Douglas Crockford",
             b: "Sheryl Sandberg",
             c: "Brendan Eich" },
                                                      
             correctAnswer: "c" },

 {
         question: "32.Qui est sangoku?",
         answers: {
             a: "Douglas Crockford",
             b: "Sheryl Sandberg",
             c: "Brendan Eich" },
                                                        
             correctAnswer: "c" },

 {
         question: "33.Qui est sangoku?",
         answers: {
             a: "Douglas Crockford",
             b: "Sheryl Sandberg",
             c: "Brendan Eich" },
                                                          
             correctAnswer: "c" },

 {
         question: "34.Qui est sangoku?",
         answers: {
             a: "Douglas Crockford",
             b: "Sheryl Sandberg",
             c: "Brendan Eich" },
                                                            
             correctAnswer: "c" },

  {
          question: "35.Qui est sangoku?",
          answers: {
             a: "Douglas Crockford",
             b: "Sheryl Sandberg",
             c: "Brendan Eich" },
                                                              
             correctAnswer: "c" },

  {
          question: "36.Qui est sangoku?",
          answers: {
             a: "Douglas Crockford",
             b: "Sheryl Sandberg",
             c: "Brendan Eich" },
                                                                
              correctAnswer: "c" },
  
  ];

  function getScore(formulaire) 
  {
    var score = 0;
    var question = document.getElementsByTagName('FIELDSET');
    var nbQuestion = question.length;
    var i = 0;
    while(i < nbQuestion)
    {        
      var option = question[i].getElementsByTagName('INPUT');
      var nbOption = option.length;
      var j = 0;
      while (j < nbOption)
      {
        if((option[j].type == 'radio') && (option[j].checked))
          score += parseInt(option[j].value, 10);
        j ++;
      }          
      i ++ ;
    }
    document.getElementById('score').innerHTML = score;
  } 
  // Kick things off
  buildQuiz();

  // Pagination
  
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
 
  nextButton.addEventListener("click", showNextSlide);
})();
//# sourceURL=pen.js
