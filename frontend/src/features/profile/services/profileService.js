const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_PROFILE = {
  name: "Alex Rivera",
  email: "alex@eventra.io",
  role: "Events Manager",
  bio: "Runs community and product events across North America.",
  avatarUrl: "",
};

export const profileService = {
  async get() {
    await delay(300);
    return MOCK_PROFILE;
  },
  async update(payload) {
    await delay(400);
    return { ...MOCK_PROFILE, ...payload };
  },
};