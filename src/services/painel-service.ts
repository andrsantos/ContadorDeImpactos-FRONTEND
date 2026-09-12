const API_BASE_URL = 'http://localhost:8080/api/painel'

export default {
  async listarTodos() {
    const response = await fetch(API_BASE_URL)

    if (!response.ok) {
      throw new Error('Erro ao buscar os painéis cadastrados.')
    }

    return await response.json()
  },
}
