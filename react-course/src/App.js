import { TodoProvider } from "./TodoContext";
import { AppContent } from "./AppContent";

function App() {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
}

export default App;
