import * as React from "react";
import { TFunction, i18n } from "i18next";

const appEnvironment = process.env.NODE_ENV;

interface FooterProps {
    t: TFunction;
    i18n: i18n;
}

interface FooterState {
    lastUpdate: string;
}

export class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: any) {
        super(props);
        this.state = { lastUpdate: "" };
    }

    async componentDidMount() {
        const requestUrl =
            appEnvironment === "production"
                ? "https://api.github.com/repos/juhakallioniemi/portfolio/contents/docs/main.bundle.js"
                : "/docs/main.bundle.js";
        const response = await fetch(requestUrl);
        const lastModified = new Date(response.headers.get("Last-Modified"));
        this.setState({
            lastUpdate: lastModified.toLocaleString(this.props.i18n.language)
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.props.t("lastUpdate")}: {this.state.lastUpdate}
            </React.Fragment>
        );
    }
}
