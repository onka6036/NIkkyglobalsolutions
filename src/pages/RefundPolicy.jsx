import RefundRequestForm from '../components/RefundRequestForm';

export default function RefundPolicy() {
  return (
    <main className="page-shell">
      <section className="page-hero small-hero">
        <div className="container">
          <p className="eyebrow">Refund policy</p>
          <h1>Three-day refund and returns information</h1>
        </div>
      </section>

      <section className="section">
        <div className="container policy-text">
          <p>
            Our business aims to ensure customer satisfaction. Customers may submit a refund or return request within three (3) calendar days of receiving their purchase. To request a refund, customers should provide their order reference, proof of purchase, and a description of the reason for the request.
          </p>
          <p>
            Returned items may need to be inspected to confirm their condition. Customers should contact us before returning any item to receive return instructions.
          </p>
          <p>
            Because antique and vintage items may be unique, aged, fragile, or previously owned, their condition and any disclosed imperfections should be considered when assessing a return request.
          </p>
          <p>
            Refunds, returns, exchanges, return shipping costs, and processing times will be handled in accordance with our disclosed terms and applicable consumer protection laws.
          </p>
          <div className="notice-box">
            This three-day policy is intended as a customer service standard and does not remove any mandatory consumer rights under applicable law.
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Refund request</p>
            <h2>Submit a refund enquiry</h2>
          </div>
          <RefundRequestForm />
        </div>
      </section>
    </main>
  );
}
