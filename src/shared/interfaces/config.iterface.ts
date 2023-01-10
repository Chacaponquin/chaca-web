import { FILE_TYPE } from '../constant/FILE_TYPE'
import { FieldArgument } from './datasets.interface'
import { Argument } from './options.interface'

export interface ConfigSchema {
  file: ConfigFile
  saveSchema: boolean
}

export interface ConfigFile {
  fileType: FILE_TYPE
  arguments: { [path: string]: FieldArgument }
}

export interface FileConfigOption {
  fileType: FILE_TYPE
  arguments: Argument[]
}

export interface NoUserLimits {
  LIMIT_DATASETS: number
  LIMIT_DOCUMENTS: number
}
