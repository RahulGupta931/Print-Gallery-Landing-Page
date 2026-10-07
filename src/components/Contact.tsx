import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { useInView } from '../hooks/useMotion';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    packagingType: 'Corrugated Shipping Boxes (3/5/7 Ply)',
    dimensions: '',
    quantity: '1,000 - 5,000 units',
    message: '',
  });
  const [submissionError, setSubmissionError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const handoff = e.currentTarget.dataset.handoff === 'email' ? 'email' : 'whatsapp';
    const enquiry = [
      'Hello PRINT GALLERY, I would like a packaging quote.',
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Category: ${formData.packagingType}`,
      `Quantity: ${formData.quantity}`,
      formData.dimensions ? `Specs: ${formData.dimensions}` : '',
      formData.message ? `Notes: ${formData.message}` : '',
    ].filter(Boolean).join('\n');
    const url = handoff === 'email'
      ? `mailto:printgallery17@gmail.com?subject=${encodeURIComponent('Packaging quote request')}&body=${encodeURIComponent(enquiry)}`
      : `https://wa.me/919810466405?text=${encodeURIComponent(enquiry)}`;

    try {
      sessionStorage.setItem('printGalleryQuoteHandoff', JSON.stringify({
        url,
        label: handoff === 'email' ? 'Continue to email' : 'Continue to WhatsApp',
      }));
      window.location.assign('/thank-you');
    } catch (error) {
      console.error('Unable to prepare the enquiry handoff.', error);
      setSubmissionError('We could not prepare your enquiry on this device. Please contact us by phone or email.');
    }
  };

  const whatsappMessage = encodeURIComponent(
    [
      'Hello PRINT GALLERY, I would like a packaging quote.',
      formData.name ? `Name: ${formData.name}` : '',
      formData.company ? `Company: ${formData.company}` : '',
      formData.packagingType ? `Category: ${formData.packagingType}` : '',
      formData.quantity ? `Quantity: ${formData.quantity}` : '',
      formData.dimensions ? `Specs: ${formData.dimensions}` : '',
      formData.message ? `Notes: ${formData.message}` : '',
      'Please connect with me.',
    ]
      .filter(Boolean)
      .join('\n')
  );

  const whatsappHref = `https://wa.me/919810466405?text=${whatsappMessage}`;

  return (
    <section id="contact" ref={ref} className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Noida Plant & Head Office</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <p className="text-slate-600 text-base">
            Ready to elevate your business with premium printing and packaging solutions? Contact us today to discuss your project or visit our Noida facility.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          <a
            href="tel:+919810466405"
            className="group flex items-center gap-3.5 bg-white border border-slate-200 hover:border-amber-300 rounded-2xl p-4 shadow-sm hover:shadow transition-all min-h-[72px]"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0 text-left">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Call Us</p>
              <p className="text-sm font-bold text-slate-900 truncate group-hover:text-amber-700">+91 9810466405</p>
            </div>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 bg-emerald-600 hover:bg-emerald-700 border border-emerald-500 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all min-h-[72px]"
          >
            <div className="w-11 h-11 rounded-xl bg-white/15 text-white flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div className="min-w-0 text-left">
              <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-100">WhatsApp</p>
              <p className="text-sm font-bold text-white">Chat with factory sales</p>
            </div>
          </a>

          <a
            href="mailto:printgallery17@gmail.com"
            className="group flex items-center gap-3.5 bg-white border border-slate-200 hover:border-amber-300 rounded-2xl p-4 shadow-sm hover:shadow transition-all min-h-[72px]"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0 text-left">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Email</p>
              <p className="text-sm font-bold text-slate-900 truncate group-hover:text-amber-700">printgallery17@gmail.com</p>
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    Request an Instant Quote
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill in your packaging specifications for factory-direct commercial pricing.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Gupta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Company / Brand Name *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      placeholder="e.g. Acme Industries Pvt Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile / WhatsApp Phone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98104 66405"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-packaging" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Packaging Service Category
                    </label>
                    <select
                      id="contact-packaging"
                      value={formData.packagingType}
                      onChange={(e) => setFormData({ ...formData, packagingType: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none"
                    >
                      <option>Corrugated Shipping Boxes (3/5/7 Ply)</option>
                      <option>Die-Cut E-commerce Mailer Boxes</option>
                      <option>Heavy-Duty Export Master Cartons</option>
                      <option>All-Format Offset Printed Cartons</option>
                      <option>Product & Barcode Labels</option>
                      <option>POS Displays & Standees</option>
                      <option>Custom CAD Prototyping</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-quantity" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Estimated Quantity
                    </label>
                    <select
                      id="contact-quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none"
                    >
                      <option>Sample Prototyping (1 - 50 pcs)</option>
                      <option>500 - 1,000 units</option>
                      <option>1,000 - 5,000 units</option>
                      <option>5,000 - 25,000 units</option>
                      <option>25,000+ units (Bulk Contract)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-dimensions" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Box Dimensions & Ply Specification (if known)
                  </label>
                  <input
                    id="contact-dimensions"
                    type="text"
                    placeholder="e.g. 14x10x8 inch, 5-Ply, C-Flute, Brown Kraft with 2-color print"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Project Message / Additional Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Describe your goods, weight per box, or special coating requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 focus:border-amber-500 rounded-lg px-3.5 py-2 text-sm text-slate-900 focus:outline-none resize-none"
                  />
                </div>

                <label className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                  <input type="checkbox" required className="mt-0.5 accent-amber-600" />
                  <span>
                    I agree that my enquiry details will be prepared in my selected email or WhatsApp app. Read our{' '}
                    <a href="/privacy-policy" className="font-semibold text-amber-800 underline">Privacy Policy</a>.
                  </span>
                </label>

                {submissionError && <p role="alert" className="text-sm font-medium text-red-700">{submissionError}</p>}

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="submit"
                    name="handoff"
                    value="whatsapp"
                    onClick={(event) => {
                      event.currentTarget.form?.setAttribute('data-handoff', event.currentTarget.value);
                    }}
                    className="w-full btn-primary text-sm font-bold py-3.5 flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Continue with WhatsApp</span>
                  </button>
                  <button
                    type="submit"
                    name="handoff"
                    value="email"
                    onClick={(event) => {
                      event.currentTarget.form?.setAttribute('data-handoff', event.currentTarget.value);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-lg text-sm shadow-sm transition-colors min-h-[48px]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Continue with email</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>NDAs Respected</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Free Physical Samples</span>
                  </span>
                </div>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <img
                  src="/logo.png"
                  alt="Print Gallery Logo"
                  loading="lazy"
                  className="w-12 h-12 rounded-lg border border-slate-200 p-0.5 bg-slate-50 object-cover"
                />
                <div>
                  <h3 className="text-lg font-black text-slate-900">PRINT GALLERY</h3>
                  <p className="text-xs text-slate-500">Printing & Packaging Services</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-500">Address</h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium mt-0.5 leading-relaxed">
                      E-block buliding number-67,
                      {/* <br /> */}
                      Sector 63 Noida, Uttar Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-500">Phone</h4>
                    <div className="mt-0.5 space-y-0.5">
                      <a href="tel:+919810466405" className="text-xs sm:text-sm text-slate-800 hover:text-amber-600 font-bold block">
                        +91 9810466405, +91 7011727274
                      </a>
                      {/* <a href="tel:+917011727274" className="text-xs sm:text-sm text-slate-800 hover:text-amber-600 font-bold block">
                        +91 7011727274
                      </a> */}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-500">Website</h4>
                    <a href="https://www.printgallerys.com" className="text-xs sm:text-sm text-slate-800 font-medium hover:text-amber-700">www.print-gallery.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <h4 className="text-xs font-bold uppercase text-slate-700">Business Hours</h4>
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  Mon - Sat
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-slate-900">9:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold text-slate-900">9:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-60 bg-white">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.188282750929!2d77.38374577550275!3d28.624118584462703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef594fb04257%3A0xb964b405fd07d087!2sPrint%20Gallery!5e0!3m2!1sen!2sin!4v1790852020270!5m2!1sen!2sin"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.189667176008!2d77.38403087550276!3d28.624077084464503!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef594fb04257%3A0xb964b405fd07d087!2sPrint%20Gallery!5e0!3m2!1sen!2sin!4v1762100769118!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Print Gallery Location - Sector 63 Noida"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

        <div className="mt-16 bg-slate-900 text-white rounded-xl p-8 text-center shadow-sm">
          <p className="text-xl sm:text-2xl font-bold">
            The Best Choice For Your <span className="text-amber-500">Successful Business</span>
          </p>
        </div>

      </div>
    </section>
  );
}
