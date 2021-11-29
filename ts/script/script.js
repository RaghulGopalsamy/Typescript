"use strict";
exports.__esModule = true;
var autoIncrementUserId = 1001;
var autoIncrementCourseId = 101;
var UserName = false;
var UserAge = false;
var UserMobileNumber = false;
var User = /** @class */ (function () {
    function User(name, age, mobile) {
        autoIncrementUserId++;
        this.userName = name;
        this.userAge = age;
        this.userMobile = mobile;
        this.userId = "UI" + autoIncrementUserId.toString();
    }
    return User;
}());
var Course = /** @class */ (function () {
    function Course(cname, days) {
        autoIncrementCourseId++;
        this.courseName = cname;
        this.CourseRequiredDays = days;
        this.courseId = "CI" + autoIncrementCourseId.toString();
    }
    return Course;
}());
var u1 = new User('Raghul', 24, 8754313384, "UT1001");
var userArrayList = new Array();
userArrayList.push(u1);
var c1 = new Course("CSharp", 30, "CI101");
var courseArrayList = new Array();
courseArrayList.push(c1);
function Login() {
    document.getElementById("registeration").style.display = "block";
    document.getElementById("existing_user").style.display = "none";
    document.getElementById("selectbox").style.display = "none";
    document.getElementById("my_List").style.display = "none";
    if (UserName = true && UserAge == true && UserMobileNumber == true) {
        alert("You have sucessfully login");
        var con = document.getElementById("userid").style.display = "block";
    }
    else {
        alert("Enter the details for login");
    }
}
function confirm() {
    document.getElementById("registeration").style.display = "none";
    document.getElementById("existing_user").style.display = "block";
    document.getElementById("selectbox").style.display = "none";
    document.getElementById("my_List").style.display = "none";
}
function enroll() {
    document.getElementById("registeration").style.display = "none";
    document.getElementById("existing_user").style.display = "none";
    document.getElementById("selectbox").style.display = "block";
    document.getElementById("my_List").style.display = "none";
}
function CourseList() {
    document.getElementById("registeration").style.display = "none";
    document.getElementById("existing_user").style.display = "none";
    document.getElementById("selectbox").style.display = "none";
    document.getElementById("my_List").style.display = "block";
}
function Complete() {
    document.getElementById("days_to_complete").style.display = "block";
}
