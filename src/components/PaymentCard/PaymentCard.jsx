import css from './PaymentCard.module.css';
import clsx from 'clsx';

export default function PaymentCart({ payment: {
    amount,
    description,
    cardNumber,
    cardType,
    cardOwner,
    date,
    isPaid,
} }) {
    // const textClasses = [css.text];
    // if (isPaid) {
    //     textClasses.push(css.isPaid);
    // } else {
    //     textClasses.push(css.isPending);
    // }

    // clsx('text', {
    //     isPaid: isPaid,
    //     isPending: !isPaid,
    // })

    const amountClassNames = clsx(css.text, isPaid ? css.isPaid : css.isPending);

    return (
        <div className={css.container} >
            <p className={css.text} >Amount: {amount} </p>
            {/* <p className={textClasses.join(' ')} >Status: {isPaid ? 'Paid' : 'Pending'}</p> */}
            <p className={amountClassNames} >Status: {isPaid ? 'Paid' : 'Pending'}</p>
            <p className={css.text} >Description: {description} </p>
            <p className={css.text} >Card Number: {cardNumber} </p>
            <p className={css.text} >Card Type: {cardType} </p>
            <p className={css.text} >Card Holder Name: {cardOwner} </p>
            <p className={css.text} >Payment Date: {date} </p>
        </div>
    );
}