interface IPropsCard {
    name:string
    title:string
    desc:string
}

export default function Card(props:IPropsCard){
    return(
        <div>
            <div>
                <h1>{props.name}</h1>
            </div>

            <div>
                <h2>{props.title}</h2>
                <span>{props.desc}</span>
            </div>
        </div>
    )
}