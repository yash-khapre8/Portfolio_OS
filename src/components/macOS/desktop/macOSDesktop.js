import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initApplications } from "../../../utils/actions/app.action";
import { handleApplicationClick } from "../../../utils/actions/app.action";
import MacOSMenuBar from "../menuBar/menuBar";
import MacOSDock from "../dock/dock";
import MacOSAppWindow from "../appWindow/macOSAppWindow";
import { SleepScreen, ShutdownScreen, StartupScreen } from "../systemScreens/systemScreens";
import "./macOSDesktop.scss";

import TechBackground from "../../base/techBackground";

function MacOSDesktop() {
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
                const settingsApp = appState.apps?.find(app => app.id === "settings");
                if (settingsApp) {
                    dispatch(handleApplicationClick(settingsApp));
                }
                break;
            case "about":
                alert("Portfolio OS - macOS\nVersion 1.0");
                break;
            default:
                break;
        }
    };

    const handleWake = () => {
        setSystemState({ ...systemState, isSleeping: false });
    };

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
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundColor: "#080d1a",
            }}
        >
            <TechBackground />
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
