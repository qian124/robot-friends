import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cards = robots.map((user, i) => {
		return <Card key={i} id={user.id} name={user.name} email={user.email}/>
	})
	return (<div>{cards}</div>);
}

export default CardList;