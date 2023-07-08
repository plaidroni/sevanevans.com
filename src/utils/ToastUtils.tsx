import {
   StatusCritical,
   StatusGood,
   StatusInfo,
   StatusUnknown,
   StatusWarning,
} from "grommet-icons/icons";
import { AnchorType, Layer, Notification, Text } from "grommet";
import { createContext, ReactElement, useContext, useState } from "react";

type AlertLevel = "unknown" | "warning" | "normal" | "info" | "critical";

interface CreateToastProps {
   alertLevel: AlertLevel;
   label: string;
   icon?: ReactElement;
   actions?: AnchorType[];
   duration?: number;
   description?: string;
}

function createToast({
   alertLevel,
   label,
   icon,
   actions,
   duration = 5000,
   description,
}: CreateToastProps): ReactElement {
   const alertIcons = {
      normal: <StatusInfo />,
      success: <StatusGood />,
      warning: <StatusWarning />,
      critical: <StatusCritical />,
      unknown: <StatusUnknown />,
   };

   const alertColors = {
      normal: "status-normal",
      success: "status-ok",
      warning: "status-warning",
      critical: "status-critical",
      unknown: "status-unknown",
   };

   return (
      <Notification
         status={alertLevel}
         onClose={() => {}}
         toast
         icon={icon || alertIcons[alertLevel]}
         actions={actions}
         message={description}
         title={label}
         time={duration}
      />
   );
}

// MAIN TOAST

const ToastContext = createContext({
   showToast: (toastConfig) => {
      console.warn("ToastContext used outside of ToastProvider", toastConfig);
   },
});

export const useToast = () => {
   return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
   const [toastData, setToastData] = useState(null);

   const showToast = (toastConfig) => {
      setToastData(toastConfig);
      setTimeout(() => setToastData(null), toastConfig.duration || 5000);
   };

   return (
      <ToastContext.Provider value={{ showToast }}>
         {children}
         {toastData && (
            <Layer position="bottom" modal={false} responsive={false}>
               {createToast(toastData)}
            </Layer>
         )}
      </ToastContext.Provider>
   );
};
