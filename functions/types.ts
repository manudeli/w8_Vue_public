export enum Methods {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
  connect = 'CONNECT',
  patch = 'PATCH',
}

export enum ApiType {
  id = 'i',
  title = 't',
  search = 's',
}

export enum OptionType {
  year = 'y',
  type = 'type',
  page = 'page',
}

export type Option = {
  type: OptionType
  value: string | number
}

export interface ApiOptions {
  methods: Methods
  apiType: ApiType
  value: string
  options: Option[]
}
