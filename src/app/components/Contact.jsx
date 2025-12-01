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
          <form 
            action="https://formsubmit.co/accounts@jagbalique.com" 
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              >
                <option>General Inquiry</option>
                <option>Partnership</option>
                <option>Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
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
              <div className="bg-gray-200 h-60 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.685310658972!2d3.4242582709788905!3d6.434451948379842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5d3f09720cf%3A0x1e34829b53a04621!2sKeystone%20Bank!5e0!3m2!1sen!2sng!4v1764116746907!5m2!1sen!2sng" loading="lazy" className="w-16 h-16 text-gray-400 b-0 h-60 w-600 "  ></iframe>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <MapPinIcon className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Office Address:</h4>
                      <p className="text-gray-600 text-sm">
                      5th floor, Kingscourt building, keystone bank crescent, beside keystone bank HQ, Victoria Island<br />
                        Lagos State, Federal Republic Of Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Open Hours:</h4>
                      <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}