const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_STATS = [
  { id: "attendees", label: "Total attendees", value: 4218, delta: "+12.4%", trend: "up" },
  { id: "events", label: "Active events", value: 18, delta: "+3", trend: "up" },
  { id: "checkins", label: "Check-ins today", value: 342, delta: "-2.1%", trend: "down" },
  { id: "revenue", label: "Revenue (MTD)", value: "$28.4k", delta: "+8.9%", trend: "up" },
];

const MOCK_ACTIVITY = [
  { id: "a1", text: "Maya Chen registered for Product Launch Meetup", time: "5 min ago" },
  { id: "a2", text: "Quarterly Town Hall reached 300 RSVPs", time: "1 hr ago" },
  { id: "a3", text: "New event 'Customer Advisory Board' was created", time: "3 hr ago" },
  { id: "a4", text: "Design Systems Workshop feedback form closed", time: "Yesterday" },
];

export const dashboardService = {
  async getStats() {
    await delay(350);
    return MOCK_STATS;
  },
  async getActivity() {
    await delay(350);
    return MOCK_ACTIVITY;
  },
};