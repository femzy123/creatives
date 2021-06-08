import { Divider } from "@material-ui/core";
import React, {useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { useRouter } from "next/router";


const Navigation = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [hidden, setHidden] = useState("hidden");

  const dropdown = () =>
    hidden === "hidden" ? setHidden("") : setHidden("hidden");

  const signOut = () => {
    auth.signOut();
    router.push("/login");
  };

  const displayName = (name) => {
    const firstName = name.split(" ");

    return firstName[0];
  };

  return (
    <>
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <a href="#">
            <svg
              width="32"
              height="36"
              viewBox="0 0 32 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path>
            </svg>
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Business
                </a>
              </li>
              {user ? (
                <li
                  className="relative px-3 py-1 lg:shadow-md rounded text-sm font-medium capitalize cursor-pointer"
                  onClick={dropdown}
                >
                  <span className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full mr-2"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    {displayName(user.displayName)}
                  </span>
                  <div
                    className={`absolute left-0 mt-1 py-1 w-32 bg-white rounded-sm shadow-xl text-xs z-20 ${hidden}`}
                    id="dropdown"
                  >
                    <span
                      className="lg:p-4 py-2 px-0 block border-b-2 border-transparent cursor-pointer hover:bg-blue-50"
                      onClick={signOut}
                    >
                      Dashboard
                    </span>
                    <Divider />
                    <span
                      className="lg:p-4 py-2 px-0 block border-b-2 border-transparent cursor-pointer hover:bg-blue-50"
                      onClick={signOut}
                    >
                      Sign Out
                    </span>
                  </div>
                </li>
              ) : (
                <>
                  <li>
                    <a
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                      href="/login"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                      href="/register"
                    >
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
