import { ControlPanel, Todo } from './components';
import { useTodoContext } from './TodoContext';
import styles from './app.module.css';

export const App = () => {
    const { todos, onTodoAdd, setSearchPhrase, setIsAlphabetSorting } = useTodoContext();

    return (
        <div className={styles.app}>
            <ControlPanel
                onTodoAdd={onTodoAdd}
                onSearch={setSearchPhrase}
                onSorting={setIsAlphabetSorting}
            />
            <div>
                {todos.map(({ id, title, completed, isEditing = false }) => (
                    <Todo
                        key={id}
                        id={id}
                        title={title}
                        completed={completed}
                        isEditing={isEditing}
                    />
                ))}
            </div>
        </div>
    );
};