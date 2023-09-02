// plugins/fetch.js
import axios from 'axios'

export default async (context) => {
  const response = await axios.get('https://www.bilgi.edu.tr/api/news/?site=xxxx.bilgi.edu.tr')
  context.store.commit('setData', response.data)
}
