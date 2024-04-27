import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notifications = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  // Dummy notifications array
  const notifications = [
    // { id: 1, message: 'Someone booked you!' },
    // { id: 2, message: 'Notification 2' },
    // { id: 3, message: 'Notification 3' },
  ];

  const handleNotificationClick = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const handleDocumentClick = (e) => {
    // Check if the click is outside the notification box
    if (isNotificationVisible && !e.target.closest('.notification')) {
      setIsNotificationVisible(false);
    }
  };

  useEffect(() => {
    // Add click event listener to the document
    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isNotificationVisible]);

  // Variants for animation
  const notificationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative notification">
      <FontAwesomeIcon
        icon={faBell}
        className="text-2xl text-[#56606D] cursor-pointer"
        onClick={handleNotificationClick}
      />

      <AnimatePresence>
        {isNotificationVisible && (
          <motion.div
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="absolute top-14 right-0 bg-black bg-opacity-90 text-white rounded-xl p-4 w-[250px]"
          >
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div key={notification.id} className="mb-2">
                  {notification.message}
                </div>
              ))
            ) : (
              <p className='text-[#7c7c7c]'>No notification yet</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
