const faker = require("@faker-js/faker").fakerES;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 100; i++) {
    const name = faker.person.firstName();
    const lastname = faker.person.lastName();
    const hashedPassword = await bcrypt.hash("12345", 10);

    users.push({
      firstname: name,
      lastname: lastname,
      username: faker.internet.userName({ firstName: name, lastName: lastname }),
      password: hashedPassword,
      email: faker.internet.email({
        firstName: name,
        lastName: lastname,
        provider: "gmail.com",
      }),
      description: faker.person.bio(),
      image: faker.image.avatar(),
    });
  }

  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
