INSERT INTO survey_creator (Phone_number, name, email)
VALUES ('222-222-2222', 'bob', 'bob@email.com');

INSERT INTO surveys (surveycreator_id, admin_url, Share_url)
VALUES (1, 'generated?', 'generatedshared?');

INSERT INTO questions (survey_id, question_text)
VALUES (1, 'What is a better cat?');

INSERT INTO answers (answer_text, question_id)
VALUES ('Tabby', 1);
INSERT INTO answers (answer_text, question_id)
VALUES ('Wild', 1);
INSERT INTO answers (answer_text, question_id)
VALUES ('Black', 1);


INSERT INTO survey_responses (survey_id, response_date)
VALUES (1, '2023-07-20T07:00:00.000Z');

INSERT INTO response_answer (response_id, answer_id, answer_rank)
VALUES (1, 1, 2);
INSERT INTO response_answer (response_id, answer_id, answer_rank)
VALUES (1, 2, 1);
INSERT INTO response_answer (response_id, answer_id, answer_rank)
VALUES (1, 3, 3);
