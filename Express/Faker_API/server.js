const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.get("/api/users/new", (req, res) => {
    res.json({newFakeUser});
});

app.get("/api/companies/new", (req, res)=> {
    res.json({newFakeCompany});
});

app.get("/api/user/company", (req, res) =>{
    res.json({newFakeUser, newFakeCompany});
});

// app.listen( port, ()=> console.log("Listening on port: ${port}") );

const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newCompany ={
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