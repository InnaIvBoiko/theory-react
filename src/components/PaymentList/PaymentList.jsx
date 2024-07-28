import PaymentCart from "../PaymentCard/PaymentCard";

export default function PaymentList({payments}) {
    return (
        <ul>
            {payments.map((payment) => (
                <li key={payment.id}>
                    <PaymentCart payment={payment}/>
                </li>
            ))};
        </ul>  
    );
}