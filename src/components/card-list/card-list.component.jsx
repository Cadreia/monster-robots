import './card-list.styles.css'

const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => <h2 key={monster.id}>{monster.name}</h2>)}
        </div>
    )
}

export default CardList
