import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading3 from "@components/Heading3";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
  const address = `2G2Q+5R7, Kumbakonam-Karaikal Rd, Sivanaragaram, Tamil Nadu 612201`;
  const emails = ["principle-mcc@example.com", "help@example.com"];
  const phoneNumbers = ["+09488049521"];

  
  return (
    <>
      <Heading3 headingText={"Get in touch"} />

      <div className="p-4 text-gray-300 grid gap-6 mx-auto">
        {/* ==== Address === */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faLocationDot}
          />
          <p>{address}</p>
        </div>

        {/* ======= Email =====  */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faEnvelope}
          />
          <p>
            {emails.map((email) => (
              <a
                key={email}
                className="block hover:text-primary-regular hover:underline duration-500"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            ))}
          </p>
        </div>

        {/* ======== Mobile Numbers======  */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon className="text-4xl text-primary-regular" icon={faPhone} />
          <p>
            {phoneNumbers.map((phoneNumber) => (
              <a
                key={phoneNumber}
                className="block hover:text-primary-regular hover:underline duration-500"
                href={`tel:${phoneNumber}`}
              >
                {phoneNumber}
              </a>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
