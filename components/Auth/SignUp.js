import React, { ReactElement, useState } from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import Address from "./Address";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import ProfilePix from './ProfilePix';
import {db, auth} from '../../firebase'
import { useRouter } from "next/router";


const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function SignUp() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [pix, setPix] = useState("");
  const [geolocation, setGeolocation] = useState(null);
  const [category, setCategory] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState("");
  const [userId, setUserId] = useState('')

  const addProfile = (id) => {
    db.collection("userProfiles").add({
      userId: id,
      name: name,
      email: email,
      phone: phone,
      bio: bio,
      address: address,
      pix: pix,
      geolocation: geolocation,
      category: category,
      profession: profession,
    })
    .then(() => {
      auth.signOut()
      router.push("/login")
    })

  }

  const submit =(e) => {
    e.preventDefault();
    if(password === confirmed) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // setUserId(userCredential.user.uid);
          userCredential.user.updateProfile({
            displayName: name,
          });
          addProfile(userCredential.user.uid);
        })
        // .then(() => addProfile())
    }
  }

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-sm w-full space-y-8 bg-white shadow overflow-y-auto sm:rounded-lg">
        <div className="p-4">
          <form onSubmit={submit}>
            <ProfilePix pix={pix} setPix={setPix} />
            <div className="m-4">
              <TextField
                required
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="m-4">
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="m-4">
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="m-4">
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmed}
                onChange={(e) => setConfirmed(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="m-4">
              <TextField
                label="Phone"
                value={phone}
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="m-4">
              <TextField
                label="Bio"
                multiline
                rows={4}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </div>
            <div className="m-4">
              <TextField
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="outlined"
                size="small"
                select
                fullWidth
              >
                <MenuItem value="Modelling">Modelling</MenuItem>
                <MenuItem value="Photography">Photography</MenuItem>
              </TextField>
            </div>
            <div className="m-4">
              <TextField
                label="Profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </div>
            <div className="m-4">
              <Address
                setGeolocation={setGeolocation}
                setAddress={setAddress}
              />
            </div>
            <div className="flex items-center justify-around mt-5">
              <Button type="reset" variant="contained" color="secondary" onClick={close}>
                Clear
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
