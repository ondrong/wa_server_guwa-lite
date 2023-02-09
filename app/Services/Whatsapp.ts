import { Client } from 'whatsapp-web.js'

class Whatsapp {
  public client: Client
  private booted = false

  public boot() {
    /**
     * Ignore multiple calls to the boot method
     */
    if (this.booted) {
      return
    }

    this.booted = true
    this.client = new Client({
      puppeteer: {
        args: ['--no-sandbox'],
      },
    })

    this.client.initialize()
  }
}

export default new Whatsapp()
