import React, { useState } from 'react';
import './authors-table.css';

const AuthorsTable: React.FC = () => {
  // Simulating data for 50 authors
  const allAuthors = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Author ${index + 1}`,
    description: 'Presentateur...',
    dateOfBirth: '12/04/2023',
    email: `author${index + 1}@example.com`,
    phone: `+237698615${index.toString().padStart(3, '0')}`,
    nationality: 'Cameroun',
    gender: index % 2 === 0 ? 'Masculin' : 'Féminin',
  }));

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(allAuthors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allAuthors.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="authors-table-container">
      {/* Search and Filter Section */}
      <div className="authors-search-filter">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Recherche un auteur"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        <button className="filter-button">Filter</button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="authors-table">
          <thead>
            <tr>
              <th>N°</th>
              <th>Nom</th>
              <th>Description</th>
              <th>DN</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Nationalité</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>
                  <div className="author-name">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Author Avatar"
                      className="author-avatar"
                    />
                    <span>{author.name}</span>
                  </div>
                </td>
                <td>{author.description}</td>
                <td>{author.dateOfBirth}</td>
                <td>{author.email}</td>
                <td>{author.phone}</td>
                <td>{author.nationality}</td>
                <td>{author.gender}</td>
                <td>
                  <button className="block-button">Bloquer</button>
                  <button className="edit-button">Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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

      {/* Add Author Button */}
      <button className="add-author-button">Ajouter un Auteur</button>
    </div>
  );
};

export default AuthorsTable;
