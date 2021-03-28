import { useState, useEffect } from 'react';
import { Search, List } from '../Components';
import { connect } from 'react-redux';
import { getData } from '../actions/transaction';

const ListTransaction = (props) => {
  const { getData, transaction } = props;

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getData();
  }, [getData]);

  const formatAmount = (value) => {
    let format = value.toString().split('').reverse().join('');
    let rp = format.match(/\d{1,3}/g);
    rp = rp.join('.').split('').reverse().join('');
    return rp;
  };

  const setTotal = () => {
    let total = 0;
    transaction.map((a) => total += a.amount);
    return (<span style={{color: '#fd6542', fontWeight: 'bold'}}>{formatAmount(total)}</span>);
  };

  const optDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const myData = transaction.sort((a, b) => {
    if(filter === 'Nama A - Z' && a.beneficiary_name < b.beneficiary_name) { return -1; }
    if(filter === 'Nama Z - A' && b.beneficiary_name < a.beneficiary_name) { return -1; }
    return 0;
  });
  return (
    <div style={{ padding: '0px 10px 0px 10px' }}>
      <div style={{ textAlign: 'center', fontSize: '29px', padding: '10px' }}>
        Daftar Transaksi
      </div>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Halo kak!</div>
      <span>
        Kamu telah melakuan transaksi sebesar Rp. {setTotal()} sejak menggunakan
        flip.
      </span>
      <Search 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        filter={filter}
        setfilter={setFilter}
      />
      {myData.map((value) => {
        if (value.beneficiary_name.includes(search) || value.beneficiary_bank.includes(search) || value.sender_bank.includes(search)) {
          return (
            <List
              id={value.id}
              key={value.id}
              status={value.status}
              title={`${value.beneficiary_bank} - ${value.sender_bank}`}
              name={value.beneficiary_name}
              amount={`Rp. ${formatAmount(value.amount)}`}
              date={new Date(value.created_at).toLocaleDateString(
                'id-ID',
                optDate
              )}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTransaction);
