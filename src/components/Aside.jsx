import AsideNote from "./AsideNote";

export default function Aside(){
    return(
        <aside>
            <ul className="aside-nav-list">
                <h1>Minhas Notas</h1>
            </ul>
            <div className="aside-notes">
                <AsideNote title="Teste"/>
                <AsideNote title="Nova Nota"/>
                <AsideNote title="Nota 3"/>
            </div>
        </aside>
    )
}