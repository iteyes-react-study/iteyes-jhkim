const OddEventResult = ({count}) => {
    console.log("oddEvent::", count);

    console.log("REDNER::");
    return <>
        {count %2 ==0 ? "짝수": "홀수"}
    </>
}

export default OddEventResult;