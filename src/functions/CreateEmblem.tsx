interface Props {
    emblem: any,
    emblem_alt: string
}

export default function CreateEmblem(props: Props) {
  return (
    <img src={props.emblem} width={'auto'} height={250} alt={props.emblem_alt} style={{position: 'absolute', bottom: '0', left: '16.7%', transform: "translate(-50%, 30%)"}} />
  )
}
