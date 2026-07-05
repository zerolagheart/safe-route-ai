import "./NotificationToast.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const notifications = [
  {
    title: "🚨 Theft Reported",
    subtitle: "420 m ahead",
  },
  {
    title: "🚔 Police Patrol Nearby",
    subtitle: "Safe zone detected",
  },
  {
    title: "⚠ Accident Reported",
    subtitle: "Take alternate route",
  },
];

function NotificationToast() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setNotification(notifications[index]);

      setTimeout(() => setNotification(null), 3500);

      index++;

      if (index >= notifications.length) index = 0;
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          className="notification-toast"
          initial={{ y: -120 }}
          animate={{ y: 20 }}
          exit={{ y: -120 }}
        >
          <strong>{notification.title}</strong>

          <p>{notification.subtitle}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NotificationToast;