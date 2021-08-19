<<<<<<< HEAD
=======

>>>>>>> 7d3b84e2a6caf4b96ab8e86fcbb613eeb7bef1fa
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
<<<<<<< HEAD
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
let john = {
    name: "John Doe - English Professional",
    specialty: "Litrature",
    role: "Tutor",
    description: "Has a deep understanding of many pieces of Litrature and is able to analyze themes as well as characters within them in a very astute manner. He will help students to get in the mentality of reading for comprehension",
    color: 'black',
    email: "johndoe.castle31@gmail.com"
}
let ethan = {
    name: "Ethan Atwell - Art Professional",
    specialty: "Graphic Design",
    role: "Tutor",
    description: "He has a great understanding of the many elements of graphic design and is able to help students to integrate them when it comes to websites or other online works that they may be engaged in",
    color: 'black',
    email: "atwellendiomon@gmail.com"
}
let velcime = {
    name: "Akron Velicme - Language Professional",
    specialty: "French",
    role: "Tutor",
    description: "Has greatly studied the French language and is able to give students adivec as to pronounciation. He can also aid students in determining the gender of the object in question as well as helping students to conjugate verbs",
    color: 'black',
    email: "avelcime@mecps.org"
}
let aaron = {
    name: "Aaron Abdullah - History Professional",
    specialty: "Global History",
    role: "Tutor",
    description: "Has a great understanding of how to understand and cotify historical moments in a way that is easy to understand and allows for greater efficency when it comes to memorizing facts and topics from various cultures thoughout history",
    color: 'black',
    email: "aaronmullah312@gmail.com"
}
let kendara = {
    name: "Kendara Baily - Music Professional",
    specialty: "Music Creation",
    role: "Tutor",
    description: "Greatly graps how to read musical notes and is able to assit students in music creation. Furthermore she is able to help studetns to understand the minute differences that exists within the musical notation, more specifically flats and sharps",
    color: 'black',
    email: "Bailyartwork@gmail.com"
}
let tutor_list = [singleton, benjamin, william, ender, michael, john, ethan, velcime, aaron, kendara];
=======
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

>>>>>>> 7d3b84e2a6caf4b96ab8e86fcbb613eeb7bef1fa
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
<<<<<<< HEAD
    let point4 = document.createElement("li");
    point4.innerHTML = "Email: " + move.email;
    new_element.append(point4);
=======

    let point4 = document.createElement("li");
    point4.innerHTML = "Email: " + move.email;
    new_element.append(point4);


>>>>>>> 7d3b84e2a6caf4b96ab8e86fcbb613eeb7bef1fa
    new_div.appendChild(new_element);
    divider.appendChild(new_div);
}