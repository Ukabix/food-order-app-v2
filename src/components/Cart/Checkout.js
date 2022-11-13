import styles from './Checkout.module.css';

const Checkout = (props) => {
	return (
		<form>
			<div className={styles.control}>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' />
			</div>
			<div className={styles.control}>
				<label htmlFor='name'>Street</label>
				<input type='text' id='street' />
			</div>
			<div className={styles.control}>
				<label htmlFor='postal'>Postal code</label>
				<input type='text' id='postal' />
			</div>
			<div className={styles.control}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' />
			</div>
			<button type='button' onClick={props.onCancel}>
				Cancel
			</button>
			<button>Confirm</button>
		</form>
	);
};

export default Checkout;
