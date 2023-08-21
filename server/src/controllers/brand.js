import { success } from "../helpers/index.js";
import Query from "../models/query.js";

// Lecture des marques 

export const all = async (req, res) => {
    try {
        const query = "SELECT brand.id, brand.title from brand";
        const [brands] = await Query.find(query);
        if (brands.length) {
            const msg = "Display brands of products succeeded";
            res.status(200).json(success(msg, brands));
        } else {
            const msg = "Brands not yet";
            res.status(200).json(success(msg));
        }
    } catch (error) {
        res.status(500).json(error);
        throw Error(error);
    }
}

// Lecture d'une seule marque
export const one = async (req, res) => {
    try {
        const queryBrand = "SELECT id, title FROM brand WHERE id = ?";

        const brand = await Query.findByValue(queryBrand, req.params.id);

        if (!brand) {
            const msg = "This brand doesn't exist in the database";
            res.status(200).json(success(msg));
        } else {
            const msg = "Display of the brand " + brand[0].title;
            res.status(200).json(success(msg, brand));
        }
    } catch (error) {
        res.status(500).json(error);
        throw Error(err);
    }
}

//  Pour ajouter une marque dans la base de données

export const addBrand = async (req, res) => {
    try {
        const query = "INSERT INTO brand (title) VALUES (?)";
        const [result] = await Query.write(query, req.body);

        if (result.affectedRows) {
            const msg = `Creating ${result.affectedRows} line with brand's id ${result.insertId}`;
            res.status(201).json(success(msg));
        } else throw Error("Not added brand because syntax error in the object.");

    } catch (error) {
        throw Error(error);
    }
}

// Pour modifier le nom de la marque

export const update = async (req, res) => {
    const {title} = req.body;

    try {

        const query = "UPDATE brand SET brand.title = ? WHERE brand.id = ?";
        const [result] = await Query.write(query, [title, req.params.id]);

        if (result.affectedRows) {
            const msg = `Modified brand : ${result.info}`;
            res.status(200).json(success(msg));

        } else throw Error(`Not modified brand because can't find the brand with an ${req.params.id}`);

    } catch (error) {
        throw Error(error);
    }
}

export const remove = async (req, res) => {
    try {
        const query = "DELETE FROM brand WHERE id = ?";
        const result = await Query.remove(query, [req.params.id]);

        if (result.affectedRows) {
            const msg = "Removed brand";
            res.status(200).json(success(msg));

        } else throw Error(`Can't find the brand with an ID ${req.params.id}`);

    } catch (error) {
        throw Error(error);
    }
}