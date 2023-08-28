import { success, error } from "../helpers/index.js";

import Query from "../models/query.js";

// hachage du mot de passe

import {hash, compare} from "bcrypt";

import jwt from 'jsonwebtoken';

const {TOKEN_SECRET} = process.env;

const saltRounds = 10;

// const checkToken = async (req, res) => {

//     try {
//         const query = "SELECT lastname, firstname, birthdate, email, p email FROM customer WHERE id = ?";
//         const [customer] = await Query.findByValue(query, req.params.id);
        
//         if(customer){
//             const msg = "Valid customer";
//             res.status(200).json(success(msg, customer));
//         } else {
//             const msg = "No account. Invalid id";
//             res.status(200).json(success(msg));
//         }

//     } catch (error) {
//         res.status(500).json(error);
//         throw Error(error);
//     }
// }

const signup = async (req, res) => {

    try {    
        const query = "SELECT email FROM customer WHERE email = ?";
        const [iscustomer] = await Query.findByValue(query, req.body.email);

        if(!iscustomer){
            const hashedPWD = await hash(req.body.password, saltRounds);
            const {lastname, firstname, birthdate, email, newsletter} = req.body ;
            const query = "INSERT INTO customer (lastname, firstname, birthdate, email,password, registration_date, newsletter) VALUES (?,?,?,?,?,?,NOW(),?)";
            const result = await Query.write(query, {lastname, firstname, birthdate, email,hashedPWD, newsletter});
            
            res.status(201).json(success("Created customer !", result));
        }
        
    } catch (error) {
        res.status(500).json(error);
        throw Error(error);
    }
}

const signin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const query1 = "SELECT id, email, password FROM customer WHERE email = ?";
        const [customer] = await Query.findByValue(query1, email);
        if(!customer || (customer.email !== req.body.email)){
            res.status(401).json(error("Id invalid"));
            return;
        } 
        const isSame = await compare(password, customer.password);        
        if(isSame){
            const TOKEN = jwt.sign({id: customer.id}, TOKEN_SECRET );
            const { email } = customer;
            res.status(200).json(success("Connection succeeded", {TOKEN, email}));
        } else {
            res.status(401).json(error("Invalid password"));
        }
    } catch (error) {
        res.status(500).json(error);
        throw Error(error);
    }
}

export {signup, signin};