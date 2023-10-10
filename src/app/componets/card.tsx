interface IPropsCard {
    title:string
    img:string
    desc:string
}

export default function Card(props:IPropsCard){
    return(
        <section>
            <div>
                <h1>{props.title}</h1>
            </div>

            
        </section>
    )
}


