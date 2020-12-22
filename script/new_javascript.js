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
    /*We may replace getUnitDistrict with a ajax & php in future. THis is just a stop gap*/
    getUnitDistrict(local_unit) {
        this.local_unit = local_unit;
        var district_list = ['TAPLEJUNG', 'PANCHTHAR', 'ILAM', 'JHAPA', 'MORANG', 'SUNSARI', 'DHANKUTA', 'TERHATHUM', 'SANKHUWASABHA', 'BHOJPUR', 'SOLUKHUMBU', 'OKHALDHUNGA', 'KHOTANG', 'UDAYAPUR', 'SAPTARI', 'SIRAHA', 'DHANUSA', 'MAHOTTARI', 'SARLAHI', 'SINDHULI', 'RAMECHHAP', 'DOLAKHA', 'SINDHUPALCHOK', 'KAVREPALANCHOK', 'LALITPUR', 'BHAKTAPUR', 'KATHMANDU', 'NUWAKOT', 'RASUWA', 'DHADING', 'MAKWANPUR', 'RAUTAHAT', 'BARA', 'PARSA', 'CHITAWAN', 'GORKHA', 'LAMJUNG', 'TANAHU', 'SYANGJA', 'KASKI', 'MANANG', 'MUSTANG', 'MYAGDI', 'PARBAT', 'BAGLUNG', 'GULMI', 'PALPA', 'NAWALPARASI WEST', 'RUPANDEHI', 'KAPILBASTU', 'ARGHAKHANCHI', 'PYUTHAN', 'ROLPA', 'RUKUM WEST', 'SALYAN', 'DANG', 'BANKE', 'BARDIYA', 'SURKHET', 'DAILEKH', 'JAJARKOT', 'DOLPA', 'JUMLA', 'KALIKOT', 'MUGU', 'HUMLA', 'BAJURA', 'BAJHANG', 'ACHHAM', 'DOTI', 'KAILALI', 'KANCHANPUR', 'DADELDHURA', 'BAITADI', 'DARCHULA', 'NAWALPARASI EAST', 'RUKUM EAST'];
        var district_count = [9, 17, 27, 42, 59, 72, 79, 85, 95, 104, 112, 120, 130, 139, 158, 175, 193, 208, 228, 237, 245, 254, 266, 279, 285, 289, 300, 314, 319, 332, 344, 362, 379, 395, 403, 414, 422, 432, 443, 448, 452, 457, 464, 471, 482, 494, 504, 511, 528, 538, 544, 553, 563, 569, 579, 589, 597, 607, 616, 627, 634, 642, 650, 659, 663, 670, 680, 693, 704, 714, 727, 737, 744, 754, 763, 773, 777];

        var num = local_unit.split('_')[1];
        var i = 0;
        while (district_count[i] <= num) {
            i += 1;
        }
        this.local_unit_district = district_list[i];
    }
    /*Still not functional
    is supposed to return array containing 4 datas*/
    getUnitData(local_unit) {
        this.local_unit = local_unit;
        if (this.local_unit == -1 || this.local_unit == null) {
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
};
/*changeHTML is just here so that i can easily call it from another script and to be more editable without seeing the old defunct code*/
function changeHTML(curr_data, unit) {
    if (curr_data != undefined) {
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
function checkMouse() {
    window.onmouseover = function (e) {
        hovering_over = e.target.className;
        createTable(hovering_over["baseVal"]);
    }
}
function createTable(unit) {
    var index = unit.split('_')[1];
    data = [118, 118, 118, 118, 118, 118, 118, 118, 118, 144, 144, 144, 144, 144, 144, 144, 144, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 738, 738, 738, 738, 738, 738, 738, 738, 738, 738, 738, 738, 738, 738, 738, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 899, 899, 899, 899, 899, 899, 899, 899, 899, 899, 899, 899, 899, 105, 105, 105, 105, 105, 105, 105, 113, 113, 113, 113, 113, 113, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 87, 87, 87, 87, 87, 87, 87, 87, 87, 156, 156, 156, 156, 156, 156, 156, 156, 267, 267, 267, 267, 267, 267, 267, 267, 191, 191, 191, 191, 191, 191, 191, 191, 191, 191, 370, 370, 370, 370, 370, 370, 370, 370, 370, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 875, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 483, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1145, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 1102, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 818, 401, 401, 401, 401, 401, 401, 401, 401, 401, 467, 467, 467, 467, 467, 467, 467, 467, 361, 361, 361, 361, 361, 361, 361, 361, 361, 517, 517, 517, 517, 517, 517, 517, 517, 517, 517, 517, 517, 895, 895, 895, 895, 895, 895, 895, 895, 895, 895, 895, 895, 895, 3012, 3012, 3012, 3012, 3012, 3012, 732, 732, 732, 732, 15998, 15998, 15998, 15998, 15998, 15998, 15998, 15998, 15998, 15998, 15998, 685, 685, 685, 685, 685, 685, 685, 685, 685, 685, 685, 685, 685, 685, 135, 135, 135, 135, 135, 661, 661, 661, 661, 661, 661, 661, 661, 661, 661, 661, 661, 661, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 1081, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 828, 843, 843, 843, 843, 843, 843, 843, 843, 843, 843, 843, 843, 843, 843, 843, 843, 1404, 1404, 1404, 1404, 1404, 1404, 1404, 1404, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 253, 253, 253, 253, 253, 253, 253, 253, 463, 463, 463, 463, 463, 463, 463, 463, 463, 463, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 207, 1279, 1279, 1279, 1279, 1279, 21, 21, 21, 21, 46, 46, 46, 46, 46, 84, 84, 84, 84, 84, 84, 84, 182, 182, 182, 182, 182, 182, 182, 381, 381, 381, 381, 381, 381, 381, 381, 381, 381, 381, 182, 182, 182, 182, 182, 182, 182, 182, 182, 182, 182, 182, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 0, 0, 0, 0, 0, 0, 0, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 566, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 190, 190, 190, 190, 190, 190, 166, 166, 166, 166, 166, 166, 166, 166, 166, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 0, 0, 0, 0, 0, 0, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 723, 723, 723, 723, 723, 723, 723, 723, 723, 723, 643, 643, 643, 643, 643, 643, 643, 643, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 409, 409, 409, 409, 409, 409, 409, 409, 409, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 230, 180, 180, 180, 180, 180, 180, 180, 118, 118, 118, 118, 118, 118, 118, 118, 193, 193, 193, 193, 193, 193, 193, 193, 245, 245, 245, 245, 245, 245, 245, 245, 245, 234, 234, 234, 234, 193, 193, 193, 193, 193, 193, 193, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 273, 261, 261, 261, 261, 261, 261, 261, 261, 261, 261, 261, 258, 258, 258, 258, 258, 258, 258, 258, 258, 258, 1056, 1056, 1056, 1056, 1056, 1056, 1056, 1056, 1056, 1056, 1056, 1056, 1056, 438, 438, 438, 438, 438, 438, 438, 438, 438, 438, 144, 144, 144, 144, 144, 144, 144, 275, 275, 275, 275, 275, 275, 275, 275, 275, 275, 169, 169, 169, 169, 169, 169, 169, 169, 169, 736, 736, 736, 736, 736, 736, 736, 736, 736, 736, 188, 188, 188, 188];
    var curr_data = data[index];
    changeHTML(curr_data, unit);
}
