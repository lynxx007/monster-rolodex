import "../card/card.styles.css";
import { Monster } from "../../../App";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      />
      <h1 style={{ textAlign: "center", fontSize: "20px" }}>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//     render() {
//         return (
//             <div className="card-container" key={this.props.id}>
//                 <img alt={`monster ${this.props.name}`}
//                     src={`https://robohash.org/${this.props.id}?set=set2`} />
//                 <h1>{this.props.monsterName}</h1>
//                 <p>{this.props.email}</p>
//             </div>
//         )
//     }
// }
export default Card;
