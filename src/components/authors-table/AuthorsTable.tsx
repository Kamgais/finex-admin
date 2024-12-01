import React, { useEffect, useState } from 'react';
import './authors-table.css';
import Modal from '../modal/modal';
import AuthorForm from '../author-form/AuthorForm';
import { deleteAuthor, getAllAuthors, saveAuthor, updateAuthor } from '../../api/services/author-service';
import { SaveAuthorDTO } from '../../api/models/save-author-dto';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import ConfirmModal from '../confirm-modal/ConfirmModal';

const AuthorsTable: React.FC = () => {
  const [authorList, setAuthorList] = useState<SaveAuthorDTO[]>([]);
  const [singleAuthor, setSingleAuthor] = useState<any>(null);
  const [deletedId, setDeletedId] = useState<number>();

  const getAuthors = async() => {
    try {
      const data = await getAllAuthors();
      console.log(data);
      setAuthorList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAuthors()
  },[]) 
 

  const [isModalOpen, setModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);




  const openConfirmModal = (id: number) => {
    setConfirmModalOpen(true);
    setDeletedId(id)
  }

  const handleConfirm = async() => {
    await handleDelete(deletedId!)
    setConfirmModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled!");
    setConfirmModalOpen(false);
  };

  const openModal = (data?:any) => {
    setModalOpen(true);
     data && setSingleAuthor(data);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(authorList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = authorList.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  const handleSubmit = async(formData:any) => {
    try {
      if(formData.id) {
        const data = await updateAuthor(formData.id, formData);
        console.log(data);
      }
      else {
        const data = await saveAuthor(formData);
        console.log(data);
      }
      
    } catch (error) {
      console.log(error);
    }
  }



  const handleDelete = async(id: number) => {
    try {
      const data = await deleteAuthor(id);
      console.log("Deleted...")
    } catch (error) {
      console.log(error)
    }
  }



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
                      src={`http://127.0.0.1:8000/images/authors/${author.photo}`}
                      alt="Author Avatar"
                      className="author-avatar"
                    />
                    <span>{author.name}</span>
                  </div>
                </td>
                <td>{author.description}</td>
                <td>{author.birthDate}</td>
                <td>{author.email}</td>
                <td>{author.phone}</td>
                <td>{author.nationality}</td>
                <td>{author.gender}</td>
                <td>
                  <button className="block-button" onClick={() => openConfirmModal(author.id!)}>
                  <MdDelete />
                  </button>
                  <button className="edit-button" onClick={() => openModal(author)}>
                  <FaEdit />
                  </button>
                  <button className='more-button'>
                  <FaRegEye />
                  </button>
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
      <button className="add-author-button" onClick={() => openModal()}>Ajouter un Auteur</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AuthorForm onSubmit={handleSubmit} data={singleAuthor}/>
        </Modal>
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          title="Supprimer"
          message="Etes-vous sur de vouloir supprimer cet auteur ?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default AuthorsTable;
