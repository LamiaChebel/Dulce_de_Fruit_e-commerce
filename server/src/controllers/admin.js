import { success, error } from "../helpers/index.js";

import Query from "../models/query.js";

// hachage du mot de passe

import {hash, compare} from "bcrypt";

import jwt from 'jsonwebtoken';

const {TOKEN_SECRET} = process.env;

const saltRounds = 10;

const checkToken = async (req, res) => {

    try {
        const query = "SELECT alias, email FROM admin WHERE id = ?";
        const [admin] = await Query.findByValue(query, req.params.id);
        
        if(admin){
            const msg = "Valid admin";
            res.status(200).json(success(msg, admin));
        } else {
            const msg = "No account. Invalid id";
            res.status(200).json(success(msg));
        }

    } catch (error) {
        res.status(500).json(error);
        throw Error(error);
    }
}

const signup = async (req, res) => {

    try {    
        const query = "SELECT alias, email, password FROM admin WHERE email = ?";
        const [isAdmin] = await Query.findByValue(query, req.body.email);

        if(!isAdmin){
            const hashedPWD = await hash(req.body.password, saltRounds);
            const alias = req.body.alias ;
            const email = req.body.email ;
            const query = "INSERT INTO admin (alias, email, password) VALUES (?,?,?)";
            const result = await Query.write(query, {alias,email, hashedPWD});
            
            res.status(201).json(success("Created admin !", result));
        }
        
    } catch (error) {
        res.status(500).json(error);
        throw Error(error);
    }
}

const signin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const query1 = "SELECT id, alias, email, password FROM admin WHERE email = ?";
        const [admin] = await Query.findByValue(query1, email);
        if(!admin || (admin.email !== req.body.email)){
            res.status(401).json(error("Id invalid"));
            return;
        } 
        const isSame = await compare(password, admin.password);        
        if(isSame){
            const TOKEN = jwt.sign({id: admin.id}, TOKEN_SECRET );
            const { email } = admin;
            res.status(200).json(success("Connection succeeded", {TOKEN, email}));
        } else {
            res.status(401).json(error("Invalid password"));
        }
    } catch (error) {
        res.status(500).json(error);
        throw Error(error);
    }
}

export {checkToken, signup, signin};