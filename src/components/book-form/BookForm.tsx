import React, { useState } from "react";
import "./BookForm.css";


const BookForm: React.FC = () => {
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("Français");
  const [publicationDate, setPublicationDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [priceDigital, setPriceDigital] = useState("");
  const [pricePhysical, setPricePhysical] = useState("");
  const [status, setStatus] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      bookName,
      description,
      author,
      language,
      publicationDate,
      priceDigital,
      pricePhysical,
      status,
    });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Importer une photo</label>
        <input type="file" accept="image/*" />
      </div>

      <div className="form-group">
        <label>Nom</label>
        <input
          type="text"
          placeholder="Nom du livre"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Description du livre"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Auteur</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Choix de l'auteur</option>
          <option value="Auteur 1">Auteur 1</option>
          <option value="Auteur 2">Auteur 2</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Langue</label>
          <input
            type="text"
            placeholder="Français"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date Publication</label>
          <div className="date-input">
            <input
              type="text"
              placeholder="mm"
              value={publicationDate.month}
              onChange={(e) =>
                setPublicationDate({ ...publicationDate, month: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="jj"
              value={publicationDate.day}
              onChange={(e) =>
                setPublicationDate({ ...publicationDate, day: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Année"
              value={publicationDate.year}
              onChange={(e) =>
                setPublicationDate({ ...publicationDate, year: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Prix N</label>
          <input
            type="text"
            placeholder="Prix Numérique"
            value={priceDigital}
            onChange={(e) => setPriceDigital(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Prix P</label>
          <input
            type="text"
            placeholder="Prix Physique"
            value={pricePhysical}
            onChange={(e) => setPricePhysical(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          >
          <option value="">Choix status</option>
          <option value="Disponible">Disponible</option>
          <option value="Indisponible">Indisponible</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Modifier
      </button>
   
    </form>
  );
};

export default BookForm;
