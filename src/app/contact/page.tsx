"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the data to your backend
      // For now, we&rsquo;ll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-base">
      {/* Hero Section */}
      <div className="py-28 text-center">
        <p className="text-muted text-[12px] tracking-[0.12em] uppercase mb-4">Contact</p>
        <h1 className="font-display text-5xl text-primary mb-4">Get in Touch</h1>
        <p className="text-secondary max-w-lg mx-auto">
          Let&rsquo;s discuss your photography needs. Fill out the form below and I&rsquo;ll get back to you soon.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-surface border border-subtle p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-base border border-subtle text-primary px-4 py-3 min-h-[44px] focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-base border border-subtle text-primary px-4 py-3 min-h-[44px] focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-secondary mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-base border border-subtle text-primary px-4 py-3 min-h-[44px] focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="Wedding Photography">Wedding Photography</option>
                <option value="Portrait Session">Portrait Session</option>
                <option value="Commercial Photography">Commercial Photography</option>
                <option value="Event Coverage">Event Coverage</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-base border border-subtle text-primary px-4 py-3 min-h-[44px] focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-success text-success-text">
                Thank you for your message! I&rsquo;ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-error text-error-text">
                There was an error sending your message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-contrast py-3 px-6 text-[12px] tracking-[0.12em] uppercase hover:bg-accent-hover transition-colors disabled:opacity-40 cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
