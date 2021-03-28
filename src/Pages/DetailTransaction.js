import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Button } from '../Uikit';

const DetailTransaction = (props) => {
  const id = props.match.params.id;
  const {transaction} = props;
  const history = useHistory();

  const formatAmount = (value) => {
    let format = value.toString().split('').reverse().join('');
    let rp = format.match(/\d{1,3}/g);
    rp = rp.join('.').split('').reverse().join('');
    return rp;
  };

  const handleBack = () => {
    history.push('/');
  };

  const data = transaction.find((item) => item.id === id);
  const optDate = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div style={{ padding: '0px 10px 0px 10px' }}>
      <div style={{ textAlign: 'center', fontSize: '29px', padding: '10px' }}>
        Daftar Transaksi
      </div>
      <div>
        <Card style={{ padding: '20px' }}>
          <div style={{ float: 'right', marginTop: '-5px' }}>
            {data.status === 'SUCCESS' ? (
              <Button label="Berhasil" variant="success" size="small" />
            ) : (
              <Button label="Pengecekan" variant="secondary" size="small" />
            )}
          </div>
          <div>ID TRANSAKSI : {data.id}</div>
        </Card>
      </div>
      <div style={{marginTop: '20px'}}>
        <Card style={{ padding: '20px' }}>
          <div style={{ marginTop: '20px' }}>
            <div style={{fontWeight: 'bold'}}>PENGIRIM</div>
            <div>{data.sender_bank.toUpperCase()}</div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div style={{fontWeight: 'bold'}}>PENERIMA</div>
            <div>{data.beneficiary_bank.toUpperCase()}</div>
            <div>{data.account_number}</div>
            <div>{data.beneficiary_name}</div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div style={{fontWeight: 'bold'}}>NOMINAL</div>
            <div>{`Rp. ${formatAmount(data.amount)}`}</div>
            <div><strong>Kode Unik : </strong>{data.unique_code}</div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div style={{fontWeight: 'bold'}}>CATATAN</div>
            <div>{data.remark}</div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div style={{fontWeight: 'bold'}}>WAKTU DIBUAT</div>
            <div>
              {new Date(data.created_at).toLocaleDateString('id-ID',optDate)}
            </div>
          </div>
        </Card>
      </div>
      <div style={{marginTop: '20px', marginBottom: '50px'}}>
        <Button style={{cursor: 'pointer'}} label="Kembali" variant="secondary" size="small" onClick={handleBack} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction.data,
});

export default connect(mapStateToProps, null)(DetailTransaction);
