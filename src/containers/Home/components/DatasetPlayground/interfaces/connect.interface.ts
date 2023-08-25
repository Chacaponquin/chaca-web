export interface ToConnect {
  rect: DOMRect
}

export interface ConnectElement {
  from: DOMRect
  to: Array<ToConnect>
}
