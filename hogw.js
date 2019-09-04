let baseLink = 'http://petlatkea.dk/2019/students1991.json';
let template = document.querySelector("template").content;

// initialize empty array

let array1 = [];

// select needed elements

let studWrapper = document.querySelector(".stud-list");

// fetch data 

function loadList(link) {
    fetch(link).then((e) => e.json()).then((data) => consoleLog(data));
}

function consoleLog(data) {

    // place data in reusable array

    data.forEach((element) => {
        array1.push(element);
    });

    let n = array1.length;

    for (let i = 0; i < n; i++) {

        // clone template

        const clone = template.cloneNode("true");

        // get full name from array data

        let name = array1[i]["fullname"];

        // split name into two spans

        let n = name.indexOf(" ");
        let firstN = name.substring(0, n);
        let lastN = name.substring(n + 1, name.length);

        let spanF = document.createElement("span");
        let spanL = document.createElement("span");

        // add class to spans for selection

        spanF.setAttribute("class", "first-name");
        spanL.setAttribute("class", "last-name");

        spanF.textContent = firstN + " ";
        spanL.textContent = lastN;

        // append spans to paragraph

        (clone.querySelector(".fullName")).appendChild(spanF);
        (clone.querySelector(".fullName")).appendChild(spanL);

        // add house

        let house = array1[i]["house"];

        clone.querySelector(".house").textContent = house;
        clone.querySelector(".house").classList.add("" + house);

        // add image

        clone.querySelector("img").src = "images/harry.jpg";

        // append list item to parent

        studWrapper.appendChild(clone);

    }

}

loadList(baseLink);

let insert = document.querySelector(".insert-before");

// sorting function inspired from stack overflow

function sortingFunction() {

    // get elements node list

    let elements = document.querySelectorAll(".first-name");

    // transform nodelist into array

    elements = Array.prototype.slice.call(elements);
    console.log(elements);

    // sort array

    elements.sort((a, b) => a.textContent.localeCompare(b.textContent))

    // insert array 

    elements.forEach(p => studWrapper.appendChild(p.parentElement.parentElement));

}

function sortingFunctionReverse() {

    // get elements node list

    let elements = document.querySelectorAll(".last-name");

    // transform nodelist into array

    elements = Array.prototype.slice.call(elements);
    console.log(elements);

    // sort array

    elements.sort((a, b) => a.textContent.localeCompare(b.textContent))

    // insert array 
    elements.forEach(p => studWrapper.appendChild(p.parentElement.parentElement));

}

function sortingFunctionHouse() {

    // get elements node list

    let elements = document.querySelectorAll(".house");

    // transform nodelist into array

    elements = Array.prototype.slice.call(elements);
    console.log(elements);

    // sort array

    elements.sort((a, b) => a.textContent.localeCompare(b.textContent))

    // insert array 

    elements.forEach(p => studWrapper.appendChild(p.parentElement));

}

// filtering function

function filterFc() {

    // check if check is false, if it is add class hidden to elems, if it is not remove class hidden

    if (document.querySelector(".griff-check").checked == false) {
        let x = document.querySelectorAll(".gryffindor");
        x.forEach(el => el.parentElement.classList.add("hidden"));
    } else {
        let x = document.querySelectorAll(".gryffindor");
        x.forEach(el => el.parentElement.classList.remove("hidden"));
    }

    if (document.querySelector(".huffle-check").checked == false) {
        let x = document.querySelectorAll(".Hufflepuff");
        x.forEach(el => el.parentElement.classList.add("hidden"));
    } else {
        let x = document.querySelectorAll(".Hufflepuff");
        x.forEach(el => el.parentElement.classList.remove("hidden"));
    }

    if (document.querySelector(".raven-check").checked == false) {
        let x = document.querySelectorAll(".ravenclaw");
        x.forEach(el => el.parentElement.classList.add("hidden"));
    } else {
        let x = document.querySelectorAll(".ravenclaw");
        x.forEach(el => el.parentElement.classList.remove("hidden"));
    }

    if (document.querySelector(".slythe-check").checked == false) {
        let x = document.querySelectorAll(".slytherin");
        x.forEach(el => el.parentElement.classList.add("hidden"));
    } else {
        let x = document.querySelectorAll(".slytherin");
        x.forEach(el => el.parentElement.classList.remove("hidden"));
    }

}

// select modal

let modal = document.querySelector(".modal");

modal.classList.add("hidden");

// modal close function

function closeModal() {
    modal.classList.add("hidden");
}

// modal open function

function openModal(param) {
    let y = param.cloneNode(true);
    modal.querySelector(".fullName").textContent = y.querySelector(".fullName").textContent;
    modal.querySelector(".house-modal").textContent = y.querySelector(".house").textContent;
    modal.querySelector(".crest-modal").src = "images/" + y.querySelector(".house").classList[1] + ".jpg";
    modal.classList.remove("hidden");
}