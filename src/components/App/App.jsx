import PaymentList from '../PaymentList/PaymentList.jsx';
import PageTittle from '../PageTitle/PageTitle.jsx';
import initPayments from '../../payments.json';

//import css from './App.module.css';

export default function App() {

  return (
    <>
      <PageTittle text='Payments' />
      <PaymentList payments={initPayments} />
    </>
  );
}
