# create table customers
CREATE TABLE customers (
    customerId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25),
    email VARCHAR(25)
);

# create table subjects
CREATE TABLE subjects (
    subjectId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    subjectName VARCHAR(20)
);

# create table mapping
CREATE TABLE mapping (
    mappingId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    customerId INT REFERENCES customers(customers) ON DELETE CASCADE,
    subjectId INT REFERENCES subjects(subjectId) ON DELETE CASCADE
);

# insert values into customers
INSERT INTO customers(name, email) VALUES('ravi', 'ravi123@gmail.com');
INSERT INTO customers(name, email) VALUES('krishan', 'krishan11@gmail.com');
INSERT INTO customers(name, email) VALUES('sameer', 'sameer44@gmail.com');

# insert values into subjects
INSERT INTO subjects(subjectName) VALUES('English');
INSERT INTO subjects(subjectName) VALUES('Hindi');
INSERT INTO subjects(subjectName) VALUES('Maths');

# insert values into studet subject mapping
INSERT INTO mapping(customerId, subjectId) VALUES(1, 1);
INSERT INTO mapping(customerId, subjectId) VALUES(1, 2);
INSERT INTO mapping(customerId, subjectId) VALUES(1, 3);
INSERT INTO mapping(customerId, subjectId) VALUES(2, 1);
INSERT INTO mapping(customerId, subjectId) VALUES(3, 3);

# peform the query
SELECT 
    c.customerId,
    c.name,
    GROUP_CONCAT(
        s.subjectName
    ) as subjects
FROM customers c, mapping m, subjects s
WHERE 
    c.customerId = m.customerId AND 
    s.subjectId = m.subjectId
GROUP BY c.name
ORDER BY customerId;


# All the magics are done by this (GROUP_CONCAT) command.