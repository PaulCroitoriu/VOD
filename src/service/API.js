export const getMoviesByCategory = async (category_id, pageNumber) => {
  const result = await (
    await fetch(
      `https://video-proxy.3rdy.tv/api/vod/category/${category_id}/assets?page=${pageNumber}`
    )
  ).json()
  return result
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
    console.log(error)
  }
}
