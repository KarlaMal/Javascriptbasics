*{
    padding:0;
    margin:0;
}
#container{
    height: 600px;
    width:900px;
    background-color: navy;

}
#header{
    height: 50px;
    width: 880px;
    background-color: red; 
    color: white;
    border-radius: 10px;
    margin:10px;

}
#link{
    height:250px;
    width:200px;
    background-color: teal;
    display: inline-block;
    vertical-align: top;
    color:white;
    padding:15px;
    border-radius: 10px;
    margin:10px;
}
#body{
    height: 400px;
    width: 550px;
    background-color: black;
    display: inline-block;
    color:white;
    padding:15px;
    border-radius: 10px;
    margin:10px;

}
#bottom{
    width: 850px;
    height: 30px;
    background-color: lightslategray;
    color:white;
    padding:20px;
    display: block;
    border-radius: 10px;
    margin-top:15px;


}
span{
    color: mediumaquamarine;
    text-decoration: underline;
}
ul{
    margin:10px;
}
li{
    margin-left:25px;
}
h1{
    margin:10px;
}


line-height

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="javascriptbasics.css">    

</head>
<body>
    <div id="container">
        <div id="header">
            <h1>JavaScript Basics</h1>
        </div>
        <div id="link">
            <span>
                <p>Home
                    <ul>
                        <li>JavaScript Overview</li>
                            <ul>
                                <li>Variable Declaration</li>
                                <li>Variable Assignment</li>
                                <li>Data Types</li>
                                <li>Conditionals</li>
                                <li>Loops</li>
                                <li>Functions</li>
                            </ul>
                        <li>Projects</li>
                        <li>Assignments</li>
                        <li>Quiz</li>
                    </ul>
                </p>
            </span>
        </div>
        <div id="body">
            <h1>JavaScript Basics</h1>
            <ul>
                <p>JavaScript is a cross-platform, object-oriented scripting language. JavaScript is extremely popular for a variety of reasons. It is a small and lightweight language allowing maximum flexibility for developers to take it in a bunch of different directions. JavaScript lives inside host environment (a web browser or Node server), it can be connected to the objects of these environments to provide programmatic control over them. </p>

                <li>
                    <p><span>Variable Declaration </span> JavaScript variables are containers for storing data valies-imagine a cup you fill with coffee, the cup holds the coffee, a variable holds a value. All JavaScript variables must be identified with unique names, These unique names are called identifiers. var x;</p>
                </li>

                <li>
                    <p><span>Variable Assignment </span>Assignment operators assign values to JavaScript variables -our cup can now have coffee poured in it, giving our variable a value to hold. The = assignment operator assigns a value to a variable. var x = 10; </p>
                </li>

                <li>
                    <p><span>Data Types</span> Data types are an important concept; to be able to operate on variables you need to know the data type. There are six data types that are JavaScript primitives: Boolean - true or false; null - null aka nothing; Number - 42 or 3.14159; String - "Coding Dojo Rocks!"; Array - [1, 'Coding', 2, 'Dojo']; and Object - {first_name:'Jane', last_name:'Doe'} </p>
                </li>
            </ul>
        </div>
        <div id="bottom">
            <p>For more information check out this url: <span>JavaScript!</span></p>
        </div>
    </div>
</body>
</html>


