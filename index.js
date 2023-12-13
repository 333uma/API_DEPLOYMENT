const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('CricketTeam.db');

// Insert data into the 'player' table
const insertData = () => {
  const sql = 'INSERT INTO player(id, name, age, score, matches_played, city) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [9, 'Peter', 32, 23, 7, 'Haryana'];

  db.run(sql, values, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Data inserted successfully.');
    }

    // Close the database connection
    db.close();
  });
};

// Call the insertData function
insertData();