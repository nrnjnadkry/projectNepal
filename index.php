<?php require_once("includes/header.php") ?>
    
    <form name="Test_Insecure">
     <div style="background-color: #B0E0E6 ">

        
        <select id="Province" name="Province" onchange="getProvId();">
            <option>Select Province</option>
            <option value="1">Prov 1</option>
            <option value="2">Prov 2</option>
            <option value="3">Prov 3</option>
            <option value="4">Prov 4</option>
            <option value="5">Prov 5</option>
            <option value="6">Prov 6</option>
            <option value="7">Prov 7</option>
        </select>
        <select id="District" name="District" onchange="getLocalId();">
            <option>Select District</option>
        </select>
        <select id="Local" name="Local" onchange="getUnit();">
            <option>Select Local Unit</option>
        </select>
        <select id="Wards" name="Wards" onchange="getData();">
            <option>Select Ward</option>
        </select>
     </div>

    </form>
    <div style="position: relative; left: 800px; top: 50px; right: 200px;" >
    <table id="data_table" name="data_table">
        
        <tr>
            <th>Total Establishment</th>
            <th>Total Population Engaged</th>
        </tr>
        <tr>
            <td id="enst">Select Ward</td>
            <td id="tot_pop">Select Ward</td>
        </tr>
        <tr>
            <th>Total Male Population Engaged</th>
            <th>Total Female Population Engaged</th>
        </tr>
        <tr>
            <td id="male_pop">Select Ward</td>
            <td id="female_pop">Select Ward</td>
        </tr>
    </table>

<?php /* ?>
    <div style="position: relative; left: 600px; top: 40px;">
    <table id="identity" name="identity">
        <tr>
            <td id="hovered_id">hover over map</td>
        </tr>
    </table>
</div>
<?php */ ?>
<div id="content-frame" style="position:relative; left: -780px; top: -250px;">
<iframe class="menu" src="iframe.php" frameborder="1" width="750" height="415" scrolling="no" ></iframe>
</div>



<?php 
 //include_once("db/mapofnepal.php")
?>



<?php
 require_once("includes/footer.php")  
 ?>

    