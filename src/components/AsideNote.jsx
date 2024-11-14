export default function AsideNote(props){
    return(
        <div className="aside-note-wrapper">
            <div className="aside-note-title">
                <h3>{props.title}</h3>
            </div>
            <div className="aside-note-date">
                <p>Última atualização em: 14/11/2024</p>
            </div>
        </div>
    )
}