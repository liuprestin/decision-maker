// Dynamically add elements to survey page

$(document).ready(function() {
    let count = 0;
    
    // Add questions
    $('#add-question').click(function() {
      count++;
  
      let questionHTML = `
        <div class="question">
          <label for="question${count}">Question ${count}:</label>
          <input type="text" id="question${count}" name="question${count}">
  
          <div id="answers${count}">
            <!-- insert answers here --> 
          </div>
  
          <button type="button" class="add-answer btn btn-outline-secondary m-2" data-question="${count}">Add Answer</button>
        </div>
      `;
  
      $('#question-container').append(questionHTML);
    });
  
    // Add answers
    $(document).on('click', '.add-answer', function() {
      let questionNumber = $(this).data('question');
      let answerCount = $(`#answers${questionNumber} .answer`).length + 1;
  
      let answerHTML = `
        <div class="answer">
          <label for="answer${answerCount}">Answer ${answerCount}:</label>
          <input type="text" id="answer${answerCount}" name="answer${answerCount}">
        </div>
      `;
  
      $(`#answers${questionNumber}`).append(answerHTML);
    });
  });