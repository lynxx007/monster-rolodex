import "../card-list/card-list.styles.css";
import Card from "./card/card";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};
const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//     render() {
//         console.log(this.props);
//         const { monsters } = this.props
//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     const { id, email, name } = monster
//                     return (
//                         <Card monsterName={name} email={email} id={id} />

//                     )

//                 })}
//             </div>
//         )
//     }
// }

export default CardList;
