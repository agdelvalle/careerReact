import React from "react";
import ReactDOM from "react-dom";
import { DisplayAll } from "./pages/careers";
// import { HeaderBar } from "./components/header";

// const test = <h1>this is a test</h1>

ReactDOM.render(
    <div>
        {/* <HeaderBar /> */}
        <main className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
            <DisplayAll />
        </div>
        </main>
    </div>,
    document.querySelector("#root")
)