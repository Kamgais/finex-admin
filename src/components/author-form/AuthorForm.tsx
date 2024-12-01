import React, { useEffect, useState } from "react";
import "./AuthorForm.css";
import UserIcon from '../../assets/icons_png/user.png';
import CountrySelect from "../country-select/CountrySelect";
import { createFileFromUrl } from "../../lib/convert";

type AuthorFormProps = {
  onSubmit: (formData: AuthorFormData) => void;
  data?: any
};

type AuthorFormData = {
  name: string;
  description: string;
  birthDate: string;
  email: string;
  phone: string;
  nationality: string;
  gender: string;
  photo: File | null;
};

const AuthorForm: React.FC<AuthorFormProps> = ({ onSubmit, data }) => {
  const [formData, setFormData] = useState<AuthorFormData>({
    name: data ? data.name : "",
    description: data ? data.description : "",
    birthDate: data ? data.birthDate : "",
    email: data? data.email : "",
    phone: data? data.phone : "",
    nationality: data ? data.nationality : "Cameroun",
    gender: data && data.gender ? data.gender : "Masculin",
    photo: data && data.photo ? createFileFromUrl(data.photo) : null ,
  });
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState("");
  const [selectedNationality, setSelectedNationality] = useState(formData.nationality);

  const handlePhoneCountryChange = (value: string) => {
    setSelectedPhoneCountry(value);
  };

  const handleNationalityChange = (value: string) => {
    setSelectedNationality(value);
    setFormData({
        ...formData,
        nationality: value,
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };


  useEffect(() => {

  },[])

  return (
    <form onSubmit={handleSubmit} className="author-form">
      <div className="form-group-upload">
        <div className="user-icon-img">
        <img src={formData.photo ? URL.createObjectURL(formData.photo!) : data?.photo ? `http://127.0.0.1:8000/images/authors/${data.photo}` : UserIcon} alt="" />
        </div>
        <div>
        <label htmlFor="photo" className="upload-photo-button">
            Importer une photo
        </label>
        <input type="file" id="photo" accept="image/*" onChange={handleFileChange} style={{display: 'none'}} />
        <span>{formData.photo && formData.photo.name}</span>
        </div>
        
      </div>

      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nom auteur"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description de l'auteur"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="birthDate">Date de Naissance</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email de auteur"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <div className="phone-input-group">
        <CountrySelect value={selectedPhoneCountry} onChange={handlePhoneCountryChange} />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+237"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="nationality">Nationalité</label>
        <CountrySelect value={selectedNationality} onChange={handleNationalityChange} />
      </div>

      <div className="form-group">
        <label htmlFor="gender">Sexe</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
        </select>
      </div>

      <button type="submit" className="submit-button">{data !== null ? "Sauvegarder" : "Ajouter"}</button>
    </form>
  );
};

export default AuthorForm;
