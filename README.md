<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Zodiac Sign</title>
</head>

<body>
<div id = "box">
    <h1> "There are things in life that you have no control over, but sometimes you have to work around and make it happen."</h1>
    </div>
    <h2> Enter your birthday. </h2>
    <h3>Your Birthmonth:  
        <input type="number" id="month" min="1" max="12" ></h3>
    <h3> Your Birthdate:  
        <input type="number" id="day" min="1" max="31"></h3>
    <a id="animated" onclick="zodiac()"  class="button">Enter </a>
    <p id="photo"></p>
    <p id= "space"> Your zodiac sign is <span id="output"></span> </p>
    
    <p id="characteristic"></p>
    
</body>
</html>
