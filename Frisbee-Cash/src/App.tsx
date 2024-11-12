import { createTheme } from "@mui/material/styles";
import { globalThemeOptions } from "./themes/global";
import "./index.css";
import "./utils/toasts/toasts.css";
import { AdaptableAgGrid } from "./components/AdaptableAgGrid/AdaptableAgGrid";

const theme = createTheme(globalThemeOptions);

function App() {
  return <AdaptableAgGrid />;
}

export default App;
