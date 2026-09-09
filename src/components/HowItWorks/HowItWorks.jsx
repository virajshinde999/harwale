import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "✦",
      title: "Choose Your Pack",
      description:
        "Daily Combo, 11 Days Bappa Pack ya Mandal Special Haar me se apni requirement choose karo.",
    },
    {
      number: "02",
      icon: "↗",
      title: "Order on WhatsApp",
      description:
        "Order form me apni details fill karo aur order directly WhatsApp par send karo.",
    },
    {
      number: "03",
      icon: "❋",
      title: "Fresh Haar Delivered",
      description:
        "Selected delivery date par fresh haar, durva aur puja flowers receive karo.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">

        {/* Heading */}
        <div className="how-heading">
          <p className="how-label">SIMPLE & EASY</p>

          <h2>
            How It
            <span> Works.</span>
          </h2>

          <p className="how-intro">
            Bappa ki seva ke liye fresh flowers order karna
            ab sirf kuch simple steps ka kaam hai.
          </p>
        </div>

        {/* Steps */}
        <div className="how-steps">
          {steps.map((step) => (
            <div className="how-step" key={step.number}>

              <div className="step-top">
                <span className="step-number">
                  {step.number}
                </span>

                <div className="step-icon">
                  {step.icon}
                </div>
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="how-bottom">
          <span>✦</span>
          <p>Fresh flowers. Simple ordering. Peaceful celebration.</p>
          <span>✦</span>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;