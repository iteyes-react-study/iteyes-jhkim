const MyButton = ({text,type,onClick}) => {

    // 클래스 타입으로 정의되어 있찌 않은 타입이 Props로 오는것을 상수로 관리해 방지한다.
    const btnType = ["positive","negative"].includes(type) ? type : "default";

    return (
        // join을 사용해 띄어쓰기를 기준으로 배열을 합치게 한다.
        // 동적으로 클래스명을 관리할 수 있다.
        <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    )
}

MyButton.defaultProps = {
    type: "default",
}

export default MyButton;