import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PPathfindingProvider } from "./context/PathfindingContext";
import { PSpeedProvider } from "./context/SpeedContext";
import { PTileProvider } from "./context/TileContext";
import { Nav } from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PPathfindingProvider>
      <PTileProvider>
        <PSpeedProvider>
          <div className="h-svh w-svw flex flex-col ">
            <Nav />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </PSpeedProvider>
      </PTileProvider>
    </PPathfindingProvider>
  );
}

export default App;
