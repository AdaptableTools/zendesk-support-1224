import { toast } from "react-toastify";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";

const showSuccess = (message: string) => {
  toast.success(message, {
    icon: <CheckCircleIcon />,
    theme: "light",
  });
};

const showError = (message: string) => {
  toast.error(message, {
    icon: <ErrorIcon />,
    theme: "light",
  });
};

const showInfo = (message: string) => {
  toast(message, {
    icon: <InfoIcon />,
    theme: "light",
  });
};

const showWarning = (message: string) => {
  toast.warning(message, {
    icon: <WarningIcon />,
    theme: "light",
  });
};

const toaster = {
  showSuccess,
  showError,
  showInfo,
  showWarning,
};

export default toaster;
