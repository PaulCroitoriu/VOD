export const getMoviesByCategory = async (category_id, pageNumber) => {
  try {
    const data = await (
      await fetch(
        `https://video-proxy.3rdy.tv/api/vod/category/${category_id}/assets?page=${pageNumber}`
      )
    ).json()
    return data
  } catch (error) {}
}

export const getCategories = async () => {
  try {
    const { data } = await (
      await fetch("https://video-proxy.3rdy.tv/api/vod/category")
    ).json()

    const modifiedData = data["genres"].map(x => ({
      id: x["id"],
      name: x["name"],
    }))
    return modifiedData
  } catch (error) {
    console.log(error.message)
  }
}

export const getAssetDetails = async id => {
  try {
    const { data } = await (
      await fetch(`https://video-proxy.3rdy.tv/api/vod/asset/${id}`)
    ).json()
    return data
  } catch (error) {}
}

export const getPopular = async () => {
  try {
    const { data } = await (
      await fetch("https://video-proxy.3rdy.tv/api/vod/popular")
    ).json()
    return data
  } catch (error) {
    console.log(error.message)
  }
}
