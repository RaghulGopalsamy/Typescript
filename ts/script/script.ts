
let autoIncrementUserId = 1001;
let autoIncrementCourseId=101;
let UserName = false;
let UserAge = false;
let UserMobileNumber=false;
class User
{
    userName:string;
    userAge:number;
    userMobile:number;
    userId:string;
    constructor(name:string,age:number,mobile:number,){
        autoIncrementUserId++;
        
        this.userName=name;
        this.userAge=age;
        this.userMobile=mobile;
        this.userId="UI"+autoIncrementUserId.toString();

    }

}
class Course
{
    courseName:string;
    CourseRequiredDays:number;
    courseId:string;
    constructor(cname:string,days:number,){
        autoIncrementCourseId++;
        this.courseName=cname;
        this.CourseRequiredDays=days;
        this.courseId="CI"+autoIncrementCourseId.toString();

    }

}
let u1 = new User('Raghul',24,8754313384,"UT1001")

let userArrayList:Array<User>=new Array<User>();
userArrayList.push(u1);

let c1 = new Course("CSharp",30,"CI101")
let courseArrayList:Array<Course> = new Array<Course>();
courseArrayList.push(c1);


function Login(){
    document.getElementById("registeration").style.display="block";
    document.getElementById("existing_user").style.display="none";
    document.getElementById("selectbox").style.display="none";
    document.getElementById("my_List").style.display="none"
    if(UserName=true && UserAge== true && UserMobileNumber==true){
        alert("You have sucessfully login");
        let con = (document.getElementById("userid") as HTMLDivElement).style.display="block";
        

    }
    else{
        alert("Enter the details for login");
    }
    
}
function confirm(){
    document.getElementById("registeration").style.display="none";
    document.getElementById("existing_user").style.display="block";
    document.getElementById("selectbox").style.display="none";
    document.getElementById("my_List").style.display="none";
    
}
function enroll(){
    document.getElementById("registeration").style.display="none";
    document.getElementById("existing_user").style.display="none";
    document.getElementById("selectbox").style.display="block";
    document.getElementById("my_List").style.display="none";

}
function CourseList(){
    document.getElementById("registeration").style.display="none";
    document.getElementById("existing_user").style.display="none";
    document.getElementById("selectbox").style.display="none";
    document.getElementById("my_List").style.display="block";

}
function Complete(){
    document.getElementById("days_to_complete").style.display="block";

}