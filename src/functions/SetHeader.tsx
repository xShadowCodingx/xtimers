import { Row } from "react-bootstrap"

interface Props {
    header: string | null,
    headerColor: string,
    headerFont: string
}

export default function SetHeader(props: Props) {

    const HeaderStylingOne = {
        color: "#" + props.headerColor,
        fontSize: "100px"
    }

    return (
        <Row className='text-center g-0 mt-2 mb-4'>
            <h2 style={HeaderStylingOne} className={props.headerFont}>{props.header ? props.header : ""}</h2>
        </Row>
    )
}
