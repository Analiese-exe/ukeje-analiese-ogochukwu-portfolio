import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Linkedin, Github, Mail, Phone } from "lucide-react";
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's create something{" "}
            <span className="gradient-text">meaningful together</span> 🌌
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            Ready to bring your ideas to life? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-muted focus:border-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-muted focus:border-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass border-muted focus:border-primary"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="glass border-muted focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

            <Button 
              type="submit" 
              variant="minimal" 
              size="lg" 
              className="w-full hoverable"
            >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">07030108384</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">ao.ukeje@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-green-400">Status</p>
                    <p className="text-muted-foreground">Open to Work ✅</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-primary/50 transition-all hoverable group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-primary/50 transition-all hoverable group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:ao.ukeje@gmail.com" 
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-primary/50 transition-all hoverable group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};