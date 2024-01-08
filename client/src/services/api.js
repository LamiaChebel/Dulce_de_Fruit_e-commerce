import axios from "axios";

// Authentification client non fini

// async function getAdminAuth(url/*, TOKEN*/) {
//     try {
//         return await axios.get(url/*, { headers: { "x-access-token": TOKEN } }*/);
//     } catch (error) {
//         return error;
//     }
// }

// Lecture des données

async function getDatas(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        throw new Error(error);
    }
}

//  Ajout de contenus API

async function add(url, datas) {
    try {
        return await axios.post(url, datas);
    } catch (error) {
        throw new Error(error);
    }
}

// Modifier

async function update(url, data) {
    try {
        return await axios.patch(url, data);
    } catch (error) {
        throw new Error(error);
    }
}

// Supprimer

async function remove(url, data) {
    try {
        return await axios.delete(url, data);
    } catch (error) {
        throw new Error(error);
    }
}


// // Enregistrement 
// async function signup(url,datas) {
//     try {
//         return await axios.post(url, datas);
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// async function signin(url,datas) {
//     try {
//         return await axios.post(url, datas);
//     } catch (error) {
//         throw new Error(error);
//     }
// }

export { /*getAdminAuth,*/ getDatas, add, update, remove/* signup, signin*/};
