import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
const appWindow = getCurrentWebviewWindow();

export default function Navbar() {
  return (
    <div className="mb-[2em] z-[9999]">
      <div data-tauri-drag-region className="titlebar">
        <div className="titlebar-appname">PDC Dashboard</div>
        <div>
          <div
            className="titlebar-button"
            id="titlebar-minimize"
            onClick={() => {
              appWindow.minimize();
            }}
          >
            <img src="../assets/icons/minimize-20x20.svg" alt="minimize" />
          </div>
          <div
            className="titlebar-button"
            id="titlebar-maximize"
            onClick={() => {
              appWindow.toggleMaximize();
            }}
          >
            <img src="../assets/icons/maximize-20x20.svg" alt="maximize" />
          </div>
          <div
            className="titlebar-button"
            id="titlebar-close"
            onClick={() => {
              appWindow.close();
            }}
          >
            <img src="../assets/icons/close-20x20.svg" alt="close" />
          </div>
        </div>
      </div>
    </div>
  );
}
