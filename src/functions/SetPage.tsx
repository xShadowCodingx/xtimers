interface Props {
    backgroundColor: string,
    children: any
}

export default function SetPage(props: Props) {

    const PageStyles = {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#" + props.backgroundColor,
        overflow: "hidden"
    }

    return (
        <div style={PageStyles}>{props.children}</div>
    )
}
