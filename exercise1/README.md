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

INSERT INTO restaurants VALUES(2, "Pizza Palace", "123 Main Street", "Cityville", "CA", "98765", 4.2, "Italian");

INSERT INTO restaurants VALUES(3, "Sushi Haven", "456 Oak Avenue", "Townburg", "NY", "54321", 4.8, "Japanese");

INSERT INTO restaurants VALUES(4, "Taco Town", "789 Maple Lane", "Burrito City", "TX", "12345", 3.9, "Mexican");

INSERT INTO restaurants VALUES(5, "Pasta Paradise", "101 Pine Road", "Spaghettiville", "FL", "67890", 4.1, "Italian");

INSERT INTO restaurants VALUES(6, "Steakhouse Supreme", "202 Cedar Drive", "Grillington", "AZ", "54321", 4.7, "Steakhouse");

INSERT INTO restaurants VALUES(7, "Seafood Shack", "303 Birch Street", "Fishville", "CA", "87654", 4.4, "Seafood");

INSERT INTO restaurants VALUES(8, "Veggie Delight", "404 Elm Boulevard", "Greensburg", "CO", "34567", 4.0, "Vegetarian");

INSERT INTO restaurants VALUES(9, "BBQ Bliss", "505 Walnut Lane", "Smoketown", "TX", "23456", 4.6, "Barbecue");

INSERT INTO restaurants VALUES(10, "Mediterranean Magic", "606 Oak Street", "Olivetown", "FL", "65432", 4.3, "Mediterranean");

INSERT INTO restaurants VALUES(11, "Breakfast Bistro", "707 Pine Avenue", "Morningville", "NY", "78901", 4.2, "Breakfast");

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






  
