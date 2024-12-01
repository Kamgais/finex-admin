import axios from "axios";
import { SaveBookDTO } from "../models/save-book-dto";

const API_URL = 'http://localhost:8000/api';

// Create (Save Book)
export const saveBook = async (book:any) => {
    try {
        const formData = new FormData();
        formData.append('title', book.bookName);
        formData.append('description', book.description);
        formData.append('author_id', book.author);
        formData.append('language', book.language);
        formData.append('pub_date', book.publicationDate);
        formData.append('price_n', book.priceDigital);
        formData.append('price_p', book.pricePhysical);
        formData.append('status', book.status);
        formData.append('category', book.category);
        formData.append('niveau', book.niveau);
        formData.append('user_id', book.user_id);
        if (book.image) formData.append('image', book.image);

        const response = await axios.post(`${API_URL}/saveBook`, formData);

        if (response.data) return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Read (Get all books)
export const getAllBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books`);
        return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Read (Get book by ID)
export const getBookById = async (id:any) => {
    try {
        const response = await axios.get(`${API_URL}/books/${id}`);
        return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Update (Update book by ID)
export const updateBook = async (id:any, book: SaveBookDTO) => {
    try {
        const formData = new FormData();
        formData.append('title', book.title);
        formData.append('description', book.description);
        formData.append('author_id', book.author_id);
        formData.append('language', book.language);
        formData.append('pub_date', book.pub_date);
        formData.append('price_n', book.price_n);
        formData.append('price_p', book.price_p);
        formData.append('status', book.status);
        formData.append('category', book.category);
        formData.append('niveau', book.niveau);
        formData.append('user_id', book.user_id);
        if (book.image) formData.append('image', book.image);

        const response = await axios.put(`${API_URL}/books/${id}`, formData);

        if (response.data) return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

// Delete (Delete book by ID)
export const deleteBook = async (id:any) => {
    try {
        const response = await axios.delete(`${API_URL}/books/${id}`);
        return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};