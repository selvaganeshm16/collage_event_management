// Replace with real API calls (fetch/axios) once your backend is ready.

const MOCK_EVENTS = [
  { id: "ev1", title: "Product Launch Meetup", date: "2026-08-04T18:00:00", location: "San Francisco, CA", attendees: 128, status: "upcoming" },
  { id: "ev2", title: "Quarterly Town Hall", date: "2026-08-12T15:30:00", location: "Remote", attendees: 342, status: "upcoming" },
  { id: "ev3", title: "Design Systems Workshop", date: "2026-07-18T10:00:00", location: "Austin, TX", attendees: 56, status: "past" },
  { id: "ev4", title: "Customer Advisory Board", date: "2026-08-20T13:00:00", location: "New York, NY", attendees: 24, status: "upcoming" },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const eventService = {
  async list() {
    await delay(400);
    return MOCK_EVENTS;
  },

  async create(payload) {
    await delay(400);
    return { id: `ev${Date.now()}`, status: "upcoming", attendees: 0, ...payload };
  },

  async remove(id) {
    await delay(300);
    return { id };
  },
};