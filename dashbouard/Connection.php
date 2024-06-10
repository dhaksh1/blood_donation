<?php
$servername = "localhost"; // or your server address
$username = "root"; // your MySQL username
$password = ""; // your MySQL password
$dbname = "donors"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo("");