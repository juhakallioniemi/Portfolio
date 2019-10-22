import * as React from "react";
import { TFunction, i18n } from "i18next";
import { ProjectsList } from "./ProjectsList";
import localesEn from "../locales/en.json";
import { StyleRoot } from "radium";

interface MainProps {
    t: TFunction;
    i18n: i18n;
    fadeInDown?: any;
}

export class Main extends React.Component<MainProps, {}> {
    render() {
        if (location.hash.split("/")[1] === localesEn["menu-titles"][1]) {
            return (
                <StyleRoot style={this.props.fadeInDown}>
                    <ProjectsList t={this.props.t} i18n={this.props.i18n} />
                </StyleRoot>
            );
        }
        return this.props.t("noContent");
    }
}
