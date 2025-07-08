import { Phone, Mail, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
                About Me
              </h2>
              <div className="w-16 h-1 bg-white rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                I am a Professional UI/UX Designer. I specialize in creating intuitive user 
                interfaces and seamless experiences for web and mobile applications.
              </p>
              
              <p>
                My passion lies in understanding user needs and translating them into 
                <span className="text-white font-medium"> beautiful, accessible, and functional designs</span> 
                {" "}that make a real difference in people's lives.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span>0703-010-8384</span>
              </div>
              
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span>ao.ukeje@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span>www.ukejeanaliese.com</span>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              {/* Portrait container */}
              <div className="relative w-80 h-80 rounded-full border border-white/20 p-2 float">
                <div className="w-full h-full rounded-full bg-transparent border border-white/10 flex items-center justify-center text-8xl font-semibold text-white">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};