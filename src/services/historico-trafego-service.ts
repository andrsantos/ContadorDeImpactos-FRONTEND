const API_BASE_URL = 'http://localhost:8080/api/contagem'

export default {
  async obterResumoPorPainel(painelId: any) {
    const url = painelId ? `${API_BASE_URL}?painelId=${painelId}` : API_BASE_URL

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('O Painel não existe ou não possui histórico.')
    }

    return await response.json()
  },
}
