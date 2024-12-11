import { Row } from "react-bootstrap"

interface Props {
    logoUrl: string
}

export default function SetLogo(props: Props) {
    if(props.logoUrl !== "") {
        return (
            <Row className='justify-content-center g-0' style={{ marginTop: '20px' }}>
                <img src={props.logoUrl} alt="Logo" style={{maxWidth: "350px"}} />
            </Row>
        )
    } else {
        return <></>
    }
}
