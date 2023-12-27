1. Access online SQL at: https://www.programiz.com/sql/online-compiler/
2. Create 10 tables using SQL CREATE table statements; 
3. INSERT at least 10 tuples into each of the above table using the INSERT statements;
4. Execute 10 DELETE statements, each statement should be different from each other;
5. Execute 10 UPDATE statements, each statement should be different from each other.
6. Please explain in voice and show in your video the result of each statement. Submit all SQL statements in a file called sql.txt. 


Note: The grading will be based on your fluency of SQL and explanation skill of the result. 


---- the following is just an example: 


CREATE TABLE restaurants(
     id SMALLINT,
     name VARCHAR(100),
     street VARCHAR(100),
     city VARCHAR(50),
     state VARCHAR(50),
     zipcode VARCHAR(5),
     rating FLOAT,
     cuisine VARCHAR(50),
     PRIMARY KEY(id)
);


INSERT INTO restaurants (id, name, street, city, state, zipcode, rating, cuisine)
VALUES
  (1, 'Restaurant1', 'Street1', 'City1', 'State1', '12345', 4.2, 'Cuisine1'),
  (2, 'Restaurant2', 'Street2', 'City2', 'State2', '67890', 3.8, 'Cuisine2'),
  (3, 'Restaurant3', 'Street3', 'City3', 'State3', '23456', 4.5, 'Cuisine3'),
  (4, 'Restaurant4', 'Street4', 'City4', 'State4', '78901', 3.9, 'Cuisine4'),
  (5, 'Restaurant5', 'Street5', 'City5', 'State5', '34567', 4.1, 'Cuisine5'),
  (6, 'Restaurant6', 'Street6', 'City6', 'State6', '89012', 4.0, 'Cuisine6'),
  (7, 'Restaurant7', 'Street7', 'City7', 'State7', '45678', 4.3, 'Cuisine7'),
  (8, 'Restaurant8', 'Street8', 'City8', 'State8', '90123', 3.7, 'Cuisine8'),
  (9, 'Restaurant9', 'Street9', 'City9', 'State9', '56789', 4.4, 'Cuisine9'),
  (10, 'Restaurant10', 'Street10', 'City10', 'State10', '01234', 3.5, 'Cuisine10');

CREATE TABLE reviews(
    id SMALLINT,
    reviewer VARCHAR(50),
    rating FLOAT,
    comment VARCHAR(200),
    postedtime DATETIME,
    UNIQUE(reviewer)
)    


CREATE TABBLE users(
   id SMALLINT,
   username VARCHAR(50),
   password VARCHAR(50),
   email VARCHAR(320),
   phone VARHCAR(50), 
   status VARCHAR(50)
)

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (1, 'Reviewer1', 4.2, 'Great experience!', '2023-01-01 08:00:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (2, 'Reviewer2', 3.8, 'Could be better.', '2023-01-02 10:30:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (3, 'Reviewer3', 4.5, 'Excellent service!', '2023-01-03 12:45:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (4, 'Reviewer4', 3.9, 'Average experience.', '2023-01-04 14:15:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (5, 'Reviewer5', 4.1, 'Loved the food!', '2023-01-05 16:30:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (6, 'Reviewer6', 4.0, 'Nice ambiance.', '2023-01-06 18:45:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (7, 'Reviewer7', 4.3, 'Highly recommended!', '2023-01-07 20:00:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (8, 'Reviewer8', 3.7, 'Could improve cleanliness.', '2023-01-08 22:15:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (9, 'Reviewer9', 4.4, 'Amazing staff!', '2023-01-09 23:30:00');

INSERT INTO reviews (id, reviewer, rating, comment, postedtime)
VALUES (10, 'Reviewer10', 3.5, 'Not satisfied.', '2023-01-10 01:45:00');


SELECT * FROM restaurants WHERE city = 'City3';

SELECT * FROM restaurants ORDER BY rating DESC;

SELECT DISTINCT cuisine FROM restaurants;

SELECT state, COUNT(*) AS restaurant_count FROM restaurants GROUP BY state;

SELECT * FROM restaurants WHERE rating > 4.0;

SELECT * FROM reviews WHERE reviewer = 'SpecificReviewer';


SELECT * FROM reviews WHERE reviewer = 'Reviewer4';

SELECT AVG(rating) AS average_rating FROM reviews;

SELECT * FROM reviews WHERE postedtime >= CURDATE() - INTERVAL 7 DAY;

SELECT reviewer, COUNT(*) AS review_count FROM reviews GROUP BY reviewer ORDER BY review_count DESC LIMIT 1;

SELECT * FROM reviews WHERE LOWER(comment) LIKE '%delicious%';


SELECT r.name AS restaurant_name, AVG(re.rating) AS average_rating
FROM restaurants r, reviews re
WHERE r.id = re.id
GROUP BY r.id;






  
