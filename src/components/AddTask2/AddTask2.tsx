import { useToggle } from '../../hooks/useToggle';

function AddTask2() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

	return (
		<>
			<button onClick={()=>toggle()}>
				{value}
			</button>
			<button onClick={()=>toggle('blue')}>Стартовое значение</button>
		</>
	);
}

export default AddTask2;