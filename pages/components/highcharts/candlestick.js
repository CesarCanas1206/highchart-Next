import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

function Candlestick({ options }) {
    return (
        <>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"stockChart"}
                    options={ options }
                />
            </div>
        </>
    );
}

export default Candlestick;
