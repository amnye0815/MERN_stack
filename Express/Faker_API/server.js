const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;

app.listen( port, () => console.log(`Listening on port: ${port}`) );

app.get("/api", (req, res) => {
    res.json("Faker API");
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

const createCompany = () => {
    return {
        name: faker.company.companyName(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    };
};

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    console.log(newUser);
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    console.log(newCompany);
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    let newUser = createUser();
    let newCompany = createCompany();

    console.log (newUser);
    console.log (newCompany);

    res.json({ user: newUser, company: newCompany });
});