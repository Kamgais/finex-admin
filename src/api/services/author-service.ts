import axios from "axios";
import { SaveAuthorDTO } from "../models/save-author-dto";

const API_URL = 'http://localhost:8000/api';

// Create (Save Author)
export const saveAuthor = async (author: SaveAuthorDTO) => {
    try {
        const formData = new FormData();
        formData.append('name', author.name);
        formData.append('gender', author.gender);
        formData.append('country', author.nationality);
        if (author.photo) formData.append('imageauthor', author.photo);
        formData.append('description', author.description);
        formData.append('date_nais', author.birthDate);
        formData.append('email', author.email);

        const response = await axios.post(`${API_URL}/saveauthor`, formData);

        if (response.data) return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Read (Get all authors)
export const getAllAuthors = async () => {
    try {
        const response = await axios.get(`${API_URL}/allauthor`);
        const authors = transformAuthorsResponse(response.data)
        return Promise.resolve(authors);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Read (Get author by ID)
export const getAuthorById = async (id:any) => {
    try {
        const response = await axios.get(`${API_URL}/getbyauthor/${id}`);
        return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Update (Update author by ID)
export const updateAuthor = async (id:any, author: SaveAuthorDTO) => {
    try {
        const formData = new FormData();
        formData.append('name', author.name);
        formData.append('gender', author.gender);
        formData.append('country', author.nationality);
        if (author.photo) formData.append('imageauthor', author.photo);
        formData.append('description', author.description);
        formData.append('date_nais', author.birthDate);
        formData.append('email', author.email);

        const response = await axios.put(`${API_URL}/updateauthor/${id}`, formData);

        if (response.data) return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Delete (Delete author by ID)
export const deleteAuthor = async (id:any) => {
    try {
        const response = await axios.delete(`${API_URL}/deleteauthor/${id}`);
        return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};


// Convert server response to client model
export const transformAuthorResponse = (response: any): SaveAuthorDTO => {
    return {
        id: response.id,
        name: response.name, // Same name in both
        gender: response.gender, // Same name in both
        nationality: response.country, // Maps `country` to `nationality`
        photo: response.imageauthor, // Maps `imageauthor` to `photo`
        description: response.description, // Same name in both
        birthDate: response.date_nais, // Maps `date_nais` to `birthDate`
        email: response.email, // Same name in both
        phone: ""
    };
};

// Convert a list of authors
export const transformAuthorsResponse = (responses: any[]): SaveAuthorDTO[] => {
    return responses.map(transformAuthorResponse);
};
