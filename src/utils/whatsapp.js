const WHATSAPP_NUMBER = "917720014507";

export function orderOnWhatsApp(product) {
  let message = "";

  if (product.type === "daily") {
    message = `Hello Harwale.com 👋

Mujhe Daily Combo order karna hai.

🌼 Product: Daily Combo
📦 Includes:
• 1 Fresh Flower Haar
• Fresh Durva
• Puja Flowers

Please order details share karein.`;
  }

  if (product.type === "eleven-days") {
    message = `Hello Harwale.com 👋

Mujhe 11 Days Bappa Pack book karna hai.

🪔 Product: 11 Days Bappa Pack
📦 Includes:
• 11 Fresh Flower Haar
• 11 Days Durva
• 11 Days Puja Flowers

Please booking aur payment details share karein.`;
  }

  if (product.type === "mandal") {
    message = `Hello Harwale.com 👋

Mujhe Mandal Special Haar ke baare mein enquiry karni hai.

🛕 Product: Mandal Special Haar
📦 Requirement:
• Large Size Haar
• Custom Quantity
• Bulk Order

Please details aur pricing share karein.`;
  }

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank"
  );
}