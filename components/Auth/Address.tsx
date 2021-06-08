import React, { useState, useEffect } from "react";
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

function Address({ setGeolocation, setAddress }) {
  const [location, setLocation] = useState({
    lat: () => 6.524379,
    lng: () => 3.379206,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: () => position.coords.latitude,
        lng: () => position.coords.longitude,
      });
    });
  }, []);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 6.524379, lng: () => 3.379206 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          setAddress(address);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            setGeolocation({ lat, lng });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          className="w-full border border-gray-300 py-2 px-3 rounded"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready.toString()}
          placeholder="Enter your address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Address;
