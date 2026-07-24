import { useCallback, useEffect, useState } from "react";
import { eventService } from "../services/eventService";

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await eventService.list();
      setEvents(data);
    } catch (err) {
      setError(err.message || "Couldn't load events.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const addEvent = useCallback(async (payload) => {
    const created = await eventService.create(payload);
    setEvents((prev) => [created, ...prev]);
    return created;
  }, []);

  const removeEvent = useCallback(async (id) => {
    await eventService.remove(id);
    setEvents((prev) => prev.filter((event) => event.id !== id));
  }, []);

  return { events, loading, error, addEvent, removeEvent, refetch: fetchEvents };
};