import Heading2 from "@/components/Heading2";
import CollegeAddress from "@/components/public/CollegeAddress";
import CoursesWeOffer from "@/components/public/CoursesWeOffer";
import GetInTouch from "@/components/public/footer/GetInTouch";

export const metadata = {
  title: "About Us - Sri Ramakrishna Matriculation Higher Secondary School",
  description:
    "Sri Ramakrishna Matriculation Higher Secondary School,  was established on 2003. It is one of the premier institutions established to impart & provide in the field of higher education for the deserving candidates and prove to be a milestone in the part of progress.",
};

const AboutUs = () => {
  const FACILITY_KEYWORDS = [
    "Library",
    "Sports",
    "Laboratories",
    "Internet",
    "Bank / ATMClassroom",
    "Placement",
    "Scholarship",
    "Workshop",
    "Wi-Fi",
    "Playground",
    "Reading Rooms",
    "Multipurpose Hall",
    "Conference Hall",
    "N.C.C.",
    "N.S.S.",
    "Medical Facility",
    "Counseling Centre",
    "Common Rooms",
    "Computer Lab",
    "Cafeteria/Canteen",
    "Anti Ragging",
    "Women Cell",
  ];

  const COLLEGE_INFO = [
    {
      title: "Type Of School",
      value: "StateBoard",
    },
    {
      title: "Accreditation & Recognition",
      value: "Government",
    },
    {
      title: "Established",
      value: "2003",
    },
    {
      title: "Affiliation",
      value: "Tamil Nadu School Education Department",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <h1 className="text-3xl font-semibold my-8">
      Sri Ramakrishna Matriculation Higher Secondary School
      </h1>
      <CollegeAddress />

      <div className="grid gap-4 sm:grid-cols-2 my-4">
        {COLLEGE_INFO.map((info, index) => (
          <div className="p-2" key={index}>
            <h4 className="text-xl font-bold text-primary-regular">
              {info.title}
            </h4>
            <p>{info.value}</p>
          </div>
        ))}
      </div>

      <article className="sm:mx-4 grid gap-6 text-lg border-t-8 border-1 bg-secondary shadow-md p-4 border-primary-regular rounded-md">
        <Heading2 headingText={"About Us"} />

        <p>
          <span className="text-primary-regular">
          Sri Ramakrishna Matriculation Higher Secondary School,
          </span>{" "}
          was established
          <span className="text-primary-regular"> on 2003.</span>
        </p>
        <p>
          It is one of the premier institutions established to impart & provide
          in the field of School education for the deserving candidates and
          prove to be a milestone in the part of progress.
        </p>
        <p>
          The School is presently affiliated with Tamil Nadu School Education Department.
        </p>
       
        <p>
          Mr. Kamaraj, the renowned Educationalist.
        </p>
        
        <p>
          At the time of the foundation of this School Mr. Kamaraj,
          who as a founder Principal and Prof-in-charge of the School took a
          noble initiative with a short but dedicated team.
        </p>
       
       

        <div className="max-w-full">
          <Heading2 headingText={"Facility"} />
          <div className="flex gap-4 flex-wrap">
            {FACILITY_KEYWORDS.map((keyword, index) => (
              <span
                className="py-2 px-4 bg-gray-300 font-medium rounded-sm"
                key={index}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* ====== Courses We Offer ====== */}
        <CoursesWeOffer />

        {/* ====== Get In Touch ====== */}
        <div className="max-w-fit invert filter">
          <GetInTouch />
        </div>
      </article>
    </div>
  );
};

export default AboutUs;
