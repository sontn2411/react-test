import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = 'Trang chủ | Smarter'

    // Hàm thêm hoặc cập nhật một thẻ meta
    const updateMetaTag = (
      attr: string,
      attrValue: string,
      content: string
    ) => {
      let element = document.querySelector(`meta[${attr}='${attrValue}']`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag(
      'property',
      'og:image',
      'https://static.vecteezy.com/system/resources/thumbnails/014/440/983/small_2x/image-icon-design-in-blue-circle-png.png'
    )
    updateMetaTag('property', 'og:description', 'Mô tả nội dung động từ React')
    updateMetaTag(
      'name',
      'description',
      'Trang chủ Smarter, cập nhật meta động'
    )
  }, [])

  return <div>Home</div>
}

export default Home
