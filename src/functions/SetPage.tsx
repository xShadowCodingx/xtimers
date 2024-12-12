interface Props {
    backgroundColor: string,
    children: any
}

export default function SetPage(props: Props) {
    return (
        <div style={{overflowX: "hidden", "height": "100vh", "width": "100vw", "backgroundColor": "#" + props.backgroundColor}}>{props.children}</div>
    )
}
