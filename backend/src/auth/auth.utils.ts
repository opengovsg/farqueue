import { Request } from 'express'

export function getApiKeyFromHeader(req: Request) {
  const header = req.get('Authorization') || req.get('authorization')
  if (!header) return undefined

  const [tokenType, apiKey] = header.trim().split(' ')
  if (tokenType.toLowerCase() !== 'bearer') return undefined

  return apiKey
}
