import { ChangeEvent } from "react";
import "../search-box/search-box.styles.css"

type SearchBoxProps = {
    className : string,
    placeholder? : string,
    value: (event : ChangeEvent<HTMLInputElement>) => void
}
const SearchBox = ({className,placeholder,value}:SearchBoxProps) => {
    
    return (
        <input
            className={`search-box ${className}`}
            placeholder={placeholder}
            type="search"
            onChange={value}
        />
    )
}

// class SearchBox extends Component {
//     render() {
//         return <input
//             className={`search-box ${this.props.className}`}
//             placeholder={this.props.placeholder}
//             type="search"
//             onChange={this.props.value}
//         />
//     }
// }
export default SearchBox