import { ChacaError } from "@modules/app/exceptions"

export class InvalidConfigurationException extends ChacaError {}

export class InvalidVersionException extends ChacaError {}

export class InvalidDatasetsException extends ChacaError {}
