import Textarea from './components/shared/Textarea/Textarea'

function App() {
  return (
    <div className="m-9">
      <Textarea
        label="Reason for Visit"
        name="description"
        rows={3}
        placeholder="Briefly describe your symptoms or reason for the appointment"
      />
    </div>
  )
}

export default App
