import { useEffect, useState } from "react";
import "./OrderForm.css";


function OrderForm({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
    deliveryDate: "",
    note: "",
  });

  // Close form with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "917720014507";

    const message = `Hello Harwale.com 👋

🌺 New Order

Product: ${product.title}
Quantity: ${formData.quantity}

👤 Name: ${formData.name}
📱 Mobile: ${formData.phone}
📍 Address: ${formData.address}
📅 Delivery Date: ${formData.deliveryDate}

📝 Note: ${formData.note || "No special note"}

Please confirm my order and payment details.`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="order-overlay"
      onClick={handleOverlayClick}
    >
      <div className="order-modal">

        <button
          className="order-close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="order-header">
          <p>HARWALE.COM</p>

          <h2>Complete Your Order</h2>

          <span>{product.title}</span>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="10 digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>

          <div className="form-group">
            <label>Delivery Address</label>

            <textarea
              name="address"
              placeholder="Enter complete delivery address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Quantity</label>

              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Delivery Date</label>

              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>
              Special Note <span>Optional</span>
            </label>

            <textarea
              name="note"
              placeholder="Any special requirement?"
              value={formData.note}
              onChange={handleChange}
              rows="2"
            />
          </div>

          <button
            className="submit-order"
            type="submit"
          >
            Continue on WhatsApp
            <span>↗</span>
          </button>

          <p className="order-note">
            Your order details will open in WhatsApp.
          </p>

        </form>

      </div>
    </div>
  );
}

export default OrderForm;