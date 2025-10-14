
//TODO: Esto parece que no es necesario
//import type { Category } from "#ibase/types/category";

const baseUrl = '/iblog/v1'

/* export const ibaseCategoryRepository = {
  async index(params: Record<string, unknown> = {}): Promise<{ data: Category[] }> {
    const { $authApiFetch } = useNuxtApp()
    return $authApiFetch<{ data: Category[] }>(`${baseUrl}/categories`, { //TODO - Duda con el $authApiFetch
      method: 'GET',
      params
    })
  },
} */

export const ibaseCategoryRepository = {
  async index(params: Record<string, unknown> = {}): Promise<{ data: Category[] }> {
    const { $apiFetch } = useNuxtApp()
    return $apiFetch<{ data: Category[] }>(`${baseUrl}/categories`, {
      method: 'GET',
      params
    })
  },
}
