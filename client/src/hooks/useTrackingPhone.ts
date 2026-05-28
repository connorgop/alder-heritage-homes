import { useEffect, useState } from "react";
import { getTrackingPhone, type TrackingPhone } from "@/lib/callTracking";

export function useTrackingPhone(): TrackingPhone {
  const [phone, setPhone] = useState<TrackingPhone>(() => getTrackingPhone());

  useEffect(() => {
    setPhone(getTrackingPhone());
  }, []);

  return phone;
}
