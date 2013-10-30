
function loadArrays() {
    console.log("yeah");
var empPermArray = [];
var empTempArray = [];

                var array = data.projects["results"][selectedData.selectedIndex].members;


                //console.log(array);

                //get employee JSON
                $.ajax({
                    url: './server/employees.js',
                    dataType: 'json',
                    success: function (data) {

                        console.log(data);
                        // console.log("length"+data.employees["results"].length);


                        for (var i = 0; i < array.length; i++) {
                            for (var j = 0; j < data.employees["results"].length; j++) {

                                if (array[i].toString() == (data.employees["results"][j].email).toString()) {
                                    //console.log("ok");
                                    //console.log("str"+array[i].toString());
                                    // console.log(data.employees["results"][j].email);
                                    // console.log(data.employees["results"][j].addresses.permanent.city);

                                    //load data to employee permanent array
                                    var employee = {};
                                    employee.cordinates = (data.employees["results"][j].addresses.permanent.coordinates);
                                    employee.name = (data.employees["results"][j].fname);


                                    var num = (data.employees["results"][j].addresses.permanent.number);
                                    var street = (data.employees["results"][j].addresses.permanent.street);
                                    var city = (data.employees["results"][j].addresses.permanent.city);
                                    var district = (data.employees["results"][j].addresses.permanent.district);
                                    employee.address = (num + ", " + street + ", " + city + ", " + district);


                                    empPermArray.push(employee);


                                    //load data to employee residential array
                                    var employeeTemp = {};
                                    employeeTemp.cordinates = (data.employees["results"][j].addresses.residential[0].coordinates);
                                    employeeTemp.name = (data.employees["results"][j].fname);

                                    var num = (data.employees["results"][j].addresses.residential[0].number);
                                    var street = (data.employees["results"][j].addresses.residential[0].street);
                                    var city = (data.employees["results"][j].addresses.residential[0].city);
                                    var district = (data.employees["results"][j].addresses.residential[0].district);
                                    employeeTemp.address = (num + " " + street + " " + city + " " + district);


                                    empTempArray.push(employeeTemp);
                                }


                            }


                        }
                    }
                });
            }
        


perm.addEventListener("click", function () {
    console.log(empPermArray);
});

temp.addEventListener("click", function () {
    console.log(empTempArray);
});


}