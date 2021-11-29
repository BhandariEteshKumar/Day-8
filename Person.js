var Person = function (firstname, lastname, age, skills, email, address) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.age = age;
  this.skills = skills;
  this.email = email;
  this.address = address;

  this.toString = function () {
    return [
      "Hi ! I'm ",
      this.firstName,
      " ",
      this.lastName,
      " and I'm ",
      this.age,
      " year old. My Skills are ",
      this.skills,
      " my email: ",
      this.email,
      " Address: ",
      this.address,
    ].join("");
  };
};

var person = new Person(
  "lavish",
  "lav",
  28,
  "teaching",
  "example@gmail.com",
  "TN"
);
console.log(person.toString());
var person = new Person(
  "Krishna",
  "lav",
  22,
  "Music",
  "example2@gmail.com",
  "TN"
);
console.log(person.toString());
