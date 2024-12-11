import { Row } from 'react-bootstrap'

interface Props {
    text: string | null,
    textColor: string,
    textFont: string
}

export default function SetText(props: Props) {

    const TextStylingOne = {
        color: "#" + props.textColor,
        fontSize: "80px"
    }

    return (
        <Row className='text-center g-0' style={TextStylingOne}>
            <p className={props.textFont}>{props.text ? props.text : ""}</p>
        </Row>
    )
}
