import { Phone, Mail, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Professional UI/UX Designer. I specialize in creating intuitive user 
                interfaces and seamless experiences for web and mobile applications.
              </p>
              
              <p>
                My passion lies in understanding user needs and translating them into 
                <span className="text-primary font-medium"> beautiful, accessible, and functional designs</span> 
                {" "}that make a real difference in people's lives.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>0703-010-8384</span>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>ao.ukeje@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <span>www.ukejeanaliese.com</span>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"></div>
              
              {/* Portrait container */}
              <div className="relative w-80 h-80 rounded-full glass p-2 float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-muted/20 to-card/40 flex items-center justify-center text-8xl font-bold gradient-text">
                  A
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full blur-md animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};