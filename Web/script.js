const person = document.getElementById("person");
const bag = document.getElementById("bag");

person.addEventListener("mouseover", function () {
    person.name = "person"
})

person.addEventListener("mouseout", function () {
    person.name = "person-outline"
})

bag.addEventListener("mouseover", function () {
    bag.name = "bag"
})

bag.addEventListener("mouseout", function () {
    bag.name = "bag-outline"
})
