import "./App.css";
import { Thread } from "@/components/thread";
import { StreamProvider } from "@/providers/Stream.tsx";
import { ArtifactProvider } from "@/components/thread/artifact.tsx";

function App() {
    return <div className="flex flex-col h-screen">
        <StreamProvider>
            <ArtifactProvider>
                <div
                    className="flex-1 overflow-hidden"
                    style={{ marginTop: "50px" }}
                >
                    <Thread />
                </div>
            </ArtifactProvider>
        </StreamProvider>
    </div>}

export default App;