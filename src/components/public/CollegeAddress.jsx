import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const CollegeAddress = () => {
  return (
    <div className="flex gap-4 my-8 max-w-2xl flex-col sm:flex-row">
      <div>
        <Image
          className="border-2 border-primary-regular rounded-sm shadow-md mx-auto"
          src={"/Logo.jpg"}
          width={150}
          height={150}
          alt="Markham college of commerce"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-primary-regular">
        Sri Ramakrishna Matriculation Higher Secondary School
        </h4>
        <div className="flex gap-4 py-4 items-center">
          <FontAwesomeIcon className="text-4xl ml-4" icon={faLocationDot} />
          <address>
          2G2Q+5R7, Kumbakonam-Karaikal Rd <br />
          Sivanaragaram (T), Tamil Nadu 612201<br />
           India
          </address>
        </div>
      </div>
    </div>
  );
};

export default CollegeAddress;
