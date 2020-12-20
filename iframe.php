<!DOCTYPE html>
<html>
<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    



    <link rel="stylesheet" type="text/css" href="css/economic.css" title="sheet" id="sheet" />
    
    <?php require_once("script/functions.php") ?>
	<title>Iframe</title>
    <style type="text/css">
        body{
  background-color: #F0FFF0;
}
table{
  background-color: #FFFFF0;
  border:0px solid black;
  box-shadow: 10px 10px 5px 5px rgba(0,0,0.1,0.1);
  border-radius: 5%;
}
button{
        box-shadow: 0px 0px 0px 0px rgba(0,0,0.1,0.1);
  border-radius: 10%;

      }

    </style>
</head>
<body>
    <div style="position: relative; left: 400px; top: 30px; right: 20px; text-align: left;">



	<table id="data_table" name="data_table">
<tr>
<td id="hovered_id" colspan="2">hover over map</td>
</tr>
<tr>
<td>Number of NGOs (district):</td>
<td id="data1">hover or select</td>
</tr>
</table>
    </div>

<div id="navbar" style="position: relative; left: 0px; top: -40px; ">
<button type="button" onclick="zoomin()" style="height: 35px; width: 35px;"><b>+</b></button><br>
<button type="button" onclick="zoomout()" style="height: 35px; width: 35px;"><b>-</b></button>
</div>
<?php 
include_once("db/mapofnepal.php")
?>
</body>
</html>