import type { AxiosResponse } from "axios"
import type { AxiosApiResponse } from "../types/api"

export const responsePromiseMethod = async (func: Promise<AxiosResponse<AxiosApiResponse, unknown>>) => {
  return new Promise((res, rej) => {
    func.then(e => {
      const data = e.data.data
      try{res(JSON.parse(data))}catch{res(data)}
    }).catch(rej)
  })
}