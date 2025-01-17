import { API_ROUTE } from "@modules/app/modules/env/domain/env"

export class ApiUrlBuilder {
  static build(route: string): string {
    return `${API_ROUTE}/api/v1/${route}`
  }
}
