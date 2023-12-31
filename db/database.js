const pool = require("./dbaccess");

/**
 * Add a new survey creator to the database.
 * @param {{name: string, phone_number string, email: string}} user
 * @return {Promise<{}>} A promise to the survey.
 *
 */
const addSurveycreator = function (survey) {
  
  const param = [survey.phonenumber, survey.name, survey.email];
  
  return pool
    .query(
      `
   INSERT INTO survey_creator (Phone_number,name,email) 
   Values($1,$2,$3) RETURNING *;
  `,
      param
    )
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0]; //Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Get survey creator from the database either with Id or no parameter.
 * @param {{id: INT}} ID
 * @return {Promise<{}>} A promise to the surveycreator.
 *
 */
const getsurveycreator = function (id) {
  let querystring =
    id === undefined
      ? `SELECT * FROM survey_creator`
      : `SELECT * FROM surveys WHERE Id=$1`;
  let param = id === undefined ? [] : [id];

 return  pool
    .query(querystring, param)
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Get survey creator from the database either with Id or no parameter.
 * @param {{adminUrl: string, shareUrl: string}} survey
 * @return {Promise<{}>} A promise to the survey.
 *
 */
const addSurvey = function (survey) {
  const param = [survey.adminUrl, survey.shareUrl];
  return pool
    .query(
      `
   INSERT INTO surveys(admin_url,Share_url)
   Values($1,$2) RETURNING *;
  `,
      param
    )
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getSurvey = function (id) {
  let querystring = `SELECT * from survey`;
  let optiopns = id === undefined ? [] : [id];
  if (id) {
    querystring += `WHERE id= $1`;
  }
 return  pool
    .query(querystring, optiopns)
    .then((result) => {
      return Promise.resolve(result.rows);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addQuestions = function (questions) {
  const param = [questions.surveyid, questions.text];
 return  pool
    .query(
      `
   INSERT INTO questions(survey_id,question_text)
   Values($1,$2) RETURNING *;
  `,
      param
    )
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getQuestions = function (id) {
  const param = [id];
 return pool
    .query(
      `
   SELECT * FROM questions WHERE id = $1;
  `,
      param
    )
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getAllQuestions = function (id) {
  const param = [id];
return  pool
    .query(
      `
   SELECT * FROM questions;
  `,
      param
    )
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getQuestionsBySurvey = function (id) {
  const param = [id];
 return pool
    .query(
      `
   SELECT * FROM questions WHERE survey_id = $1;
  `,
      param
    )
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addAnswer = function (answer) {
  const param = [answer.anwertext, answer.questionId];

  return pool
    .query(
      `INSERT INTO answers(answer_text, question_id) values($1,$2) RETURNING *;`,
      param
    )
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getAnswerbyId = function(id){
  const param = [id];
  return pool
  .query(
    `SELECT * from answers where Id = $1`,
    param
  )
  .then((result) => {
    return Promise.resolve(result.rows[0]);
  })
  .catch((err) => {
    console.log(err.message);
  });
}

const getAnswerbyQuestionId = function(questionId){
  const param = [questionId];
 return pool
  .query(
    `SELECT * FROM answers WHERE question_id = $1`,
    param
  )
  .then((result) => {
    return Promise.resolve(result.rows[0]);
  })
  .catch((err) => {
    console.log(err.message);
  });
}

const addResponse = function(response) {
  const param = [response.answerId,response.responseId,response.answerRank];
  return pool
  .query(
    `INSERT INTO response_answers(answer_id,response_id,answer_rank)values($1,$2,$3) RETURNING *;`,
    param
  )
  .then((result) => {
    return Promise.resolve(result.rows[0]);
  })
  .catch((err) => {
    console.log(err.message);
  });

}

const addSurveyResponse = function(survey) {
  const param = [survey.id,survey.date];
  return pool
  .query(
    `INSERT INTO survey_responses(survey_id,response_date)values($1,$2) RETURNING *;`,
    param
  )
  .then((result) => {
    return Promise.resolve(result.rows[0]);
  })
  .catch((err) => {
    console.log(err.message);
  });
}


module.exports = {
 getAllQuestions,
 getAnswerbyId,
 getAnswerbyQuestionId,
 getQuestions,
 getQuestionsBySurvey,
 getsurveycreator,
 getSurvey,
 addAnswer,
 addQuestions,
 addResponse,
 addSurvey,
 addSurveyResponse,
 addSurveycreator
};



