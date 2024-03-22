import Image from "next/image";

export const metadata = {
  title: "Vision and Mission - Markham College of Commerce, Hazaribagh",
  description:
    "Discover the legacy of education and excellence at Markham College of Commerce, Hazaribagh. Our vision is to empower future leaders through comprehensive commerce education, fostering ethical values and critical thinking. Explore our rich history, from our founding in 1974 by B. D. Jaiswal to becoming a hub of academic growth. Join us in shaping a brighter future for students in Hazaribagh and beyond.",
};

const VisionMission = () => {
  return (
    <article className="max-w-screen-lg mx-auto my-12 p-4">
      <h1 className="text-3xl font-bold my-8 text-primary-regular">
        Vision and Mission -Sri Ramakrishna Matriculation Higher Secondary School
      </h1>
      <div className="bg-secondary border-t-primary-regular border-t-4 shadow-md rounded-md">
        <Image
          className="mx-auto block max-w-full"
          src="/Gallery-1.jpg"
          width={1000}
          height={500}
          alt="Markham College of Commerce"
        />

        <div className="container mx-auto p-8">
          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">Vision and Mission</h2>
            <p className="text-gray-700">
              At Sri Ramakrishna Matriculation Higher Secondary School, our vision is to cultivate a
              vibrant educational environment that empowers students to excel
              both academically and ethically. Through our unwavering commitment
              to quality education, we strive to nurture future leaders who
              contribute to the growth and prosperity of society.
            </p>
            <p className="text-gray-700">
              Our mission is to provide comprehensive and innovative commerce
              education that equips students with the knowledge, skills, and
              values needed to succeed in a dynamic global landscape. We
              prioritize holistic development, fostering critical thinking,
              ethical decision-making, and a sense of responsibility towards the
              community.
            </p>
          </div>

          

          <div className="mb-8 text-lg">
            <h2 className="text-xl font-semibold mb-2">
              Achievements and Growth
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
              The School has blossomed into an
                institution of excellence, with over eight thousand students
                benefiting from its programs annually.
              </li>
              <li>
                With an average success rate of 80%, the college has
                consistently produced accomplished professionals in fields such
                as finance, accounting, medicine, engineering, civil service,
                and more.
              </li>
              <li>
                The commitment of the faculty and the unyielding support of
                students and their guardians have been integral to the
                college&apos;s continuous growth.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VisionMission;
