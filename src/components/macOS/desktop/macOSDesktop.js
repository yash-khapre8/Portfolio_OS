import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApplications } from "../../../utils/actions/app.action";
import { handleApplicationClick } from "../../../utils/actions/app.action";
import MacOSMenuBar from "../menuBar/menuBar";
import MacOSDock from "../dock/dock";
import MacOSAppWindow from "../appWindow/macOSAppWindow";
import { SleepScreen, ShutdownScreen, StartupScreen } from "../systemScreens/systemScreens";
import "./macOSDesktop.scss";

function MacOSDesktop() {
    const current_settings = useSelector((state) => state.settingsState);
    const appState = useSelector((state) => state.appState);
    const dispatch = useDispatch();

    const [systemState, setSystemState] = useState({
        isStarting: false,
        isSleeping: false,
        isShuttingDown: false,
        isLocked: false,
    });

    useEffect(() => {
        dispatch(initApplications());
    }, [dispatch]);

    const handleSystemAction = (action) => {
        switch (action) {
            case "sleep":
                setSystemState({ ...systemState, isSleeping: true });
                break;
            case "shutdown":
                setSystemState({ ...systemState, isShuttingDown: true });
                setTimeout(() => {
                    window.location.href = "/";
                }, 3000);
                break;
            case "restart":
                setSystemState({ ...systemState, isShuttingDown: true });
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
                break;
            case "lock":
                setSystemState({ ...systemState, isLocked: true });
                break;
            case "settings":
                // Find and open settings app
                const settingsApp = appState.apps?.find(app => app.id === "settings");
                if (settingsApp) {
                    dispatch(handleApplicationClick(settingsApp));
                }
                break;
            case "about":
                // Could show an about dialog
                alert("Portfolio OS - macOS\\nVersion 1.0");
                break;
            default:
                break;
        }
    };

    const handleWake = () => {
        setSystemState({ ...systemState, isSleeping: false });
    };

    // Show system screens if active
    if (systemState.isStarting) {
        return <StartupScreen />;
    }

    if (systemState.isShuttingDown) {
        return <ShutdownScreen />;
    }

    if (systemState.isSleeping) {
        return <SleepScreen onWake={handleWake} />;
    }

    return (
        <div
            className="macos-desktop"
            style={{
                backgroundImage: `url(${current_settings.currentWallpaper})`,
            }}
        >
            {/* Menu Bar at top */}
            <MacOSMenuBar onSystemAction={handleSystemAction} />

            {/* Desktop area for app windows */}
            <div className="macos-desktop-area">
                {appState.apps && appState.apps.map((app, index) => {
                    if (app.isOpened && !app.isMinimized) {
                        return <MacOSAppWindow key={index} appInfo={app} />;
                    }
                    return null;
                })}
            </div>

            {/* Dock at bottom */}
            <MacOSDock />
        </div>
    );
}

export default MacOSDesktop;
