import Button from "../components/Button";
import Card from "../components/Card";
import TaskManager from "../components/TaskManager";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        Welcome to GirlyApp 
      </h1>

      <div className="flex justify-center gap-6 flex-wrap mb-10">
        <Card title="Primary Button" description="This is a primary pink button.">
          <Button variant="primary">Click Me </Button>
        </Card>

        <Card title="Secondary Button" description="A lighter button style.">
          <Button variant="secondary">Click Me </Button>
        </Card>

        <Card title="Danger Button" description="For important warnings.">
          <Button variant="danger">Delete </Button>
        </Card>
      </div>

      {/*  Task Manager Section */}
      <div className="flex justify-center mt-10">
        <TaskManager />
      </div>
    </div>
  );
}
