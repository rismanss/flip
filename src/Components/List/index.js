import { Card, Button } from '../../Uikit';
import Style from './style.module.css';
import { Link } from 'react-router-dom';

const List = (props) => {
  return (
    <div className={Style.container}>
      <Card status={props.status}>
        <Link to={`/detail/${props.id}`} className={Style.link}>
          <div style={{ float: 'right', paddingTop: '15px' }}>
            {props.status === 'SUCCESS' ? (
              <Button label="Berhasil" size="small" />
            ) : (
              <Button label="Pengecekan" variant="secondary" size="small" />
            )}
          </div>
          <div style={{ fontWeight: 'bold' }}>{props.title.toUpperCase()}</div>
          <div>{props.name}</div>
          <div>
            {props.amount} . {props.date}
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default List;
