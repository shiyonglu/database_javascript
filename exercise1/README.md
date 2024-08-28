1. Access online SQL at: https://www.programiz.com/sql/online-compiler/
2. Create 10 tables using SQL CREATE table statements; 
3. INSERT at least 10 tuples into each of the above table using the INSERT statements;
4. Execute 10 DELETE statements, each statement should be different from each other;
5. Execute 10 UPDATE statements, each statement should be different from each other.
6. Please explain in voice and show in your video the result of each statement. Submit all SQL statements in a file called sql.txt. 


Note: The grading will be based on your fluency of SQL and explanation skill of the result. 


---- the following is just an example: 

```SQL

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

ALTER TABLE restaurants
CHANGE id restaurant_id INTEGER;

INSERT INTO restaurants VALUES(1, "Pizza Tavern", "123 Pawn Street", "CityValley", "MI", "33765", 4.1, "Italian");

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

DELETE
FROM restaurants
WHERE restaurant_id = 3;

CREATE TABLE users( id SMALLINT, username VARCHAR(50), password VARCHAR(50), email VARCHAR(320), phone VARCHAR(50), status VARCHAR(50));

CREATE table users(
   id SMALLINT,
   username VARCHAR(50),
   password VARCHAR(50),
   email VARCHAR(320),
   phone VARCHAR(50), 
   status VARCHAR(50),
   PRIMARY KEY(id)
);

INSERT INTO users VALUES (1, "luke", "xp34!oo3#11!", "luke2023@gmail.com", "313-234-4566", "Junior");

INSERT INTO users VALUES (2, "leia", "secret@pass", "leia@gmail.com", "415-123-7890", "Senior");

INSERT INTO users VALUES (3, "han", "falcon123", "han_solo@gmail.com", "818-345-6789", "Captain");

INSERT INTO users VALUES (4, "chewie", "roar456", "chewbacca@gmail.com", "555-987-6543", "Co-Pilot");

INSERT INTO users VALUES (5, "obiwan", "jedi_master", "obiwan@gmail.com", "212-555-1234", "Master");

INSERT INTO users VALUES (6, "padme", "queen123", "padme@gmail.com", "703-321-7654", "Senator");

INSERT INTO users VALUES (7, "anakin", "chosen1", "anakin_skywalker@gmail.com", "310-789-2345", "Apprentice");

INSERT INTO users VALUES (8, "yoda", "force123", "yoda@gmail.com", "415-678-9012", "Master");

INSERT INTO users VALUES (9, "macewindu", "purple123", "macewindu@gmail.com", "202-123-4567", "Council Member");

INSERT INTO users VALUES (10, "palpatine", "sithlord", "palpatine@gmail.com", "666-666-6666", "Emperor");

ALTER TABLE users
DROP COLUMN id;

CREATE TABLE reviews(
    id SMALLINT,
    reviewer VARCHAR(50),
    rating FLOAT,
    comment VARCHAR(200),
    postedtime DATETIME,
    UNIQUE(reviewer)
);



INSERT INTO reviews VALUES (1, 'luke', 4.5, 'Great food and service!', '2023-01-01 12:30:00');

INSERT INTO reviews VALUES (2, 'leia', 5.0, 'Amazing experience! Loved it.', '2023-01-02 15:45:00');

INSERT INTO reviews VALUES (3, 'han', 3.8, 'Decent food, but service could be improved.', '2023-01-03 18:20:00');

INSERT INTO reviews VALUES (4, 'chewie', 4.2, 'Roarrr! Delicious as always.', '2023-01-04 20:10:00');

INSERT INTO reviews VALUES (5, 'obiwan', 4.7, 'The Force is strong with this restaurant.', '2023-01-05 14:00:00');

INSERT INTO reviews VALUES (6, 'padme', 4.0, 'Nice ambiance, but portions could be larger.', '2023-01-06 19:30:00');

INSERT INTO reviews VALUES (7, 'anakin', 3.5, 'Not impressed. Expected better.', '2023-01-07 22:45:00');

INSERT INTO reviews VALUES (8, 'yoda', 4.8, 'Delightful, the meal was. Recommend, I will.', '2023-01-08 16:15:00');

INSERT INTO reviews VALUES (9, 'macewindu', 3.9, 'Average. Nothing special.', '2023-01-09 11:55:00');

INSERT INTO reviews VALUES (10, 'palpatine', 2.5, 'Terrible service. Will not return.', '2023-01-10 08:40:00');

ALTER TABLE reviews
CHANGE id restaurant_id INTEGER;

ALTER TABLE users
DROP COLUMN id;

ALTER TABLE users
ADD PRIMARY KEY (username);

SELECT * FROM restaurants WHERE city = 'City3';

SELECT * FROM restaurants ORDER BY rating DESC;

SELECT DISTINCT cuisine FROM restaurants;

SELECT state, COUNT(*) AS restaurant_count FROM restaurants GROUP BY state;

SELECT * FROM restaurants WHERE rating > 4.0;

SELECT * FROM reviews WHERE reviewer = 'Reviewer4';

SELECT AVG(rating) AS average_rating FROM reviews;

SELECT * FROM reviews WHERE DATE(postedtime) = '2023-01-10'; 


SELECT reviewer, COUNT(*) AS review_count FROM reviews GROUP BY reviewer ORDER BY review_count DESC LIMIT 1; // select the reviewer who gives the most number of reviews

SELECT * FROM reviews WHERE LOWER(comment) LIKE '%delicious%';


SELECT r.name AS restaurant_name, AVG(re.rating) AS average_rating           // average rating for each restaurant
FROM restaurants r, reviews re
WHERE r.id = re.id
GROUP BY r.id;
```





  
