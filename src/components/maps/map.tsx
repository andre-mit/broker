"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // init a marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.Marker;

      const position = { lat: -23.50242602557072, lng: -46.62496334290733 };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current, mapOptions);

      // put up a marker
      const marker = new Marker({
        map: map,
        position: position,
      });

      // marker event click
      marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition()!);
        console.log("marker clicked");
      });
    };

    initMap();
  }, []);
  return <div className="h-[600px] w-full" ref={mapRef} />;
}
