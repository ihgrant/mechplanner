import React, { Component } from "react";
import AppBar from "./AppBar";
import Heat from "./Heat";
import Section from "./Section";
import AddItemDialog from "./AddItemDialog";

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { mech } = this.props;

        return (
            <div style={{ width: "100%" }}>
                <AppBar />
                <div style={{ padding: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ flex: 2 }}>
                            <Heat />
                            <h2>{`${mech.Tons} Tons (${
                                this.props.tonsFree
                            } free)`}</h2>
                        </div>
                        <div style={{ width: "2rem" }} />
                        <Section section="h" name={"Head"} />
                        <div style={{ width: "2rem" }} />
                        <div style={{ flex: 2 }} />
                    </div>
                    <div style={{ height: "1rem" }} />
                    <div style={{ display: "flex" }}>
                        <Section section="la" name={"Left Arm"} />
                        <div style={{ width: "1rem" }} />
                        <Section section="lt" name={"Left Torso"} />
                        <div style={{ width: "1rem" }} />
                        <Section section="ct" name={"Center Torso"} />
                        <div style={{ width: "1rem" }} />
                        <Section section="rt" name={"Right Torso"} />
                        <div style={{ width: "1rem" }} />
                        <Section section="ra" name={"Right Arm"} />
                    </div>
                    <div style={{ height: "1rem" }} />
                    <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }} />
                        <div style={{ width: "1rem" }} />
                        <Section section="ll" name={"Left Leg"} />
                        <div style={{ width: "1rem" }} />
                        <div style={{ flex: 1 }} />
                        <div style={{ width: "1rem" }} />
                        <Section section="rl" name={"Right Leg"} />
                        <div style={{ width: "1rem" }} />
                        <div style={{ flex: 1 }} />
                    </div>
                </div>
                <AddItemDialog />
            </div>
        );
    }
}
