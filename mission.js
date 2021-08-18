
let singleton = {
    name: "Jhon Singleton - English Professional ",
    specialty: "English",
    role: "Tutor",
    description: "An English professional who has many accolades in the field is very meticulous with his teaching style.",
    color: 'black',
    email: "jsingleton@gmail.com"
};

let benjamin = {
    name: "Benjamin Bedford - Math Professional",
    specialty: "Algebra",
    role: "Tutor",
    description: "Well versed In Math, Especially in the Algebra I field, and he excells in basic foundational skills and is able to assist with almost any matter rearding Algebra I.",
    color: 'black',
    email: "benjamin.bedford21@gmail.com"
};

let william = {
    name: "Willam Day - Computer Professional",
    specialty: "Computer Science",
    role: "Tutor",
    description: "Has a deep understanding of Javascript and HTML. He is well versed in the integration of the two programming languages in order to create websites and to develope other online products",
    color: 'black',
    email: "day.william52@gmail.com"
}

let ender = {
    name: "Ender Vedius- Science Professional",
    specialty: "Biology",
    role: "Tutor",
    description: "Has a associates degree in Bio Chemestry and is an expert in the human body. Perticularly the nurological part. He focuses on how the brain interacts with the rest of the human body and is very apt at teaching tutees about the nervous system",
    color: 'black',
    email: "evedius69@gmail.com"
}

let michael = {
    name: "Michael Todd - Science Professional",
    specialty: "Physics",
    role: "Tutor",
    description: "Has a greate understanding of vectors and their postions and direction on any object. He is able to teach students to visualize and draw accurate vectors on objects both in motion and at rest.",
    color: 'black',
    email: "michaeltodd@mec.org"
}

let tutor_list = [singleton, benjamin, william, ender, michael];

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