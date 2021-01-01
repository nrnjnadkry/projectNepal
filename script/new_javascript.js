var canChange = true;
var unlocked = true;
class Unit {
    /*This is made with the intention of treating a local unit as a datatype so we may easily
    interact with the properties of local unit*/
    constructor() {
        let local_unit = null;
        let local_unit_code = 0;
        let local_unit_province = null;
        let local_unit_district = null;
        let err_code = 0;
        let local_unit_population = null;
        var district_list = ['Taplejung ', 'Panchthar ', 'Ilam ', 'Jhapa ', 'Morang ', 'Sunsari ', 'Dhankuta ', 'Terhathum ', 'Sankhuwasabha ', 'Bhojpur ', 'Solukhumbu ', 'Okhaldhunga ', 'Khotang ', 'Udayapur ', 'Saptari ', 'Siraha ', 'Dhanusa ', 'Mahottari ', 'Sarlahi ', 'Sindhuli ', 'Ramechhap ', 'Dolakha ', 'Sindhupalchok ', 'Kavrepalanchok ', 'Lalitpur ', 'Bhaktapur ', 'Kathmandu ', 'Nuwakot ', 'Rasuwa ', 'Dhading ', 'Makwanpur ', 'Rautahat ', 'Bara ', 'Parsa ', 'Chitawan ', 'Gorkha ', 'Lamjung ', 'Tanahu ', 'Syangja ', 'Kaski ', 'Manang ', 'Mustang ', 'Myagdi ', 'Parbat ', 'Baglung ', 'Gulmi ', 'Palpa ', 'Nawalparasi West ', 'Rupandehi ', 'Kapilbastu ', 'Arghakhanchi ', 'Pyuthan ', 'Rolpa ', 'Rukum West ', 'Salyan ', 'Dang ', 'Banke ', 'Bardiya ', 'Surkhet ', 'Dailekh ', 'Jajarkot ', 'Dolpa ', 'Jumla ', 'Kalikot ', 'Mugu ', 'Humla ', 'Bajura ', 'Bajhang ', 'Achham ', 'Doti ', 'Kailali ', 'Kanchanpur ', 'Dadeldhura ', 'Baitadi ', 'Darchula ', 'Nawalparasi East ', 'Rukum East'];
        var district_count = [9, 17, 27, 42, 59, 72, 79, 85, 95, 104, 112, 120, 130, 139, 158, 175, 193, 208, 228, 237, 245, 254, 266, 279, 285, 289, 300, 314, 319, 332, 344, 362, 379, 395, 403, 414, 422, 432, 443, 448, 452, 457, 464, 471, 482, 494, 504, 511, 528, 538, 544, 553, 563, 569, 579, 589, 597, 607, 616, 627, 634, 642, 650, 659, 663, 670, 680, 693, 704, 714, 727, 737, 744, 754, 763, 773, 777];
    }
    /*We may replace getUnitDistrict with a ajax & php in future. THis is just a stop gap*/
    getUnitProvince(local_unit) {
        this.local_unit = local_unit;
        var province_list = [1, 2, 'Bagmati', 2, 'Bagmati', 'Gandaki', 5, 'Karnali', 5, 'Karnali', 'Sudur Pashchim', 'Gandaki', 5];
        var province_count = [139, 228, 344, 395, 403, 482, 563, 579, 607, 670, 763, 773, 777];
        var num = local_unit.split('_')[1];
        var i = 0;
        while (province_count[i] <= num) {
            i += 1;
        }
        this.local_unit_province = province_list[i];
    }
    /*New code */
    clearDistrictSelect() {
        var curr_data = document.getElementById("District");
        while (curr_data.length != 1) {
            curr_data.remove(curr_data.length - 1);
        }
    }
    getProvinceDist(province_id) {
        var curr_prov_val = [['Taplejung ', 'Sankhuwasabha ', 'Solukhumbu ', 'Okhaldhunga ', 'Khotang ', 'Bhojpur ', 'Dhankuta ', 'Terhathum ', 'Panchthar ', 'Ilam ', 'Jhapa ', 'Morang ', 'Sunsari ', 'Udayapur '], ['Saptari ', 'Siraha ', 'Dhanusa ', 'Mahottari ', 'Sarlahi ', 'Rautahat ', 'Bara ', 'Parsa '], ['Dolakha ', 'Sindhupalchok ', 'Rasuwa ', 'Dhading ', 'Nuwakot ', 'Kathmandu ', 'Bhaktapur ', 'Lalitpur ', 'Kavrepalanchok ', 'Ramechhap ', 'Sindhuli ', 'Makwanpur ', 'Chitawan '], ['Gorkha ', 'Manang ', 'Mustang ', 'Myagdi ', 'Kaski', 'Lamjung ', 'Tanahu ', 'Nawalparasi East ', 'Syangja ', 'Parbat ', 'Baglung '], ['Bardiya ', 'Dolpa ', 'Mugu ', 'Humla ', 'Jumla ', 'Kalikot ', 'Dailekh ', 'Jajarkot ', 'Rukum West ', 'Salyan '], ['Surkhet ', 'Bajura ', 'Bajhang ', 'Darchula ', 'Baitadi ', 'Dadeldhura ', 'Doti ', 'Achham ', 'Kailali']];
        var curr_data = document.getElementById("District");
        var size = curr_prov_val[province_id - 1].length;
        for (var loop_count = 0; loop_count < size; loop_count += 1) {
            var curr = document.createElement("option");
            curr.text = curr_prov_val[province_id - 1][loop_count];
            curr_data.add(curr);
        }
    }
    /*We may replace getUnitDistrict with a ajax & php in future. THis is just a stop gap*/
    getUnitDistrict(local_unit) {
        this.local_unit = local_unit;
        var district_list = ['Taplejung ', 'Panchthar ', 'Ilam ', 'Jhapa ', 'Morang ', 'Sunsari ', 'Dhankuta ', 'Terhathum ', 'Sankhuwasabha ', 'Bhojpur ', 'Solukhumbu ', 'Okhaldhunga ', 'Khotang ', 'Udayapur ', 'Saptari ', 'Siraha ', 'Dhanusa ', 'Mahottari ', 'Sarlahi ', 'Sindhuli ', 'Ramechhap ', 'Dolakha ', 'Sindhupalchok ', 'Kavrepalanchok ', 'Lalitpur ', 'Bhaktapur ', 'Kathmandu ', 'Nuwakot ', 'Rasuwa ', 'Dhading ', 'Makwanpur ', 'Rautahat ', 'Bara ', 'Parsa ', 'Chitawan ', 'Gorkha ', 'Lamjung ', 'Tanahu ', 'Syangja ', 'Kaski ', 'Manang ', 'Mustang ', 'Myagdi ', 'Parbat ', 'Baglung ', 'Gulmi ', 'Palpa ', 'Nawalparasi West ', 'Rupandehi ', 'Kapilbastu ', 'Arghakhanchi ', 'Pyuthan ', 'Rolpa ', 'Rukum West ', 'Salyan ', 'Dang ', 'Banke ', 'Bardiya ', 'Surkhet ', 'Dailekh ', 'Jajarkot ', 'Dolpa ', 'Jumla ', 'Kalikot ', 'Mugu ', 'Humla ', 'Bajura ', 'Bajhang ', 'Achham ', 'Doti ', 'Kailali ', 'Kanchanpur ', 'Dadeldhura ', 'Baitadi ', 'Darchula ', 'Nawalparasi East ', 'Rukum East'];
        var district_count = [9, 17, 27, 42, 59, 72, 79, 85, 95, 104, 112, 120, 130, 139, 158, 175, 193, 208, 228, 237, 245, 254, 266, 279, 285, 289, 300, 314, 319, 332, 344, 362, 379, 395, 403, 414, 422, 432, 443, 448, 452, 457, 464, 471, 482, 494, 504, 511, 528, 538, 544, 553, 563, 569, 579, 589, 597, 607, 616, 627, 634, 642, 650, 659, 663, 670, 680, 693, 704, 714, 727, 737, 744, 754, 763, 773, 777];
        var num = local_unit.split('_')[1];
        var i = 0;
        while (district_count[i] <= num) {
            i += 1;
        }
        this.local_unit_district = district_list[i];
    }
    getDistrict(district) {
        var district_list = ['Taplejung ', 'Panchthar ', 'Ilam ', 'Jhapa ', 'Morang ', 'Sunsari ', 'Dhankuta ', 'Terhathum ', 'Sankhuwasabha ', 'Bhojpur ', 'Solukhumbu ', 'Okhaldhunga ', 'Khotang ', 'Udayapur ', 'Saptari ', 'Siraha ', 'Dhanusa ', 'Mahottari ', 'Sarlahi ', 'Sindhuli ', 'Ramechhap ', 'Dolakha ', 'Sindhupalchok ', 'Kavrepalanchok ', 'Lalitpur ', 'Bhaktapur ', 'Kathmandu ', 'Nuwakot ', 'Rasuwa ', 'Dhading ', 'Makwanpur ', 'Rautahat ', 'Bara ', 'Parsa ', 'Chitawan ', 'Gorkha ', 'Lamjung ', 'Tanahu ', 'Syangja ', 'Kaski ', 'Manang ', 'Mustang ', 'Myagdi ', 'Parbat ', 'Baglung ', 'Gulmi ', 'Palpa ', 'Nawalparasi West ', 'Rupandehi ', 'Kapilbastu ', 'Arghakhanchi ', 'Pyuthan ', 'Rolpa ', 'Rukum West ', 'Salyan ', 'Dang ', 'Banke ', 'Bardiya ', 'Surkhet ', 'Dailekh ', 'Jajarkot ', 'Dolpa ', 'Jumla ', 'Kalikot ', 'Mugu ', 'Humla ', 'Bajura ', 'Bajhang ', 'Achham ', 'Doti ', 'Kailali ', 'Kanchanpur ', 'Dadeldhura ', 'Baitadi ', 'Darchula ', 'Nawalparasi East ', 'Rukum East'];
        var district_count = [9, 17, 27, 42, 59, 72, 79, 85, 95, 104, 112, 120, 130, 139, 158, 175, 193, 208, 228, 237, 245, 254, 266, 279, 285, 289, 300, 314, 319, 332, 344, 362, 379, 395, 403, 414, 422, 432, 443, 448, 452, 457, 464, 471, 482, 494, 504, 511, 528, 538, 544, 553, 563, 569, 579, 589, 597, 607, 616, 627, 634, 642, 650, 659, 663, 670, 680, 693, 704, 714, 727, 737, 744, 754, 763, 773, 777];
        var indx = district_list.indexOf((district + " "));
        return "localunit_" + (district_count[indx] - 1).toString();
    }
    /*Still not functional
    is supposed to return array containing 4 datas*/
    getUnitData(local_unit) {
        this.local_unit = local_unit;
        if (this.local_unit == -1 || this.local_unit === null) {
            error(101);
        } else {
            return [this.local_unit_province, this.local_unit_district, this.local_unit, this.local_unit_population];
        }
    }
    /*This function alerts devs for error in other funtions currently it terminates the whole script but in future that might not be the case */
    error(err_code) {
        var error_str = "";
        switch (err_code) {
            case 101:
                error_str = "Constructor initilized but the data did not\n";
                break;
            default:
                error_str = "Program has no instance of problems..\n";
                break;
        }
        alert(error_str);
        return error_str;
    }
    /*Someday I might find use of this function*/
    getData() {
        return data_list;
    }
}
function getProvDistElements() {
    var prov_id = Test_Insecure.Province[Test_Insecure.Province.selectedIndex].value;
    var test = new Unit();
    test.clearDistrictSelect();
    test.getProvinceDist(prov_id);
}
function getDistLocalElements() {
    /*This function is to be implemented when needed*/
    reset();
    var dist_id = Test_Insecure.District[Test_Insecure.District.selectedIndex].text;
    var dist = new Unit();
    canChange = true;
    unlocked = true;
    createTable(dist.getDistrict(dist_id));
    canChange = false;
    unlocked = false;
}
/*changeHTML is just here so that i can easily call it from another script and to be more editable without seeing the old defunct code*/
function changeHTML(curr_data, unit) {
    if (canChange && unlocked) {
        var x = new Unit();
        var curr_name = x.getUnitDistrict(unit);
        curr_name = x.local_unit_district;
        var curr_province = x.getUnitProvince(unit);
        curr_province = x.local_unit_province;
        document.getElementById("hovered_id").innerHTML = curr_name;
        document.getElementById("province").innerHTML = curr_province;
        document.getElementById("data1").innerHTML = curr_data;
    }
}
/*Code to change begins from here*/
document.addEventListener("mouseover", checkMouse);
document.addEventListener("click", reset);
function reset() {
    if (unlocked) {
        canChange = true;
    }
    else {
        unlocked = true;
    }
}
function checkMouse() {
    window.onmouseover = function (e) {
        hovering_over = e.target.className;
        if (hovering_over !== undefined) {
            if (hovering_over['baseVal'] !== undefined) {
                createTable(hovering_over["baseVal"]);
            }
        }
    }
}

function createTable(unit) {
    var index = unit.split('_')[1];
    getData(index);
    var curr_data = document.getElementById("data1").innerHTML;
    if (curr_data != undefined) {
        changeHTML(curr_data, unit);
    }
}
function getData(localUnitId) {
    str = toString(localUnitId);
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "Some Error Occurred!!";
        return;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data1").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "connection_with_database.php?q=" + str, true);
    xmlhttp.send();
}
