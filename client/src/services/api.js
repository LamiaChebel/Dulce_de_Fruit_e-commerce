import axios from "axios";

async function getCustomerAuth(url/*, TOKEN*/) {
    try {
        return await axios.get(url/*, { headers: { "x-access-token": TOKEN } }*/);
    } catch (error) {
        return error;
    }
}

async function getDatas(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        throw new Error(error);
    }
}

async function signup(datas) {
    try {
        return await axios.post("/customer/signup", datas);
    } catch (error) {
        throw new Error(error);
    }
}

async function signin(datas) {
    try {
        return await axios.post("/ucustomer/signin", datas);
    } catch (error) {
        throw new Error(error);
    }
}

export { getCustomerAuth, getDatas, signup, signin };
