let singleton = {
    name: "JHON SINGLETON - ENGLISH TEACHER",
    specialty: "ENGLISH",
    role: "TUTOR",
    description: "JHON SINGLETON IS A HIGH-SCHOOL ENGLISH TEACHER WHO HAS EARNED A DOCTORATE DEGREE IN ENGLISH AT THE UNIVERSITY OF INDIANA AND HAS MANY ACCOLADES IN THE FIELD INCLUDING BEING VERY METICULOUS IN HIS TEACHING STYLE.",
    color: 'black',
    email: "jsingleton@coastcali.org"
};
let benjamin = {
    name: "BENJAMIN BEDFORD - MATHEMATICS PROFESSOR",
    specialty: "TOPOLOGY + PARTIAL DIFFERENTIAL EQUATIONS ",
    role: "TUTOR",
    description: "BENJAMIN BEDFORD IS VERY WELL-VERSED IN MATHEMATICS, ESPECIALLY IN THE TOPOLOGY AND THE PARTIAL DIFFERENTIAL EQUATIONS FIELDS, AND HE EXCELS IN BASIC FOUNDATIONAL SKILLS AND IS ABLE TO ASSIST WITH ALMOST ANY MATTER REGARDING TO TOPOLOGY AND PARTIAL DIFFERENTIAL EQUATIONS.",
    color: 'black',
    email: "bbedford@columbia.edu"
};
let william = {
    name: "WILLIAM DAY - COMPUTER PROFESSOR",
    specialty: "COMPUTER SCIENCE",
    role: "TUTOR",
    description: "WILLIAM DAY HAS A DEEP UNDERSTANDING OF JAVASCRIPT, HTML, AND CSS. HE IS WELL-VERSED IN THE INTEGRATION OF THE TWO PROGRAMMING LANGUAGES IN ORDER TO CREATE WEBSITES AND TO DEVELOP OTHER ONLINE PRODUCTS.",
    color: 'black',
    email: "willday@mit.edu"
}
let ender = {
    name: "ENDER VEDIUS - SCIENCE PROFESSOR",
    specialty: "BIOLOGY",
    role: "TUTOR",
    description: "ENDER VEDIUS HAS AN ASSOCIATES DEGREE IN BIOCHEMISTRY AND IS AN EXPERT IN THE HUMAN BODY, PARTICULARLY IN THE NEUROLOGICAL PART. MR. VEDIUS ALSO FOCUSES ON HOW THE BRAIN INTERACTS WITH THE REST OF THE HUMAN BODY AND IS VERY SUITABLE AT TEACHING TUTEES ABOUT THE NERVOUS SYSTEM.",
    color: 'black',
    email: "evedius@bc.edu"
}
let michael = {
    name: "MICHAEL TODD - SCIENCE PROFESSOR",
    specialty: "PHYSICS",
    role: "TUTOR",
    description: "MICHAEL TODD IS A SCIENCE PROFESSOR WHO UNDERSTANDS VECTORS AND THEIR POSITIONS + DIRECTION ON ANY OBJECT. MR. TODD IS ALSO ABLE TO TEACH STUDENTS TO VISUALIZE AND DRAW ACCURATE VECTORS ON OBJECTS BOTH IN MOTION AND AT REST.",
    color: 'black',
    email: "michaeltodd@mec.edu"
}
let john = {
    name: "JOHN DOE - ENGLISH PROFESSOR",
    specialty: "Literature",
    role: "TUTOR",
    description: "JOHN DOE HAS A CLEAR UNDERSTANDING OF MANY PIECES OF LITERATURE AND IS ABLE TO ANALYZE THEME, AND CHARACTERS WITHIN THE THEME IN AN ASTUTE MANNER. ADDITIONALLY, MR. DOE PROMISES TO HELP STUDENTS GET INTO THE MINDSET, MENTALITY, AND THE PRACTICE OF READING COMPREHENSION.",
    color: 'black',
    email: "johndoe@kingstorm.edu"
}
let ethan = {
    name: "ETHAN HOWARD - ART PROFESSOR",
    specialty: "GRAPHIC DESIGN",
    role: "TUTOR",
    description: "ETHAN HOWARD HAS A DEEP UNDERSTANDING OF MANY ELEMENTS OF GRAPHIC DESIGN SUCH AS BALANCE AND CONTRAST AND IS ADDITIONALLY ABLE TO HELP STUDENTS BLEND ELEMENTS TOGETHER WHEN IT COMES TO BUILDING A WEBSITE, CREATING A PICTURE, OR OTHER ONLINE WORK THAT THE STUDENT MAY BE ENGAGED IN.",
    color: 'black',
    email: "ehoward@pratt.edu"
}
let velcime = {
    name: "AKRON VELCIME - FRENCH PROFESSOR",
    specialty: "FRENCH",
    role: "TUTOR",
    description: "MR. AKRON VELICME HAS STUDIED THE FRENCH LANGUAGE AND IS ABLE TO HELP STUDENT ON HOW PRONOUNCE CERTAIN WORDS, SUFFIXES, AND AS WELL AS HELPING STUDENTS TO CONJUGATE VERBS IN FRENCH.",
    color: 'black',
    email: "avelcime@harvard.edu"
}
let aaron = {
    name: "AARON ABDULLAH - HISTORY PROFESSOR",
    specialty: "Global History",
    role: "TUTOR",
    description: "AARON ABDULLAH IS GREAT AT BREAKING DOWN HISTORICAL MOMENTS IN A WAY THAT IS EASY TO UNDERSTAND AND WHICH ALLOWS FOR GREATER EFFICIENCY WHEN IT COMES TO MEMORIZING HISTORICAL FACTS AND TOPICS FROM VARIOUS CULTURES AND EVENTS THROUGHOUT HISTORY.",
    color: 'black',
    email: "aaronmullah@duke.edu"
}
let kendara = {
    name: "KENDARA BAILY - MUSIC TEACHER",
    specialty: "MUSICAL CREATION",
    role: "TUTOR",
    description: "KANDARA BAILY IS A MUSIC TEACHER WHO IS ABLE TO READ MUSICAL NOTES AND ASSIST STUDENTS IN A MUSICAL CREATION. FURTHERMORE, MS. BAILY IS ABLE TO HELP STUDENTS UNDERSTAND THE MINUTES DIFFERENCES THAT EXIST WITHIN THE MUSIC NOTATION, FLATS, AND SHARPS.",
    color: 'black',
    email: "bailyartwork@gmail.com"
}

