# Full Stack MySQL + Node.js + React Project

## 📌 Project Description
This project demonstrates a **full stack web application** setup using three main layers:

- **Database (XAMPP / MySQL + phpMyAdmin):** used to create and manage the relational database.  
- **Backend (Node.js + Express):** provides REST APIs to interact with the database.  
- **Frontend (React + Vite):** displays the query results in the browser.  

Together, these components form a simple but complete **full stack web-based app**.

---

## ⚙️ How to Run the Project

### 1. Database Setup (XAMPP / phpMyAdmin)
1. Start XAMPP and make sure **Apache** and **MySQL** services are running.  
2. Open **phpMyAdmin** (http://localhost/phpmyadmin).  
3. Create a database called `test` (or use the name you plan to put in `.env`).  
4. Run the following SQL to create the `students` table:

```sql
CREATE TABLE students (
  id SMALLINT, 
  name VARCHAR(100), 
  birthday DATE, 
  gpa FLOAT
);

INSERT INTO students VALUE (1, "peter", '1988-08-22', 3.1);
INSERT INTO students VALUE (2, "kathy", '1997-08-12', 3.2);
INSERT INTO students VALUE (3, "mike", '1999-08-02', 3.3);
INSERT INTO students VALUE (4, "john", '1998-06-13', 3.7);
```

You may add additional tables (like `Transcript`, `Courses`, etc.) to use in your queries.

---

### 2. Backend Setup (Node.js + Express)
1. Open a terminal in the `Backend` folder.  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Environment setup:  
   - In the `Backend` folder you will find a file named **`sample.env`**.  
   - **Rename** it to **`.env`**  
   - **Edit** the file to include your own **phpMyAdmin/MySQL credentials** and database name.  

   Example `.env`:  
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=testdb
   DB_PORT=3306
   PORT=8081
   ```

   ⚠️ Note: Never upload `.env` to GitHub — only keep `sample.env` as a template.  

4. Start the backend server:  
   ```bash
   npm start
   ```
5. Verify it works:  
   - [http://localhost:8081](http://localhost:8081) → backend welcome message  
   - [http://localhost:8081/listall](http://localhost:8081/listall) → JSON output of `students` table  

You will also see logs in the **VS Code terminal** when the backend starts and handles requests.

---

### 3. Frontend Setup (React + Vite)
1. Open a terminal in the `Frontend` folder.  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the frontend app:  
   ```bash
   npm run dev
   ```
4. Open your browser at:  
   - [http://localhost:5173](http://localhost:5173) → displays query results from the backend  

💡 **Output Explanation:**  
- In the **VS Code terminal**, you will see logs of API calls (from frontend → backend).  
- In the **browser**, you will see the homepage layout (from `App.jsx` + CSS) showing the query results in a table.  

✅ The correct output should look like this:

| id | name  | birthday  | gpa |
|----|-------|-----------|-----|
| 1  | peter | 8/22/1988 | 3.1 |
| 2  | kathy | 8/12/1997 | 3.2 |
| 3  | mike  | 8/2/1999  | 3.3 |
| 4  | john  | 6/13/1998 | 3.7 |

---

## 📄 Deliverables
- Working **Backend** and **Frontend** apps.  
- `sql.txt` file containing all **10 SQL queries**.  
- GitHub repo including:  
  - `Backend/` and `Frontend/` folders  
  - A `.env` file created locally (with your phpMyAdmin info, **not uploaded**)  
  - `.gitignore` excluding `.env` and `node_modules`  
  - Updated `README.md`  

---

## ✅ Grading Notes
- Your grade is based on:  
  - Correctness and fluency of **SQL queries**  
  - Successful **execution** of the backend and frontend  
  - Ability to **explain the results** clearly  
