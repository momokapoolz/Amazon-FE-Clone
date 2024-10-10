import axios from "axios"

const DOMAIN_BE = 'http://localhost:8079'

export const login = async (model: any) => {
    const {data} = await axios.post(`${DOMAIN_BE}/auth/login`, model)

    return data;
}



export const searchproduct = async (name:string, page:string) => {
    const {data} = await axios.post(`${DOMAIN_BE}/product/search-pagination?name=${name}&page=${page}`)

    return data;
}