let maria = {
    name: "MARIA VALÁDEZ - LANGUAGE PROFESSOR",
    specialty: "SPANISH",
    role: "TUTOR",
    description: "MARIA VALÁDEZ UNDERSTANDS EVERY ASPECT OF THE SPANISH LANGUAGE AND KNOWS EVERY LEVEL OF SPANISH. ADDITIONALLY, MRS. VALÁDEZ IS ABLE TO ANSWER EVERY QUESTION A STUDENT HAS REGARDING TO SPANISH INCLUDING WHERE YOU NEED TO PUT AN ACCENT ON A CERTAIN WORD.",
    color: 'black',
    email: "mvaladez@nyu.edu"
}



let tutor_list = [singleton, benjamin, william, ender, michael, john, ethan, velcime, aaron, kendara, maria];
let divider = document.getElementById("mission_body");
for (let i = 0; i < tutor_list.length; i++){
    let new_div = document.createElement("div");
    new_div.classList.add("text");
    let move = tutor_list[i];
    let new_element = document.createElement("ul");
    new_element.style["color"] = move.color;
    let point0 = document.createElement("li");
    point0.innerHTML = "Name: " + move.name;
    new_element.append(point0);
    let point1 = document.createElement("li");
    point1.innerHTML = "Specialty: " + move.specialty;
    new_element.append(point1);
    let point2 = document.createElement("li");
    point2.innerHTML = "Role: " + move.role;
    new_element.append(point2);
    let point3 = document.createElement("li");
    point3.innerHTML = "Description: " + move.description;
    new_element.append(point3);
    let point4 = document.createElement("li");
    point4.innerHTML = "Email: " + move.email;
    new_element.append(point4);
    new_div.appendChild(new_element);
    divider.appendChild(new_div);
}