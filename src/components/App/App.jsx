import classnames from "classnames";
import NewTodo from "../NewTodo/NewTodo";
import TodoList from "../TodoList/TodoList";
import Filters from "../Filters/Filters";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={classnames(styles["App"])}>
			<div className="container">
				<h1 className={classnames(styles["title"])}>Learn React - Redux</h1>
				<NewTodo />
				<Filters />
				<TodoList />
			</div>
		</div>
	);
}

export default App;
