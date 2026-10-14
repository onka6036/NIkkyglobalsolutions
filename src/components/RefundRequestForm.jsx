import { useState } from 'react';
import { CheckCircle2, LoaderCircle, Upload } from 'lucide-react';

const initialState = {
  orderRef: '',
  customerName: '',
  email: '',
  phone: '',
  purchaseDate: '',
  deliveryDate: '',
  productName: '',
  reason: '',
  resolution: 'Refund',
  acknowledged: false,
};

export default function RefundRequestForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.orderRef.trim()) nextErrors.orderRef = 'Order or receipt reference is required.';
    if (!formData.customerName.trim()) nextErrors.customerName = 'Customer name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email address.';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!formData.productName.trim()) nextErrors.productName = 'Product name is required.';
    if (!formData.reason.trim()) nextErrors.reason = 'Please state the reason for the refund request.';
    if (!formData.acknowledged) nextErrors.acknowledged = 'Please confirm you understand the policy.';

    return nextErrors;
  };

  const onChange = (event) => {
    const { name, type, value, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;
    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setReference(`REF-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-panel refund-success" role="status" aria-live="polite">
        <CheckCircle2 size={32} />
        <h3>Refund request submitted</h3>
        <p>
          Your request has been prepared for review. Reference number: <strong>{reference}</strong>
        </p>
        <p>
          This demo does not send a live refund to a backend. Connect this form to your email system or customer support workflow before publication.
        </p>
      </div>
    );
  }

  return (
    <form className="request-form refund-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid two-column">
        <div className="field-group">
          <label htmlFor="orderRef">Order or Receipt Reference</label>
          <input id="orderRef" name="orderRef" value={formData.orderRef} onChange={onChange} className={errors.orderRef ? 'has-error' : ''} />
          {errors.orderRef && <small className="error-text">{errors.orderRef}</small>}
        </div>

        <div className="field-group">
          <label htmlFor="customerName">Customer Name</label>
          <input id="customerName" name="customerName" value={formData.customerName} onChange={onChange} className={errors.customerName ? 'has-error' : ''} />
          {errors.customerName && <small className="error-text">{errors.customerName}</small>}
        </div>

        <div className="field-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={onChange} className={errors.email ? 'has-error' : ''} />
          {errors.email && <small className="error-text">{errors.email}</small>}
        </div>

        <div className="field-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={onChange} className={errors.phone ? 'has-error' : ''} />
          {errors.phone && <small className="error-text">{errors.phone}</small>}
        </div>

        <div className="field-group">
          <label htmlFor="purchaseDate">Purchase Date</label>
          <input id="purchaseDate" name="purchaseDate" type="date" value={formData.purchaseDate} onChange={onChange} />
        </div>

        <div className="field-group">
          <label htmlFor="deliveryDate">Delivery Date</label>
          <input id="deliveryDate" name="deliveryDate" type="date" value={formData.deliveryDate} onChange={onChange} />
        </div>

        <div className="field-group full-width">
          <label htmlFor="productName">Product Name</label>
          <input id="productName" name="productName" value={formData.productName} onChange={onChange} className={errors.productName ? 'has-error' : ''} />
          {errors.productName && <small className="error-text">{errors.productName}</small>}
        </div>

        <div className="field-group full-width">
          <label htmlFor="reason">Reason for Refund Request</label>
          <textarea id="reason" name="reason" rows="4" value={formData.reason} onChange={onChange} className={errors.reason ? 'has-error' : ''} />
          {errors.reason && <small className="error-text">{errors.reason}</small>}
        </div>

        <div className="field-group full-width">
          <label htmlFor="image-upload">Photographs of the Item (optional)</label>
          <div className="upload-box">
            <Upload size={18} />
            <input id="image-upload" type="file" accept="image/*" />
          </div>
        </div>

        <div className="field-group">
          <label htmlFor="resolution">Preferred Resolution</label>
          <select id="resolution" name="resolution" value={formData.resolution} onChange={onChange}>
            <option>Refund</option>
            <option>Exchange</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="checkbox-row">
        <label className="checkbox-label">
          <input type="checkbox" name="acknowledged" checked={formData.acknowledged} onChange={onChange} />
          <span>I acknowledge that the three-day refund policy is informational and does not exclude any mandatory consumer rights under applicable law.</span>
        </label>
        {errors.acknowledged && <small className="error-text">{errors.acknowledged}</small>}
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle className="spin" size={18} />
              Submitting refund request...
            </>
          ) : (
            'Submit Refund Request'
          )}
        </button>
      </div>
    </form>
  );
}
