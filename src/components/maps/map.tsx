"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const saoPauloBounds: google.maps.LatLngBoundsLiteral ={
  north: -23.356792,
  south: -24.008814,
  west: -46.825283,
  east: -46.365583,
}

export default function Map({
  inputSearchRef,
}: {
  inputSearchRef: React.RefObject<HTMLInputElement>;
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");

      // init a marker
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.Marker;

      const position = { lat: -23.50242602557072, lng: -46.62496334290733 };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
        restriction: {
          latLngBounds: saoPauloBounds
        },
        streetViewControl: false,
        mapTypeControl: false,
        keyboardShortcuts: false,
      };

      const map = new Map(mapRef.current, { ...mapOptions });

      const searchInput = inputSearchRef.current;
      const autocomplete = new google.maps.places.Autocomplete(searchInput, {
        componentRestrictions: { country: "br" },
        bounds: saoPauloBounds
      });

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

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place) {
          map.setCenter(place.geometry?.location);
        }
      });

      map.addListener("idle", () => {
        const bounds = map.getBounds();
        const northEast = bounds.getNorthEast();
        const southWest = bounds.getSouthWest();

        const request = {
          northEast: {
            lat: northEast.lat(),
            lng: northEast.lng(),
          },
          southWest: {
            lat: southWest.lat(),
            lng: southWest.lng(),
          },
        };
      });
    };

    initMap();
  }, []);
  return <div className="w-full h-full" ref={mapRef} />;
}
