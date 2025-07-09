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
          <div className="w-16 h-1 bg-white rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="timeline-dot w-8 h-8 rounded-full flex items-center justify-center">
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
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
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};