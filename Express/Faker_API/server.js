const express = require("express");
const faker = require("faker");
const app = express();

app.get("/api/users/new", (req, res) => {
    res.json({newFakeUser});
});

app.get("/api/companies/new", (req, res)=> {
    res.json({newFakeCompany});
});

app.get("/api/user/company", (req, res) => {
    res.json({newFakeUser});
    res.json({newFakeCompany});
});

const createUser = () => {
    const newFakeUser =  {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFakeUser
};

const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newFakeCompany = {
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);