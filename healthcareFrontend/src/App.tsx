import Input from './components/shared/Input/Input'
import Select from './components/shared/Select/Select'
import Textarea from './components/shared/Textarea/Textarea'

function App() {
  return (
    <div className="m-9">
      <Input label="Name" type="text" name="name" placeholder="Name" />
      <Input label="Emal" type="email" name="email" placeholder="email" />
      <Textarea
        label="Description"
        name="description"
        placeholder="Description"
        rows={4}
      />
      <Select
        label="Category"
        name="category"
        options={[{ label: 'Category 1' }, { label: 'Category 2' }]}
      />
    </div>
  )
}

export default App
