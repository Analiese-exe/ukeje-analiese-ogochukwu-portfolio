import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-white rounded-full mx-auto mb-4"></div>
          <p className="text-white/70 text-lg">
            Let's build something impactful together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="card-modern p-8 rounded-xl mb-16 fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-white/40"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-white/40"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-white/40"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:border-white/40 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <Button 
              type="submit" 
              className="btn-elevated w-full py-3 rounded-lg font-medium"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit
            </Button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="text-center space-y-4 fade-in">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Ukeje Analiese</h3>
            <p className="text-white/70 mb-4">UI/UX Designer</p>
          </div>
          
          <div className="space-y-2 text-white/80">
            <p>Phone: 07030108384</p>
            <p>Email: ao.ukeje@gmail.com</p>
            <p>Website: www.analiese.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};