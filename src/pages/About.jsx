import { experiences, skills } from "../constants";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-container h-full">
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Maryam
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Frontend Developer based in Iran, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills?.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I&apos;ve worked with all sorts of companies, leveling up my skills
            and teaming up with smart people. Here&apos;s the rundown:
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {experiences.map((experience) => (
            <div key={experience.company_name} className="flex flex-col gap-1">
              <h3 className="text-black text-xl font-poppins font-semibold">
                {experience.title}
              </h3>
              <p className="text-black-500 font-medium text-base">
                {experience.company_name}
              </p>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <div>{experience.date}</div>
              <ul className="list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <div className="cta">
        <p className="cta-text">
          Have a project in mind? <br className="sm:block hidden" />
          Let’s build something together!
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default About;
