interface Props {
    emblem: any,
    emblem_alt: string
}

export default function CreateEmblem(props: Props) {
  return (
    <img src={props.emblem} alt={props.emblem_alt} className="timer-emblem" />
  )
}
