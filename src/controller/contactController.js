import { createContact } from 'Modules/contact.js'

export class ContactController {
  constructor() {
  }
  prepareContact() {
    return createContact();
  }
}