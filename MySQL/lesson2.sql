INSERT INTO user(age, name) VALUES (21, 'Anna');

INSERT INTO user(age) VALUES (17);

INSERT INTO car(user_id, model) VALUES (8, 'Lacetti');


SELECT * FROM user
JOIN car ON user.id = car.user_id;


USE `feb-2021`;

SELECT
	s.name,
    s.age,
    l.label
FROM ratings r
JOIN students s ON r.student_id = s.id
JOIN lesson l ON l.id = r.lesson_id
WHERE s.id = 7;


SELECT CONCAT(name, ' ', age) AS fullName FROM students;

SELECT * FROM students
WHERE id IN ( SELECT student_id FROM ratings WHERE rating = 5 );


SELECT student_id FROM ratings WHERE rating = 5;


-- Пошук дублів наприклад
-- SELECT email, count(email) as count_email GROUP BY email HAVING count_email > 1;

SELECT * FROM car JOIN user ON car.user_id = user.id;

SELECT * FROM car LEFT JOIN user ON car.user_id = user.id;

SELECT * FROM car RIGHT JOIN user ON car.user_id = user.id;
