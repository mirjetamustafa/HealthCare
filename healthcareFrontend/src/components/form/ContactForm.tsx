import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import Textarea from '../shared/Textarea/Textarea'
import Send from '../../assets/send.svg?react'

const ContactForm = () => {
  return (
    <form action="">
      <Input
        name="name"
        type="text"
        label="Full Name"
        placeholder="John Doe"
        onChange={() => {}}
      />
      <Input
        name="email"
        type="email"
        label="Email Address"
        placeholder="john@example.com"
        onChange={() => {}}
      />
      <Input
        name="contactNumber"
        type="text"
        label="Phone Number"
        placeholder="(123) 456-789"
        onChange={() => {}}
      />
      <Textarea
        name="yourMessage"
        label="Your Message"
        rows={5}
        placeholder="How can we help you?"
        onChange={() => {}}
      />
      <Button
        variant="active"
        className="w-full flex justify-center items-center gap-2"
      >
        Send Message
        <Send className="w-4 h-4" />
      </Button>
    </form>
  )
}

export default ContactForm
