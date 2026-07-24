import React from "react";
import { useProfile } from "@/features/profile/hooks/useProfile";
import ProfileForm from "@/features/profile/components/ProfileForm";

const Profile = () => {
  const { profile, loading, saving, saveProfile } = useProfile();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">
          Profile
        </h2>
        <p className="text-sm text-ink-500 dark:text-ink-400">
          Update your personal details and how others see you.
        </p>
      </div>

      {loading ? (
        <div className="h-72 animate-pulse rounded-xl bg-ink-100 dark:bg-ink-800" />
      ) : (
        <ProfileForm profile={profile} saving={saving} onSave={saveProfile} />
      )}
    </div>
  );
};

export default Profile;