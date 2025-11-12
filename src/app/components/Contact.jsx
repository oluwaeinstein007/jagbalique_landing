import React from 'react';

// Receives form state, handlers, and icons from Home
export default function ContactEnquiriesSection({ formData, setFormData, handleSubmit, MapPinIcon, ClockIcon }) {
  // ... JSX for the Contact section component (lines 419-536)
  return (
    <section id="contact-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Contact / Enquiries</h2>
          <p className="text-center text-gray-600 mb-16">Get in touch with us for inquiries, partnerships, or support requests.</p>

          <div className="grid lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold transition"
              >
                Send Message
              </button>
            </form>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Office Address:</h4>
                      <p className="text-gray-600 text-sm">
                        12 Obasa Odelusi Street, Victoria Island, Lagos<br />
                        Lagos State, Federal Republic Of Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Open Hours:</h4>
                      <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}