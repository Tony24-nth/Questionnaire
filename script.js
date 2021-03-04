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
        question: "21.Quel est mon parfum de milkshake préférer ?",
        answers: {
           a: "Crunch/Bonbon",
           b: "Chocolat/Vanille",
           c: "Fraise/Bonbon" },
                                  
           correctAnswer: "a" },

  {
        question: "22.Comme enfant j'aimerais avoir en premier ?",
        answers: {
           a: "Une Fille",
           b: "Un Garçon",
           c: "Les deux en même temps" },
                                    
           correctAnswer: "b" },

  {
        question: "23.Habituellement dans mon lait je met ?",
        answers: {
           a: "Le lait avant les céréale",
           b: "Le céréale avant de lait",
           c: "Je ne boit pas de lait" },
                                      
           correctAnswer: "a" },

  {
        question: "24.Qui est la personne que j'aimerai revoir actuellement ?",
        answers: {
           a: "Mon Frère",
           b: "Mon Papa",
           c: "Ma Soeur" },
                                        
           correctAnswer: "b" },

  {
        question: "25.Quel est mon plus grand rêve ?",
        answers: {
           a: "Reussir ma vie et rendre heureux mes parents",
           b: "Avoir beaucoup d'argent et partir loin",
           c: "J'ai pas de rêve on verra ce que la vie me réserve" },
                                          
           correctAnswer: "a" },

  {
        question: "26.Comment je veut appeller mon garçon ?",
        answers: {
           a: "Douglas",
           b: "Nicolas",
           c: "Eric" },
                                            
           correctAnswer: "b" },

  {
        question: "27.Comment je veut appeler ma fille ?",
        answers: {
           a: "Emilie",
           b: "Marion",
           c: "aucune idée je laisse le choix a la maman" },
                                              
           correctAnswer: "c" },

 {
        question: "28.Quand j'etait petit je rêvait de devenir ?",
        answers: {
           a: "Pompier",
           b: "Maçon",
           c: "Ingenieur en Informatique" },
                                                
           correctAnswer: "b" },

 {
        question: "29.Je suis actuellement en : ?",
        answers: {
           a: "BTS IR",
           b: "BTS EC",
           c: "BTS Dépanage en informatique" },
                                                  
           correctAnswer: "a" },

 {
        question: "30.A quel age je voudrai me marier ?",
        answers: {
             a: "20 ans",
             b: "25 ans",
             c: "30 ans" },
                                                    
             correctAnswer: "b" },

 {
         question: "31.Quel voiture j'aimerai avoir actuellement ?",
         answers: {
             a: "Ford RS",
             b: "Golf 6",
             c: "Twingo" },
                                                      
             correctAnswer: "b" },

 {
         question: "32.Quel date a marquer ma vie ?",
         answers: {
             a: "16 janvier 2016",
             b: "18 avril 2018",
             c: "17 mars 2020" },
                                                        
             correctAnswer: "a" },

 {
         question: "33.Combien de musique j'ai chanter ?",
         answers: {
             a: "6 musiques",
             b: "4 musiques",
             c: "1 musique" },
                                                          
             correctAnswer: "b" },

 {
         question: "34.Quel est ma matiere préférer ?",
         answers: {
             a: "Français",
             b: "Math",
             c: "Physique-Chimie" },
                                                            
             correctAnswer: "c" },

  {
          question: "35.Qui est la matiere que je déteste ?",
          answers: {
             a: "Anglais",
             b: "Math",
             c: "Fançais" },
                                                              
             correctAnswer: "a" },

  {
          question: "36.Quel projet j'ai en tête a la fin de mes études ?",
          answers: {
             a: "Construire ma propre maison",
             b: "Habiter avec ma chérie",
             c: "Acheter un grosse voiture" },
                                                                
              correctAnswer: "a" },
  {      
          question: "37.J'ai combien d'animaux chez moi ?",
          answers: {
             a: "2",
             b: "10",
             c: "na trop i gagne même pas compter" },
                                                                      
              correctAnswer: "c" },
           
  {
          question: "38.J'ai combien de meilleur ami garçon ?",
           answers: {
              a: "4",
              b: "2",
              c: "3" },
                                                                      
               correctAnswer: "b" },

  {
          question: "39.J'ai combien de meilleur amis filles ?",
          answers: {
              a: "2",
              b: "1",
              c: "4" },
                                                                      
               correctAnswer: "a" },

  {
          question: "40.Je fait du sport combien de fois par semaine ?",
          answers: {
              a: "5 fois",
              b: "3 fois",
              c: "1 fois" },
                                                                      
               correctAnswer: "b" },

  {
          question: "41.Quel est mon plat préférer ?",
          answers: {
              a: "Sauté-mine",
              b: "Saucisse",
              c: "Pate" },
                                                                      
               correctAnswer: "b" },

  {
          question: "42.Quel est mon gateau préférer ?",
          answers: {
              a: "Gateau au chocolat",
              b: "Mille-Feuille",
              c: "Foret-noire" },
                                                                      
               correctAnswer: "c" },

  {
          question: "43.Mon animal préférer ?",
          answers: {
              a: "Tigre",
              b: "Lion",
              c: "Perroquet" },
                                                                      
               correctAnswer: "c" },

  {
          question: "44.Quel est mon bonbon préférer ?",
          answers: {
              a: "Haribo",
              b: "Au Carmel",
              c: "Smarties" },
                                                                            
               correctAnswer: "c" },

  {
          question: "45.Quel est mon melange le plus bizzard que j'ai fait ?",
          answers: {
              a: "Pain/Dacatine/Mayonnaise",
              b: "Riz/ketchup",
              c: "Riz/Bouchon/Frite" },
                                                                            
               correctAnswer: "a" },

  {
          question: "46.Quel sport je fesait avant ?",
          answers: {
              a: "Judo",
              b: "Karaté",
              c: "Kick-boxing" },
                                                                            
               correctAnswer: "b" }, 
               
  {
          question: "47.Je mesure ?",
          answers: {
              a: "1m75",
              b: "1m72",
              c: "1m77" },
                                                                            
               correctAnswer: "a" },

  {
          question: "48.En pointure je fait du ?",
          answers: {
              a: "43",
              b: "45",
              c: "42" },
                                                                            
               correctAnswer: "b" },

  {
          question: "49.Quel est ma boisson préférer ?",
          answers: {
              a: "Coca-Cola",
              b: "Sprite",
              c: "Thé Pêche" },
                                                                                  
               correctAnswer: "c" },

  {
          question: "50.Es ce que je mange beaucoup ?",
          answers: {
              a: "Oui",
              b: "Non",
              c: "Juste degré" },
                                                                                        
               correctAnswer: "a" },

                     

  
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
