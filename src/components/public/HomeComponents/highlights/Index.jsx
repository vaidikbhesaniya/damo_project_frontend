import {
  faBriefcase,
  faChalkboardTeacher,
  faCogs,
  faGraduationCap,
  faUniversity,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Heading2 from "@components/Heading2";
import Highlight from "./Highlight";

const Highlights = () => {
  return (
    <section className="my-4 px-3 py-4 bg-blue-950 text-white">
      <div className="max-w-screen-xl mx-auto my-4">
        <Heading2 headingText={"Why Sri Ramakrishna Matriculation Higher Secondary School"} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Highlight
            icon={faGraduationCap}
            heading={"State Board"}
            text={
              "The State Board in Tamil Nadu, known as the Tamil Nadu State Board of Education (TNBSE), governs the educational system in the state. It is responsible for setting the curriculum, conducting examinations, and issuing certifications for schools affiliated with it."
            }
          />
          <Highlight
            icon={faUsers}
            heading={"Holistic Development"}
            text={
              "Engage in a well-rounded education that focuses not only on academics but also on personal growth, character development, and extracurricular activities."
            }
          />
          <Highlight
            icon={faCogs}
            heading={"Industry-Relevant Curriculum"}
            text={
              "Gain practical knowledge through a curriculum designed in collaboration with industry leaders, ensuring you're well-prepared for real-world challenges."
            }
          />
          <Highlight
            icon={faChalkboardTeacher}
            heading={"Exceptional Faculty"}
            text={
              "Learn from experienced professors who are experts in their fields, providing unparalleled guidance and mentorship."
            }
          />
          <Highlight
            icon={faBriefcase}
            heading={"Sports"}
            text={
              "Our school is actively engaged in promoting sports activities among students. With a strong emphasis on physical fitness and overall well-being, various sports events are organized throughout the academic year."
            }
          />
          <Highlight
            icon={faUniversity}
            heading={"Career Guidance"}
            text={
              "schools may organize visits to colleges, universities, and vocational training institutes to give students a firsthand look at different educational opportunities."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
