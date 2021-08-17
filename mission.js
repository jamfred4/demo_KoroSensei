



let singleton = {
    name: "Jhon Singleton - English Professional ",
    specialty: "English",
    role: "Tutor",
    description: "An English Professor who has many accolades in the field is very meticulous with his teaching style.",
    color: 'black',
    // weakness: "Biology",
    // mission: "I require assitance in understanding how to the immune system helps to prevent threats within the body and what components are most crucial to this task",
    // reward: "22 karma points"
};

let benjamin = {
    name: "Benjamin Bedford - Math Professional",
    specialty: "Algebra",
    role: "Tutor",
    description: "Well Versed In Math, Especially in the Algebra I field, and he excells in basic foundational skills and is able to assist with almost any matter rearding Algebra I.",
    color: 'black',
    // weakness: "English",
    // mission: "I require assitance in understanding how to analyze and disect poems, any tips and tricks or even a in depth tutorial will be appreciated",
    // reward: "10 karma points"
}

let tutor_list = [singleton, benjamin];

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

    // let point4 = document.createElement("li");
    // point4.innerHTML = "Weakness: " + move.weakness;
    // new_element.append(point4);

    // let point5 = document.createElement("li");
    // point5.innerHTML = "Mission: " + move.mission;
    // new_element.append(point5);

    // let point6 = document.createElement("li");
    // point6.innerHTML = "Reward: " + move.reward;
    // new_element.append(point6);



    new_div.appendChild(new_element);
    divider.appendChild(new_div);
}