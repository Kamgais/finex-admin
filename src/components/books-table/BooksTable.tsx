import React, { useState } from 'react';
import './books-table.css';
import Modal from '../modal/modal';
import BookForm from '../book-form/BookForm';

const BooksTable: React.FC = () => {
  const books = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: 'Mesopotamia',
    description: 'Presentateur...',
    author: 'Gael Faye',
    language: 'Français',
    publicationDate: '12/90/1997',
    priceN: '19$',
    priceP: '25$',
    status: 'Nouveau',
    imageUrl: 'https://via.placeholder.com/40',
  }));

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(books.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = books.slice(startIndex, startIndex + itemsPerPage);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="books-table-container">
      {/* Search and Filter Section */}
      <div className="books-search-filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Recherche un livre"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        <button className="filter-button">Filter</button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="books-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Auteur</th>
              <th>Langue</th>
              <th>Date publication</th>
              <th>Prix N</th>
              <th>Prix P</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((book) => (
              <tr key={book.id}>
                <td>
                  <div className="book-name">
                    <img
                      src={book.imageUrl}
                      alt={book.name}
                      className="book-image"
                    />
                    <span>{book.name}</span>
                  </div>
                </td>
                <td>{book.description}</td>
                <td>{book.author}</td>
                <td>{book.language}</td>
                <td>{book.publicationDate}</td>
                <td>{book.priceN}</td>
                <td>{book.priceP}</td>
                <td>
                  <span className="status-badge">{book.status}</span>
                </td>
                <td>
                  <button className="delete-button">Supprimer</button>
                  <button className="edit-button">Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Add Book Button */}
      <button className="add-book-button" onClick={openModal}>Ajouter un livre</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <BookForm/>
        </Modal>
      )}
    </div>
  );
};

export default BooksTable;
