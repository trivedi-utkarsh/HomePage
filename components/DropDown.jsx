import Link from "next/link";
const DropDown = (params) => {
  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center"
        aria-controls="dropdown-pages"
      >
        <span className="text-left whitespace-nowrap pb-1">{params.name}</span>
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <ul
        id="dropdown-pages"
        className="hidden absolute right-0 py-2 space-y-2 bg-white text-gray-900 rounded-lg shadow-lg"
      >
        <li>
          <Link href="#">
            <div className="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 hover:bg-gray-100">
              Settings
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 hover:bg-gray-100">
              Kanban
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 hover:bg-gray-100">
              Calendar
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
