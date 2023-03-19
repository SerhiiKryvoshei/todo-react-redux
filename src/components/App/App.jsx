import classnames from "classnames";
import { data } from "../../data/data";

import NewTodo from "../NewTodo/NewTodo";
import TodoList from "../TodoList/TodoList";
import Filters from "../Filters/Filters";
import styles from "./App.module.scss";

function App() {
	const { filterNames } = data;

	return (
		<div className={classnames(styles["App"])}>
			<div className="container">
				<h1 className={classnames(styles["title"])}>Learn React - Redux</h1>
				<NewTodo />
				<Filters data={filterNames} />
				<TodoList />
			</div>
		</div>
	);
}

export default App;
