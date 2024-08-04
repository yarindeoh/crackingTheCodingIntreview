import "./styles.css";
import { getConferenceRooms, getLabels } from "./apis.js";
import { useEffect, useState } from "react";

const DATA = [
    { label: "A", value: 5 },
    { label: "C", value: 1 },
    { label: "B", value: 23 },
    { label: "D", value: 23 },
    { label: "E", value: 20 },
    { label: "F", value: 14 },
];
const COLORS_PALETTE = ["#ff0000", "#ff8000", "#00ff80"];
const SPACING = 10;

const calcRelativeHeight = (height, maxHeight, colHeight) => {
    return Math.round((colHeight / maxHeight) * height);
};

const calcRelativeWidth = (width, numOfCols) => {
    const padding = 8 * (numOfCols + 1);
    return (width - padding) / numOfCols;
};

const numToPixel = (num) => num.toString() + "px";

const pixelToNumber = (px) => Number(px.split("px")[0]);

const calcMaxHeight = ({ data }) => Math.max(...data.map((item) => item.value));

const Column = ({ height, width, color }) => {
    return (
        <div
            className="column"
            style={{ height: height, width: width, backgroundColor: color }}
        />
    );
};

const GraphBarWrapper = ({ height, width, children }) => {
    const barWidth = (width.split("px")[0] - SPACING).toString() + "px";
    const barHeight = (height.split("px")[0] - SPACING).toString() + "px";

    return (
        <div className="wrapper" style={{ width: barWidth, height: barHeight }}>
            {children}
        </div>
    );
};

const XAxis = ({ data, width }) => (
    <div className="xaxis">
        {data.map((col) => (
            <div style={{ width: width / data.length }}>{col.label}</div>
        ))}
    </div>
);

const GraphBar = ({ height = "200px", width = "300px", data = DATA }) => {
    if (!Object.keys(data).length) return;
    const heightNumber = pixelToNumber(height);
    const widthNumber = pixelToNumber(width);
    const maxHeight = calcMaxHeight({ data });

    const colWidth = calcRelativeWidth(widthNumber, data.length);

    return (
        <>
            <GraphBarWrapper width={width} height={height}>
                {data.map((col, index) => (
                    <Column
                        height={calcRelativeHeight(
                            heightNumber - SPACING,
                            maxHeight,
                            col.value
                        )}
                        width={colWidth}
                        color={COLORS_PALETTE[index % COLORS_PALETTE.length]}
                    />
                ))}
            </GraphBarWrapper>
            <XAxis data={data} width={widthNumber} />
        </>
    );
};

/**
 part 2
 **/
const getApiRes = async () => {
    return await getConferenceRooms();
};

const getLabelsData = async () => {
    return await getLabels();
};

const calculateTotalCapacityByLabel = (labelCapacity, label, labels) => {
    if (label.parentId) {
        return (
            labelCapacity.get(label.id) +
            calculateTotalCapacityByLabel(
                labelCapacity,
                labels.find((l) => Number(l.id) === Number(label.parentId)),
                labels
            )
        );
    } else {
        return labelCapacity.get(label.id);
    }
};

const createLabelData = ({ labelCapacity, labelData }) => {
    const res = labelCapacity.entries().reduce((acc, obj) => {
        let label = labelData.filter((l) => l.id == obj[0])[0];
        acc.push({ label: label.name, value: labelCapacity.get(obj[0]) });
        return acc;
    }, []);
    return res;
};

export default function App() {
    // The total capacity for a label is the sum of the capacity of all rooms associated with the label.
    const [labels, setLabels] = useState({});

    useEffect(() => {
        const getData = async () => {
            const confData = await getApiRes();
            const labelData = await getLabelsData();
            const labelCapacity = new Map();
            if (confData && labelData) {
                for (let i = 0; i < confData.length; i++) {
                    for (let j = 0; j < confData[i].labels?.length; j++) {
                        let currentLabelCapacity = labelCapacity.get(confData[i].labels[j]);
                        let sumOfLabelCapacity = currentLabelCapacity
                            ? currentLabelCapacity + confData[i].capacity
                            : confData[i].capacity;
                        labelCapacity.set(confData[i].labels[j], sumOfLabelCapacity);
                        // labelCapacity[confData[i].labels[j]] = currentLabelCapacity
                        //   ? currentLabelCapacity + confData[i].capacity
                        //   : confData[i].capacity;
                    }
                }
                // console.log(labelCapacity, "labelCapacity");
                labelData.map((label) => {
                    labelCapacity.set(
                        label.id,
                        calculateTotalCapacityByLabel(labelCapacity, label, labelData)
                    );
                    // labelCapacity[label.id] = calculateTotalCapacityByLabel(
                    //   labelCapacity,
                    //   label,
                    //   labelData
                    // );
                });
            }
            // console.log(labelCapacity, "labelCapacity2");
            const parsedLabels = createLabelData({ labelCapacity, labelData });
            setLabels(parsedLabels);
        };
        getData();
    }, []);

    console.log(labels, "labels");

    return (
        <div className="App">
            <GraphBar data={labels} />
        </div>
    );
}

// const StyledXAxis = styled.div`
//   display: flex;
//   align-items: flex-end;
// `;

// const StyledColName = styled.div`
//   width: ${({ width }) => width + "px"};
// `;
{
    /* <StyledColName width={width / data.length}>{col.label}</StyledColName> */
}
