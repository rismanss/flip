import {Input, Dropdown} from '../../Uikit';
import Style from './style.module.css';

const Search = (props) => {
  return (
    <div className={Style.container}>
      <Input value={props.value} onChange={props.onChange} />
      <Dropdown style={{borderLeft: 'none'}} {...props} />
    </div>
  );
};

export default Search;