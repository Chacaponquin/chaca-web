export class PlaygroundZoom {
  static MAX_ZOOM = 2
  static MIN_ZOOM = 1
  static STEP_ZOOM = 0.1

  static zoomIn(zoom: number): number {
    if (zoom < this.MAX_ZOOM) {
      return zoom + this.STEP_ZOOM
    } else {
      return zoom
    }
  }

  static zoomOut(zoom: number): number {
    if (zoom > this.MIN_ZOOM) {
      return zoom - this.STEP_ZOOM
    } else {
      return zoom
    }
  }
}
