
const MyHeader = () => {
    const style = {
        h1 : {
            color : "yellow",
        },
    };

    const headerTitle = "헤더입니다";
    return <header style={style.h1}>{headerTitle}</header>;
   
};
export default MyHeader;