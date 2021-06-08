import React, { useState } from "react";
import { storage } from "../../firebase";

function ProfilePix({ pix, setPix }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      
        const storageRef = storage.ref();
        const profileRef = storageRef.child('profile/' + selected.name);

        profileRef.put(selected).on(
          "state_changed",
          (snap) => {
            console.log("done")
          },
          (err) => {
            setError(err);
          },
          async () => {
            const url = await profileRef.getDownloadURL();
            setPix(url);
            setFile('');
          }
        );

    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <div className="m-4">
      <label className="block text-sm font-medium text-gray-700">
        Profile Picture
      </label>
      <div className="mt-1 flex items-center">
        <span class="inline-block h-24 w-24 rounded-full overflow-hidden bg-gray-100">
          {pix ? (<img src={pix} alt="profile pix" />) : (<svg
            className="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>)}
        </span>
        <div className="ml-2 lg:text-sm text-xs">
          {error && <div className="text-red-600">{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
        <label>
          <input
            type="file"
            className="opacity-0 w-0 h-0"
            onChange={changeHandler}
          />
          <span
            type="button"
            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            Upload
          </span>
        </label>
      </div>
    </div>
  );
}

export default ProfilePix;
