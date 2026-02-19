import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import Textarea from '../shared/Textarea/Textarea'
import Send from '../../assets/send.svg?react'

const ContactForm = () => {
  return (
    <form action="">
      <Input type="text" label="Full Name" placeholder="John Doe" />
      <Input
        type="email"
        label="Email Address"
        placeholder="john@example.com"
      />
      <Input type="text" label="Phone Number" placeholder="(123) 456-789" />
      <Textarea
        label="Your Message"
        rows={5}
        placeholder="How can we help you?"
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
