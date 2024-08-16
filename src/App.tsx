import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PPathfindingProvider } from "./context/PathfindingContext";
import { PSpeedProvider } from "./context/SpeedContext";
import { PTileProvider } from "./context/TileContext";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PPathfindingProvider>
      <PTileProvider>
        <PSpeedProvider>
          <div className="h-svh w-svw flex flex-col ">
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </PSpeedProvider>
      </PTileProvider>
    </PPathfindingProvider>
  );
}

export default App;
