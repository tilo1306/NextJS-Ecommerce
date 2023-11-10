import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefic = '/api'

  const url = new URL(apiPrefic.concat(path), baseUrl)
  return fetch(url, init)
}
