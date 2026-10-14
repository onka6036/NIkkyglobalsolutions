import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, LoaderCircle, Upload, Info } from 'lucide-react';

const requestTypes = [
  'Product Enquiry',
  'Service Request',
  'Custom Order',
  'Antique Valuation',
  'Restoration',
  'Delivery Enquiry',
  'General Enquiry',
];

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  contactMethod: 'Email',
  requestType: 'Product Enquiry',
  productServiceName: '',
  itemCategory: '',
  description: '',
  budget: '',
  preferredDate: '',
  deliveryLocation: '',
  notes: '',
  consent: false,
};

const detectInitialValues = (initialValues = {}) => ({
  ...defaultValues,
  ...initialValues,
});

export default function RequestForm({ initialValues = {} }) {
  const [formData, setFormData] = useState(() => detectInitialValues(initialValues));
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    setFormData(detectInitialValues(initialValues));
    setErrors({});
    setSubmitted(false);
    setReference('');
    setImagePreview('');
  }, [initialValues]);

  const requestTypeOption = useMemo(() => formData.requestType || requestTypes[0], [formData.requestType]);

  const validate = () => {
    const nextErrors = {};
    const requiredMessage = 'This field is required.';

    if (!formData.name.trim()) nextErrors.name = requiredMessage;
    if (!formData.email.trim()) nextErrors.email = requiredMessage;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';

    if (!formData.phone.trim()) nextErrors.phone = requiredMessage;
    else if (!/^[+]?[(]?[0-9\s-]{7,}$/.test(formData.phone)) nextErrors.phone = 'Please enter a valid phone number.';

    if (!formData.productServiceName.trim()) nextErrors.productServiceName = requiredMessage;
    if (!formData.description.trim()) nextErrors.description = requiredMessage;
    if (!formData.consent) nextErrors.consent = 'Please confirm you agree to the privacy notice.';

    return nextErrors;
  };

  const onChange = (event) => {
    const { name, type, value, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  };

  const onFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      setImagePreview('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1100));

    const ref = `REQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReference(ref);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="request-form-shell">
      <div className="section-heading narrow">
        <p className="eyebrow">Customer request</p>
        <h2>Request a product, service, or valuation</h2>
      </div>

      <div className="demo-note">
        <Info size={16} />
        <span>This is a frontend demo form. Connect it to a real email or form service such as Formspree, EmailJS, Netlify Forms, or your CRM before publishing.</span>
      </div>

      {!submitted ? (
        <form className="request-form" onSubmit={onSubmit} noValidate>
          <div className="form-grid two-column">
            <div className="field-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={onChange} className={errors.name ? 'has-error' : ''} />
              {errors.name && <small className="error-text">{errors.name}</small>}
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
              <label htmlFor="contactMethod">Preferred Contact Method</label>
              <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={onChange}>
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="requestType">Request Type</label>
              <select id="requestType" name="requestType" value={requestTypeOption} onChange={onChange}>
                {requestTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="productServiceName">Product or Service Name</label>
              <input
                id="productServiceName"
                name="productServiceName"
                type="text"
                value={formData.productServiceName}
                onChange={onChange}
                className={errors.productServiceName ? 'has-error' : ''}
              />
              {errors.productServiceName && <small className="error-text">{errors.productServiceName}</small>}
            </div>

            <div className="field-group">
              <label htmlFor="itemCategory">Item Category</label>
              <input id="itemCategory" name="itemCategory" type="text" value={formData.itemCategory} onChange={onChange} placeholder="e.g. Decorative clocks, mirrors, restoration" />
            </div>

            <div className="field-group">
              <label htmlFor="budget">Budget or Estimated Value</label>
              <input id="budget" name="budget" type="text" value={formData.budget} onChange={onChange} placeholder="Optional" />
            </div>

            <div className="field-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input id="preferredDate" name="preferredDate" type="date" value={formData.preferredDate} onChange={onChange} />
            </div>

            <div className="field-group full-width">
              <label htmlFor="deliveryLocation">Delivery Location</label>
              <input id="deliveryLocation" name="deliveryLocation" type="text" value={formData.deliveryLocation} onChange={onChange} placeholder="Optional" />
            </div>

            <div className="field-group full-width">
              <label htmlFor="description">Detailed Request Description</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={onChange}
                className={errors.description ? 'has-error' : ''}
              />
              {errors.description && <small className="error-text">{errors.description}</small>}
            </div>

            <div className="field-group full-width">
              <label htmlFor="photo-upload">Image Upload</label>
              <div className="upload-box">
                <Upload size={18} />
                <input id="photo-upload" type="file" accept="image/*" onChange={onFileChange} />
              </div>
              {imagePreview && <img src={imagePreview} alt="Preview upload" className="upload-preview" />}
            </div>

            <div className="field-group full-width">
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={onChange} placeholder="Optional" />
            </div>
          </div>

          <div className="checkbox-row">
            <label className="checkbox-label">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={onChange} />
              <span>I agree to the privacy notice and consent to this enquiry being reviewed.</span>
            </label>
            {errors.consent && <small className="error-text">{errors.consent}</small>}
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <LoaderCircle className="spin" size={18} />
                  Sending request...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="success-panel" role="status" aria-live="polite">
          <CheckCircle2 size={32} />
          <h3>Request received</h3>
          <p>
            Your enquiry has been drafted successfully. Reference number: <strong>{reference}</strong>
          </p>
          <div className="confirmation-summary">
            <p><strong>Request type:</strong> {formData.requestType}</p>
            <p><strong>Item / service:</strong> {formData.productServiceName}</p>
            <p><strong>Contact method:</strong> {formData.contactMethod}</p>
            <p><strong>Preferred date:</strong> {formData.preferredDate || 'Not specified'}</p>
          </div>
          <button type="button" className="secondary-button" onClick={() => setSubmitted(false)}>Send another request</button>
        </div>
      )}
    </div>
  );
}
