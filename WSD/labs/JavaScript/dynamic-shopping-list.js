let add = document.querySelector("#addItem");
let items = document.querySelector("#items");

add.onclick = function () {
  let text = document.listform.listname.value;
  
  // alert(text)
  let listtext = document.createTextNode(text);

  // Creating list element
  let list = document.createElement("li");

  //Creating Delete Button
  let listBtn = document.createElement("button");

  // adding level in button
  listBtn.textContent = "Delete Items";
  

  // adding list items inside ul
  items.appendChild(list);
  list.appendChild(listtext);
  list.appendChild(listBtn);


  // removing the list items after clicking on the delete button
  listBtn.onclick = function () {
    items.removeChild(list);
  };
};

// Objects in JS Similar to Dictionary in Python
const person = {
  // name: ['Bob', 'Smith'],
  name: {
    fname: Amisha,
    lname: Lamichhane,
  },
  age: 32,
  gender: "female",
  interests: ["Painting", "Dancing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        "years old." +
        this.interests[0] +
        " " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi Im " + this.name[0] + ".");
  },
};


