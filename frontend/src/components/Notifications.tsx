import { useNotifications } from "../hooks";

const Notifications = () => {
  const { loading, notifications } = useNotifications();

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <img
          className="w-10 h-10 animate-spin"
          src="https://www.svgrepo.com/show/448500/loading.svg"
          alt="Loading icon"
        ></img>
      </div>
    );
  }

  if (!notifications.length) {
    return <div>No notifications</div>;
  }

  return (
    <div>
      <div className="text-2xl font-semibold">Notification(s)</div>
      <div className="overflow-auto h-56 mt-2">
        {notifications.map(
          (notification: { id: string; notification: string }) => {
            return (
              <div key={notification.id} className="border p-4 my-4 rounded-md">
                {notification.notification}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Notifications;
