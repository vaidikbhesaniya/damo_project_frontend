import {
  faBookOpen,
  faBusinessTime,
  faCube,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CoursesWeOffer = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faFlask}
          />{" "}
          1st to 5th Standard
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Mediums</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Both Tamil & English
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  1 Year for Each
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Per Goverment Norms
                </td>
              </tr>

              
            </tbody>
          </table>
        </div>
      </div>

      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faBusinessTime}
          />{" "}
          6th to 10th
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Mediums</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                Both Tamil & English
                </td>
                <td className="border border-gray-300 px-4 py-2">
                Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                1 Year for Each <br />
                  
                </td>
                <td className="border border-gray-300 px-4 py-2">Per Goverment Norms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Art Stream ===== */}
      <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faBookOpen}
          />{" "}
          11th & 12th
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Mediums</th>
                <th className="border border-gray-300 px-4 py-2">Department</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Both Tamil & English
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  All Departments
                </td>
                <td className="border border-gray-300 px-4 py-2">
                1 Year for Each <br />
                  
                </td>
                <td className="border border-gray-300 px-4 py-2">Per Goverment Norms</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Vocational Courses ===== */}
      {/* <div className="border max-w-full overflow-x-auto no-scrollbar my-12">
        <h5 className="font-semibold text-2xl border-b border-primary-regular px-4 py-2">
          <FontAwesomeIcon
            className="text-2xl mx-2 text-primary-regular"
            icon={faCube}
          />{" "}
          Vocational
        </h5>

        <div className="w-full">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-primary-regular text-white">
                <th className="border border-gray-300 px-4 py-2">Streams</th>
                <th className="border border-gray-300 px-4 py-2">Mode</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Edibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Computer Application (BCA)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Business Administration (BBA)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Medical Laboratory Technology (BMLT)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">
                  Bachelor of Journalism and Mass Communication (BJMC)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Full Time & Regular
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  3 Years (6 Semesters) <br />
                </td>
                <td className="border border-gray-300 px-4 py-2">10+2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default CoursesWeOffer;
