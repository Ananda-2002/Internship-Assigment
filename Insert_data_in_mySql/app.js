const values = [{
    email: "anurag11@yopmail.com",
    name: "anurag"
},
{
    email: "sameer11@yopmail.com",
    name: "sameer"
},
{
    email: "ravi11@yopmail.com",
    name: "ravi"
},
{
    email: "akash11@yopmail.com.com",
    name: "akash"
},
{
    email: "anjali11@yopmail.com",
    name: "anjali"
},
{
    email: "santosh11@yopmail.com",
    name: "santosh"
},
];


// start from here (npm install mysql)

var mysql = require('mysql');

// create a connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'phonelogin'
});

// connection Handler
const connectionQuery = (props, value = null) => {
    connection.query(props, function (error, results) {
        if (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                // 				if dublicate entry found, update the name
                let insert_q = `UPDATE customers SET name = '${value.name}' WHERE email='${value.email}'`;
                connectionQuery(insert_q);
                console.log('err')
            } else
                console.log(error);
        } else
            console.log(results);
    });
}

// create a table 
const create_table = `CREATE TABLE customers (
email VARCHAR(255) PRIMARY KEY,
name VARCHAR(255),
created_at TIMESTAMP DEFAULT NOW()
);`;

// execute create table command
connectionQuery(create_table);


// insert values into the table 
for (const value of values) {
    let insert_q = `INSERT INTO customers (email, name) VALUES ('${value.email}', '${value.name}')`;
    connectionQuery(insert_q, value);
}


// terminate the connection
// connection.end();