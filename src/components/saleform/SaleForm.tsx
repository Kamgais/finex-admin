import React, { useState } from "react";
import "./SaleForm.css";

const SaleForm: React.FC = () => {
  const [saleDate, setSaleDate] = useState({ day: "", month: "", year: "" });
  const [bookName, setBookName] = useState("Mesopotamia");
  const [author, setAuthor] = useState("Gaël Faye");
  const [quantity, setQuantity] = useState("01");
  const [unitPrice, setUnitPrice] = useState("23 $");
  const [totalPrice, setTotalPrice] = useState("23 $");
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const [status, setStatus] = useState("Terminé");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      saleDate,
      bookName,
      author,
      quantity,
      unitPrice,
      totalPrice,
      paymentMethod,
      status,
    });
  };

  return (
    <form className="sale-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Date de vente</label>
        <div className="date-input">
          <input
            type="text"
            placeholder="jj"
            value={saleDate.day}
            onChange={(e) =>
              setSaleDate({ ...saleDate, day: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="mm"
            value={saleDate.month}
            onChange={(e) =>
              setSaleDate({ ...saleDate, month: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="aaaa"
            value={saleDate.year}
            onChange={(e) =>
              setSaleDate({ ...saleDate, year: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-group">
        <label>Nom du livre</label>
        <input
          type="text"
          placeholder="Nom du livre"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Auteur</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Gaël Faye">Gaël Faye</option>
          <option value="Other Author">Other Author</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantité</label>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Prix Unitaire</label>
          <input
            type="text"
            placeholder="Prix Unitaire"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Prix Total</label>
          <input
            type="text"
            placeholder="Prix Total"
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Moyen paiement</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Paypal">Paypal</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
      </div>

      <div className="form-group">
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Terminé">Terminé</option>
          <option value="En attente">En attente</option>
          <option value="Annulé">Annulé</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Modifier
      </button>
    </form>
  );
};

export default SaleForm;
