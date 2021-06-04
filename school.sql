-- Students

CREATE TABLE IF NOT EXISTS students (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  	name VARCHAR(30),
  	city varchar(30)
  	
);
INSERT INTO students(name,city) 
VALUES ( "Véronique",
        "Paris" );


INSERT INTO students(name,city) 
VALUES ( "Steeven",
        "Lyon"
       );

INSERT INTO students(name,city) 
VALUES ( "Marc",
        "Marseille"
       );


INSERT INTO students(name,city) 
VALUES ( "Nour",
        "Lyon"
       );


INSERT INTO students(name,city) 
VALUES ( "Romain",
        "Paris"
       );

INSERT INTO students(name,city) 
VALUES ( "Sophie",
        "Paris"
    );

 SELECT * from students



    --  Languages

CREATE TABLE IF NOT EXISTS languages (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  	name VARCHAR(30)
  	
  	
);

INSERT INTO languages(name) 
VALUES ( "French")

INSERT INTO languages(name) 
VALUES ( "English")

INSERT INTO languages(name) 
VALUES ( "German")

INSERT INTO languages(name) 
VALUES ( "Spanish")

INSERT INTO languages(name) 
VALUES ( "Mandarin")


SELECT * from languages

-- Favorites


CREATE TABLE IF NOT EXISTS favorites (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   class VARCHAR(30),
   sport varchar(30),
   student_id SMALLINT
  	
  	
);

INSERT INTO favorites(class,sport,student_id) 
VALUES ( "Maths", "Cricket",2)

INSERT INTO favorites(class,sport,student_id) 
VALUES ( "Music", "Hip-hop",6)

INSERT INTO favorites(class,sport,student_id) 
VALUES ( "Arts", "Boxing",1)

INSERT INTO favorites(class,sport,student_id) 
VALUES ( "Literature", "Tennis",3)

INSERT INTO favorites(class,sport,student_id) 
VALUES ( "Computer science", "Tennis",5)

INSERT INTO favorites(class,sport,student_id) 
VALUES ( "Arts", "Baseball",4)

SELECT * from favorites


-- Students languages


CREATE TABLE IF NOT EXISTS students_languages (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   student_id INt,
   languages_id int
   
);

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 1,1)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 1,2)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 2,1)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 2,3)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 3,1)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 4,1)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 4,2)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 4,4)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 4,5)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 5,1)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 5,5)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 6,1)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 6,2)

INSERT INTO students_languages(student_id , languages_id) 
VALUES ( 6,3)


SELECT * from students_languages


--Rapport lvl 1


SELECT *
FROM students
WHERE id =3


SELECT *
FROM students
WHERE id =6

SELECT students.name ,students.city
FROM students
WHERE id =1

SELECT students.name 
FROM students
WHERE id =2

SELECT *
FROM students
WHERE city="Paris"

SELECT students.name
FROM students
WHERE city="Lyon"



--Rapport lvl 2


SELECT *
FROM students
INNER JOIN favorites ON students.id = favorites.student_id
WHERE students.id=5

SELECT students.name,favorites.sport
FROM students
INNER JOIN favorites ON students.id = favorites.student_id
WHERE students.id=4

SELECT students.name,favorites.class
FROM students
INNER JOIN favorites ON students.id = favorites.student_id
WHERE students.id=1

SELECT *
FROM students
INNER JOIN favorites ON students.id = favorites.student_id
WHERE favorites.class="Music"

SELECT students.name
FROM students
INNER JOIN favorites ON students.id = favorites.student_id
WHERE favorites.sport="Tennis"

SELECT students.name
FROM students
INNER JOIN favorites ON students.id = favorites.student_id
WHERE favorites.class="Arts"

SELECT COUNT(students.name)
FROM students
WHERE students.city="Paris"


--Rapport lvl 3

SELECT languages.name, students.id, students.city , students.name
FROM students_languages
INNER JOIN  students ON students.id=students_languages.student_id
INNER JOIN  languages on languages.id=students_languages.languages_id
WHERE students.id=1


SELECT languages.name, students.id, students.city , students.name
FROM students_languages
INNER JOIN  students ON students.id=students_languages.student_id
INNER JOIN  languages on languages.id=students_languages.languages_id
WHERE students.id=4

SELECT languages.name , students.name
FROM students_languages
INNER JOIN  students ON students.id=students_languages.student_id
INNER JOIN  languages on languages.id=students_languages.languages_id
WHERE students.id=5