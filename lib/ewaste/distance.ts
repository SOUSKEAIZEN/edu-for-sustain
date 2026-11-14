import { GeoCoordinates } from "@/types/ewaste";

/**
 * Calculates straight-line geographical distance between two coordinates using the Haversine formula.
 * @param coord1 First coordinate { lat, lng }
 * @param coord2 Second coordinate { lat, lng }
 * @returns Distance in kilometers
 */
export function calculateHaversineDistance(
  coord1: GeoCoordinates,
  coord2: GeoCoordinates
): number {
  if (
    typeof coord1.lat !== "number" ||
    typeof coord1.lng !== "number" ||
    typeof coord2.lat !== "number" ||
    typeof coord2.lng !== "number"
  ) {
    return Infinity;
  }

  const R = 6371; // Earth's mean radius in kilometers
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(coord2.lat - coord1.lat);
  const dLng = toRad(coord2.lng - coord1.lng);

  const lat1 = toRad(coord1.lat);
  const lat2 = toRad(coord2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
}

/**
 * Formats distance into a human-readable string.
 * @param km Distance in kilometers
 */
export function formatDistance(km: number): string {
  if (km === Infinity || isNaN(km)) return "Distance unknown";
  if (km < 1) {
    const meters = Math.round(km * 1000);
    return `${meters} m`;
  }
  return `${km.toFixed(1)} km`;
}

/**
 * Checks whether coordinates are located within a given radius.
 */
export function isWithinRadius(
  target: GeoCoordinates,
  origin: GeoCoordinates,
  radiusKm: number
): boolean {
  const dist = calculateHaversineDistance(origin, target);
  return dist <= radiusKm;
}

/**
 * Generates an external Google Maps directions link for navigation.
 */
export function getDirectionsUrl(dest: GeoCoordinates, label?: string): string {
  const query = encodeURIComponent(label ? `${label} (${dest.lat},${dest.lng})` : `${dest.lat},${dest.lng}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${dest.lat},${dest.lng}&destination_place_id=${query}`;
}
