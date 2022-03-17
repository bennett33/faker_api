const express = require("express");
const app = express();
const port = 8000;


const {faker} = require("@faker-js/faker")


class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        }
    }

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode : faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}   


// ROUTES
app.get("/api", (req, res) => {
    // res.json({ message: "Hello World" });
    res.send("Hello World")
});

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json( newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json( newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    const userWithCompany = {
        user: newUser,
        company: newCompany
    }
    res.json(userWithCompany);
});


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
