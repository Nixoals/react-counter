import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<section className="counter-wrapper">
				<div className="counter-container">
					<button
						className={counter < 1 ? 'button-transparent' : ''}
						disabled={counter < 1 && 'disabled'}
						onClick={() => {
							setCounter(counter - 1);
						}}
					>
						<span></span>
					</button>
					<div className="counter">{counter}</div>
					<button
						className={counter > 9 ? 'button-transparent' : ''}
						disabled={counter > 9 && 'disabled'}
						onClick={() => {
							setCounter(counter + 1);
						}}
					>
						+
					</button>
				</div>
				<div>
					<button
						className="reset-button"
						onClick={() => {
							setCounter(0);
						}}
					>
						Reset
					</button>
				</div>
			</section>
		</>
	);
};

export default Counter;
