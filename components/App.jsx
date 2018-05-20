import React, { Component } from "react";
import MechChoice from "./MechChoice";
import Section from "./Section";

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { mech } = this.props;

        return (
            <div style={{ width: "100%" }}>
                <MechChoice />
                <h1>{`${mech.Designation} ${mech.Model}`}</h1>
                <h2>{`${mech.Tons} Tons (${this.props.tonsFree} free)`}</h2>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 2 }} />
                    <Section section="h" name={"Head"} />
                    <div style={{ flex: 2 }} />
                </div>
                <div style={{ display: "flex" }}>
                    <Section section="la" name={"Left Arm"} />
                    <Section section="lt" name={"Left Torso"} />
                    <Section section="ct" name={"Center Torso"} />
                    <Section section="rt" name={"Right Torso"} />
                    <Section section="ra" name={"Right Arm"} />
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }} />
                    <Section section="ll" name={"Left Leg"} />
                    <div style={{ flex: 1 }} />
                    <Section section="rl" name={"Right Leg"} />
                    <div style={{ flex: 1 }} />
                </div>
            </div>
        );
    }
}
