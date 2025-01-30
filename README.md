SQL Exmaples: 

1. Create three tables in SQL: Student, Courses and Transcripts, where Transcripts record the crscode, the studentId, and the semester that the student takes the class, and the final letter grade (VARCHAR(2)): (very much chatgpt can generate the following statements based on the previous statement)

-- Create the 'Student' table
CREATE TABLE Student (
    studentId INT PRIMARY KEY,       -- Unique ID for the student
    firstName VARCHAR(50),           -- Student's first name
    lastName VARCHAR(50),            -- Student's last name
    dateOfBirth DATE                 -- Student's date of birth
);

-- Create the 'Courses' table
CREATE TABLE Courses (
    crscode VARCHAR(10) PRIMARY KEY, -- Unique course code (e.g., CS101)
    courseName VARCHAR(100),         -- Name of the course
    department VARCHAR(50)           -- Department offering the course (e.g., Computer Science)
);

-- Create the 'Transcripts' table
CREATE TABLE Transcripts (
    studentId INT,                  -- Foreign key to 'Student' table
    crscode VARCHAR(10),             -- Foreign key to 'Courses' table
    semester VARCHAR(20),           -- Semester when the course was taken (e.g., Fall 2023)
    grade VARCHAR(2),               -- Final letter grade (e.g., A, B+, C-)
    PRIMARY KEY (studentId, crscode, semester), -- Composite primary key
    FOREIGN KEY (studentId) REFERENCES Student(studentId),
    FOREIGN KEY (crscode) REFERENCES Courses(crscode)
);


2. create INSERT statements to insert in each table 10 tuples, make sure the foreign key constraints are respected. (very much chatgpt can generate the following)

INSERT INTO Student (studentId, firstName, lastName, dateOfBirth) VALUES
(1, 'Alice', 'Johnson', '2001-04-15'),
(2, 'Bob', 'Smith', '2000-08-22'),
(3, 'Charlie', 'Brown', '1999-12-30'),
(4, 'David', 'Lee', '2002-02-11'),
(5, 'Eva', 'Garcia', '2001-09-05'),
(6, 'Frank', 'Davis', '1998-11-17'),
(7, 'Grace', 'Martinez', '2000-01-25'),
(8, 'Hannah', 'Harris', '2002-07-19'),
(9, 'Isaac', 'Clark', '1999-06-12'),
(10, 'Jack', 'Walker', '2001-05-03');


INSERT INTO Courses (crscode, courseName, department) VALUES
('CS101', 'Introduction to Computer Science', 'Computer Science'),
('MATH101', 'Calculus I', 'Mathematics'),
('ENG101', 'English Composition', 'English'),
('BIO101', 'Introduction to Biology', 'Biology'),
('CHEM101', 'General Chemistry', 'Chemistry'),
('HIST101', 'World History', 'History'),
('CS102', 'Data Structures', 'Computer Science'),
('MATH102', 'Linear Algebra', 'Mathematics'),
('PSY101', 'Introduction to Psychology', 'Psychology'),
('PHYS101', 'Physics I', 'Physics');


INSERT INTO Transcripts (studentId, crscode, semester, grade) VALUES
(1, 'CS101', 'Fall 2023', 'A'),
(1, 'MATH101', 'Fall 2023', 'B+'),
(2, 'ENG101', 'Spring 2023', 'A-'),
(2, 'BIO101', 'Spring 2023', 'B'),
(3, 'CHEM101', 'Fall 2023', 'C+'),
(3, 'HIST101', 'Fall 2023', 'B'),
(4, 'CS102', 'Spring 2023', 'A'),
(4, 'MATH102', 'Spring 2023', 'B'),
(5, 'PSY101', 'Fall 2023', 'A+'),
(5, 'PHYS101', 'Fall 2023', 'B-');

3. create 10  interesting select statements from Students table:

  1) SELECT studentId, CONCAT(firstName, ' ', lastName) AS fullName FROM Student;
  2) SELECT studentId, firstName, lastName, dateOfBirth
     FROM Student
     WHERE dateOfBirth > '2001-01-01';
  3) SELECT studentId, firstName, lastName, dateOfBirth
     FROM Student
     WHERE firstName = 'Alice';
  4) SELECT COUNT(*) AS totalStudents FROM Student;
  5) SELECT studentId, firstName, lastName, dateOfBirth
     FROM Student
     ORDER BY dateOfBirth DESC
     LIMIT 1;
  6) SELECT studentId, firstName, lastName, dateOfBirth
     FROM Student
     WHERE lastName LIKE 'B%';
  7) SELECT studentId, firstName, lastName, dateOfBirth
     FROM Student
     WHERE YEAR(dateOfBirth) = 2001;
  8) SELECT studentId, firstName, lastName, dateOfBirth
     FROM Student
     LIMIT 5;
  9) SELECT studentId, firstName, lastName, dateOfBirth,
     FLOOR(DATEDIFF(CURRENT_DATE, dateOfBirth) / 365.25) AS age
     FROM Student;
  10) SELECT studentId, firstName, lastName, dateOfBirth
      FROM Student
      WHERE MONTH(dateOfBirth) = 4;

-----------------------------------------------------------------------------------
3. create 5  interesting select statements from the Courses table:
   1) SELECT crscode, courseName, department
      FROM Courses;
   2) SELECT crscode, courseName
      FROM Courses
      WHERE department = 'Computer Science';
   3) SELECT department, COUNT(*) AS totalCourses
      FROM Courses
      GROUP BY department;
   4) SELECT crscode, courseName
      FROM Courses
      WHERE courseName LIKE '%Introduction%';
   5) SELECT crscode, courseName
      FROM Courses
      ORDER BY LENGTH(courseName) DESC
      LIMIT 10;

------------------------------------------------------------------------------------------
4. create 5  interesting select statements from the Transcripts table:
   1) SELECT studentId, crscode, semester, grade
      FROM Transcripts;
   2) SELECT studentId, crscode, semester
      FROM Transcripts
      WHERE grade = 'A';
   3) SELECT studentId, COUNT(DISTINCT crscode) AS totalCourses
      FROM Transcripts
      GROUP BY studentId;
   4) SELECT studentId, crscode, COUNT(DISTINCT semester) AS semestersTaken
      FROM Transcripts
      GROUP BY studentId, crscode
      HAVING semestersTaken > 1;
   5) SELECT studentId, crscode, COUNT(DISTINCT semester) AS semestersTaken
      FROM Transcripts
      GROUP BY studentId, crscode
      HAVING semestersTaken > 1;
   6) SELECT crscode, COUNT(DISTINCT studentId) AS totalStudents
      FROM Transcripts
      GROUP BY crscode
      ORDER BY totalStudents DESC
      LIMIT 5;
   7) SELECT studentId, crscode, semester, grade
      FROM Transcripts
      WHERE grade IN ('D+', 'D', 'D-', 'F');
   8) SELECT studentId, crscode, grade
      FROM Transcripts
      WHERE semester = 'Fall 2023';
   9) SELECT studentId
      FROM Transcripts
      WHERE crscode IN ('CS101', 'MATH101')
      GROUP BY studentId
      HAVING COUNT(DISTINCT crscode) = 2;
   10) SELECT studentId, semester, COUNT(DISTINCT crscode) AS coursesTaken
        FROM Transcripts
        GROUP BY studentId, semester
        ORDER BY coursesTaken DESC
        LIMIT 1;
---------------------------------------------------------------------------------------------------------------------------------



   
   
   


