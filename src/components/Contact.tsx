import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-3 mb-8">
                            {/* <Package className="w-12 h-12 text-amber-500" strokeWidth={2} /> */}
                            <img src="/logo.png" alt="" className="w-16 h-16 rounded-full border-3 border-amber-500 p-1 bg-gradient-to-br from-amber-500/20 to-transparent backdrop-blur-sm" />
                            <div className="text-3xl font-bold text-slate-900">PRINT GALLERY</div>
                        </div>

                        <h2 className="text-5xl font-bold text-slate-900">
                            Get In <span className="text-amber-500">Touch</span>
                        </h2>

                        <p className="text-xl text-gray-600">
                            Ready to elevate your business with premium printing and packaging solutions?
                            Contact us today to discuss your project.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-500 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                                    <p className="text-gray-600"> E-block buliding number-67,<br />Sector 63 Noida, Uttar Pradesh</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-500 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                                    <p className="text-gray-600"> +91 9810466405 , +91 7011727274</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-500 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                                    <p className="text-gray-600">printgallery17@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-500 p-3 rounded-lg">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Website</h4>
                                    <p className="text-gray-600">www.print-gallery.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <MapPin className="w-6 h-6 text-amber-500 mr-2" />
                                Find Us Here
                            </h3>

                            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.189667176008!2d77.38403087550276!3d28.624077084464503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef594fb04257%3A0xb964b405fd07d087!2sPrint%20Gallery!5e0!3m2!1sen!2sin!4v1762100769118!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Print Gallery Location - Sector 63, Noida"
                                    className="w-full h-80"
                                ></iframe>
                            </div>

                            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <p className="text-sm text-amber-800">
                                    <strong>Directions:</strong> Located in Eblock building no. 67, Sector 63, Noida.
                                    Easily accessible by metro and road transport.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-amber-100">
                                <div className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-20">
                <div className="bg-slate-900 text-white rounded-2xl p-10 text-center">
                    <p className="text-2xl font-medium">
                        The Best Choice For Your <span className="text-amber-500">Successful Business</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
