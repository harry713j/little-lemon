import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import environment_variables from "../environment_import/environmentVariables";
import { restaurantPositions } from "../utility/optionsData";

function RestaurantDetails() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <article className="flex items-center justify-between">
        <div className="flex flex-col justify-center space-y-2.5">
          <span className="flex items-center space-x-2">
            <FaLocationDot className="inline-block text-green xl:text-xl text-lg" />
            <p
              className="font-karla font-medium cursor-pointer text-green hover:underline
           xl:text-base sm:text-[15px] text-sm"
            >
              <a
                className="inline-block"
                href="https://maps.app.goo.gl/VFuaatxcsUMn8nut5"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              439 N Wells St.Chicago, IL 60654
            </p>
          </span>
          <span className="flex items-center space-x-3">
            <MdEmail className="inline-block text-green xl:text-xl text-lg" />
            <p
              className="font-karla font-medium text-green hover:underline
             xl:text-base sm:text-[15px] text-sm"
            >
              <a className="inline-block" href="mailTo:littlelemon@email.com">
                littlelemon@email.com
              </a>
            </p>
          </span>
          <span className="flex items-center space-x-3">
            <BsTelephoneFill className="inline-block text-green xl:text-xl text-lg" />
            <p
              className="font-karla font-medium text-green hover:underline
             xl:text-base sm:text-[15px] text-sm"
            >
              <a className="inline-block" href="tel:+1 (312) 555-1234">
                +1 (312) 555-1234
              </a>
            </p>
          </span>
        </div>
        <div className="flex flex-col justify-center space-y-2.5">
          <p className="font-karla font-medium text-green xl:text-base sm:text-[15px] text-sm">
            Monday to Saturday
          </p>
          <p className="font-karla font-medium text-green xl:text-base sm:text-[15px] text-sm">
            9.00 AM - 10.00 PM
          </p>
          <p className="font-karla font-medium text-green xl:text-base sm:text-[15px] text-sm">
            Sunday - Closed
          </p>
        </div>
      </article>
      <article className="xl:h-[280px] sm:h-[240px] h-[200px] w-full mt-8 outline outline-1 outline-green">
        <APIProvider apiKey={environment_variables.googleMapAPIKey}>
          <Map zoom={16} center={restaurantPositions}>
            <Marker
              position={restaurantPositions}
              onClick={() => setOpen(true)}
            />
            {open && (
              <InfoWindow
                position={restaurantPositions}
                onCloseClick={() => setOpen(false)}
              >
                <p className="capitalize text-green">little lemon restaurant</p>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </article>
    </section>
  );
}

export default RestaurantDetails;
