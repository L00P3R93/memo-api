import React from 'react'
import {v4 as uuidv4} from 'uuid'

const App = () => {
	console.log('Render: App')

	const [users, setUsers] = React.useState([
		{id: 'a', name: 'Sntaks'},
		{id: 'b', name: 'Malaq'},
	])

	const [text, setText] = React.useState('')

	const handleText = (event) => {
		setText(event.target.value)
	}

	const handleAddUser = () => {
		setUsers(users.concat({id: uuidv4(), name: text}))
	}

	return (
		<div>
			<input type='text' value={text} onChange={handleText} />
			<button type='button' onClick={handleAddUser}>
				Add User
			</button>

			<List list={users} />
		</div>
	)
}

const List = React.memo(({list}) => 
	console.log('Render: List') || (
	<ul>
		{list.map((item) => (
			<ListItem key={item.id} item={item} />
		))}
	</ul>
)) 

const ListItem = React.memo(({item}) =>
	console.log('Render: ListItem') || (
		<li>{item.name}</li>
))
	

export default App;
