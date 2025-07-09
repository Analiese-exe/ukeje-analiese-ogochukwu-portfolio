export const Education = () => {
  const education = [
    {
      period: "2015 – 2021",
      degree: "WASSCE",
      school: "Nigerian Turkish International College",
      location: "Ogun, Nigeria",
      description: "Completed secondary education with a strong foundation in sciences and humanities."
    },
    {
      period: "2021 – 2025",
      degree: "B.Sc. Information Technology",
      school: "Babcock University",
      location: "Ilishan Remo, Nigeria",
      description: "Relevant coursework in Web design aesthetics and IT project management."
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
            Education
          </h2>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-white/30"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative flex flex-col items-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot with graduation icon */}
                  <div className="flex-shrink-0 relative mb-6">
                    <div className="timeline-dot w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border-2 border-white/30">
                      <div className="text-white text-lg">🎓</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-white/60 text-sm font-medium">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg text-white/80 mb-1">
                      {item.school}
                    </h4>
                    <p className="text-white/60 text-sm mb-3">{item.location}</p>
                    <p className="text-white/70 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};