const teamMembers = [
  {
    name: "Charlotte",
    role: "Chef",
    image: "/images/team/charlotte-profile.jpg",
    description: "Creating nourishing, gourmet meals",
  },
  {
    name: "Rabi",
    role: "Counsellor",
    image: "/images/team/rabi-profile.jpg",
    description: "Leading transformational sessions",
  },
  {
    name: "Steven",
    role: "Boxing Coach",
    image: "/images/team/Steven-profile.jpg",
    description: "Partner fitness and connection training",
  },
  {
    name: "Nicole",
    role: "Counsellor",
    image: "/images/team/Nicole-profile.jpg",
    description: "Deep emotional healing sessions",
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-3">
            Expert Guidance
          </p>
          <h2 className="heading-lg">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-5 mx-auto w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-warm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
