import { useCallback, useEffect, useState } from "react";
import { profileService } from "../services/profileService";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await profileService.get();
      setProfile(data);
      setLoading(false);
    })();
  }, []);

  const saveProfile = useCallback(async (payload) => {
    setSaving(true);
    const updated = await profileService.update(payload);
    setProfile(updated);
    setSaving(false);
    return updated;
  }, []);

  return { profile, loading, saving, saveProfile };
};