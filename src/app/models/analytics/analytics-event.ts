export class AnalyticsEvent {
  category: string
  label: string
  action: string
  value: number = 0

  constructor(category: string, label: string, action: string) {
    this.category = category
    this.label = label
    this.action = action

    // if (value) this.value = value
  }

  send() {
    ;(<any>window).ga('send', 'event', this.category, this.action, this.label)
  }
}
