import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import OrderProducts from './OrderProducts';
import Popup from './Popup';
import OrderItem from './OrderItem';
import './style.css';


const Orders = props => {
	const [removingOrder, setRemovingOrder] = useState(null);
	const [alert, setAlert] = useState(false);

	
	const renderOrders = list => {

		const ordersList = list.map( (order, i) => {
			// if some order is active
			const active = !(props.activeOrder === null);
			const classN = active ? 'active_li' : 'order_li';
			let activeId;
			if (active && props.activeOrder === i) activeId = 'active';
			return <OrderItem 
								key={i}
								classN={classN}
								id={activeId} 
								order={order}
								setRemovingOrder={setRemovingOrder}
								i={i}
								active={active}
								setAlert={setAlert}/>
				// render ordersList depend it's state
		})

		return ordersList;
	}

	return (
		<>
			<CSSTransition
        in={alert}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
				<Popup 
					order={removingOrder}
					close={() => {setAlert(false); setRemovingOrder(null)} }
					title={removingOrder && props.ordersList.find( 
						order => order.id === removingOrder).title}
				/>
			</CSSTransition>
	    <h1>Приходы / {props.ordersList.length}</h1>
			<div className='ordersPanel'>
				<ul className='orders'>
					{renderOrders(props.ordersList)}
				</ul>
				{props.activeOrder === null ? null: <OrderProducts />}
			</div>
		</>
	)
}

function mapStateToProps (state) {
	return {ordersList: state.ordersList, activeOrder: state.activeOrder};
}

export default connect (mapStateToProps)(Orders);