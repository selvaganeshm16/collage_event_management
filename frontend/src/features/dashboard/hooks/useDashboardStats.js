import { useEffect, useState } from "react";
import { dashboardService } from "../services/dashboardService";

export const useDashboardStats = () => {
  const [stats, setStats] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      const [statsData, activityData] = await Promise.all([
        dashboardService.getStats(),
        dashboardService.getActivity(),
      ]);
      if (!cancelled) {
        setStats(statsData);
        setActivity(activityData);
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { stats, activity, loading };
};