import React from "react";

function ProductDescriprition() {
  return (
    <div className="product-description">
      <div className="container">
        <div className="description">
          <h3>Conscious</h3>
          <p className="twin-duvet">
            Twin duvet cover set in soft, woven fabric made from a
            Tencel™lyocell and cotton blend with a printed pattern. One
            pillowcase. Thread count 144.
          </p>
          <p className="Composition">
            Composition — <span>Cotton 50%, Lyocell 50%</span>
          </p>
          <p className="Composition">
            {" "}
            Art. No.<span> — 0643448004</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriprition;
