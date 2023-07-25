DROP TABLE IF EXISTS survey_creator CASCADE;
DROP TABLE IF EXISTS survey CASCADE;
DROP TABLE IF EXISTS questions CASCADE;
DROP TABLE IF EXISTS answers CASCADE;
DROP TABLE IF EXISTS survey_responses CASCADE;
DROP TABLE IF EXISTS response_answer CASCADE;

CREATE TABLE survey_creator (
  Id Serial PRIMARY KEY NOT NULL, 
  Phone_number VARCHAR(14) NOT NULL, 
  name VARCHAR(255) NOT NULL, 
  email VARCHAR(100) NOT NULL
  );

CREATE TABLE surveys (
  Id Serial PRIMARY KEY NOT NULL,
  surveycreator_id INT REFERENCES survey_creator(id) ON DELETE CASCADE,
  admin_url VARCHAR(255) NOT NULL,
  Share_url VARCHAR(255) NOT NULL
);

CREATE TABLE questions (
  Id Serial PRIMARY KEY NOT NULL,
  survey_id INT REFERENCES surveys(Id) ON DELETE CASCADE,
  question_text VARCHAR(255)
);

CREATE TABLE answers(
  id Serial PRIMARY KEY NOT NULL,
  answer_text VARCHAR(255),
  question_id INT REFERENCES questions(id) ON DELETE CASCADE
);

CREATE TABLE survey_responses(
  Id Serial PRIMARY KEY NOT NULL,
  survey_id INT REFERENCES surveys(id) ON DELETE CASCADE,
  response_date DATE
);

CREATE TABLE response_answer(
  Id Serial PRIMARY KEY NOT NULL,
  response_id INT REFERENCES survey_responses(id) ON DELETE CASCADE,
  answer_id INT REFERENCES answers(id) ON DELETE CASCADE,
  answer_rank INT NOT NULL
);