const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "T-shirt Dinosaur 01",
        price: '1890',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "t-shirt",
        colors: ["white", "red", "orange"],
        slug: "t-shirt-dinosaur-01",
        size: ["s", "m", "l", "xl"],
        description: "Celebrate the holidays with this Christmas T-shirt. The shirt is white with a single green stripe across the chest and a picture of Santa on the front. There is a small snowflake on the right sleeve and a small green button in the shape of a Christmas tree on the left sleeve."
    },
    {
        title: "T-shirt Dinosaur 02",
        price: '1590',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "t-shirt",
        colors: ["white", "red", "blue"],
        slug: "t-shirt-dinosaur-02",
        size: ["s", "m"],
        description: "The Big Bang Theory T-shirt. For the nerd in all of us. Soft, comfortable, and durable. Officially licensed CBS product. A TV show that everyone loves. Great for nerds and non-nerds alike. This t-shirt is great for the person who loves the TV show The Big Bang Theory. The shirt is soft, comfortable, and durable. The shirt is officially licensed and great for the nerd in all of us. The shirt is great for nerds and non-nerds alike."
    },
    {
        title: "T-shirt Dinosaur 03",
        price: '1900',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "t-shirt",
        colors: ["white", "red", "orange", "yellow"],
        slug: "t-shirt-dinosaur-03",
        size: ["m"],
        description: "Nostalgia never goes out of style, and these t-shirts are the perfect way to show your love for your favorite memories. From the 1960s to the 1990s, there's a t-shirt for every decade. There are also t-shirts that feature logos from your favorite places, like Disneyland or Six Flags. Show your love for a place, a decade, or even a song."
    },
    {
        title: "T-shirt Polo 04",
        price: '1940',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "t-shirt",
        colors: ["white", "orange", "blue"],
        slug: "t-shirt-polo-04",
        size: ["xl"],
        description: "A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar."
    },
    {
        title: "T-shirt Polo 05",
        price: '1940',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "t-shirt",
        colors: ["white", "pink"],
        slug: "t-shirt-polo-05",
        size: ["xxl"],
        description: "A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean."
    },
    {
        title: "T-shirt Polo 06",
        price: '1940',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "t-shirt",
        colors: ["black"],
        slug: "t-shirt-polo-06",
        size: ["s", "m", "xl"],
        description: "The New Short Sleeve Garment-Dyed Vintage T-Shirt (No. 6607). Garment-dyed 100% cotton slub. One chest pocket (always handy). Noticeably more substantial cotton than you normally find in T-shirts these days, garment-dyed to achieve the effect of great age. Although newborn, they start out looking good (and old). And stay that way. And they don’t disintegrate just at the point when they’re starting to get good. Imported."
    },
    {
        title: "Shirt Bufflow 07",
        price: '1940',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "shirt",
        colors: ["white", "red", "orange", "blue"],
        slug: "shirt-caro-07",
        size: ["l", "xl"],
        description: "High-resolution, multiple angles & shots, and images that connect with your customer – these are the main components of a high-quality product description photo. "
    },
    {
        title: "Shirt Ts 08",
        price: '1940',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "shirt",
        colors: ["white", "red", "black"],
        slug: "shirt-dai-tay-08",
        size: ["s", "m", "xl"],
        description: "Sự hiện diện của những chiếc T-shirt basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. T-shirt nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của T-shirt PPN4502. Tại sao chỉ với 1 chiếc T-shirt nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.T-shirt nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, T-shirt nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động <br><br><br> Sự hiện diện của những chiếc T-shirt basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. T-shirt nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của T-shirt PPN4502. Tại sao chỉ với 1 chiếc T-shirt nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.T-shirt nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, T-shirt nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động"
    },
    {
        title: "Shirt aa 09",
        price: '1940',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "shirt",
        colors: ["white", "blue"],
        slug: "shirt-tay-dai-09",
        size: ["m"],
        description: "It might be impossible for you to write 1000 words for EVERY page on your site. If that’s the case, I recommend writing long, in-depth descriptions for your 50-100 top-priority product and category pages.”"
    },
    {
        title: "Jean phong  10",
        price: '1940',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean-phong-cach-10",
        size: ["l"],
        description: "The fact is this: Google wants to understand what your page is all about. And the more content you provide, the better Google can do its job. Plus, when you publish long content, customers can better understand what they’re about to buy."
    },
    {
        title: "Jean 11",
        price: '1940',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean-11",
        size: ["s", "m", "xl"],
        description: "Think of every possible question that a customer might want to know about your t-shirt. And answer all of those questions with great descriptions, and with amazing product photos that show off your designs."
    },
    {
        title: "Jean 12",
        price: '1940',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "jean",
        colors: ["blue"],
        slug: "jean-12",
        size: ["s", "m", "xl"],
        description: "If you are not able to do a photoshoot yet, you can use an app like Placeit.net to create mock images, or search the creative commons database for royalty free images to photoshop your designs onto."
    },
    {
        title: "T-shirt Dinosaur 13",
        price: '1890',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "t-shirt",
        colors: ["white", "red"],
        slug: "t-shirt-dinosaur-13",
        size: ["s", "m", "xl"],
        description: "If you need to use photoshopped images to get started, that’s fine. But don’t stop there. Take some of your printed shirts out to a college campus. Give them away to students, in exchange for snapping a few photos of them in the gear. Add these to your product pages and your social media channels."
    },
    {
        title: "T-shirt Dinosaur 14",
        price: '1590',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "t-shirt",
        colors: ["white", "blue"],
        slug: "t-shirt-dinosaur-14",
        size: ["s", "m"],
        description: "Tip: If you are building a t-shirt brand, don’t just use stock images of people wearing a shirt with the design photoshopped onto the shirt. If you do use photoshopped t-shirt images, please do them well. Not like this one.."
    },
    {
        title: "T-shirt Dinosaur 15",
        price: '1900',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "t-shirt",
        colors: ["red", "blue"],
        slug: "t-shirt-dinosaur-15",
        size: ["xl"],
        description: "Once you have the first one completed, move to the next one. If you need help with content, there are some companies that specialize in writing product descriptions."
    },
    {
        title: "Shirt Ab 16",
        price: '1940',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "shirt",
        colors: ["blue", "black"],
        slug: "shirt-dai-tay-16",
        size: ["m", "xl"],
        description: "The J. Peterman description reads more like a story than a boring t-shirt product description. And J. Peterman has convinced me that this vintage t-shirt may be the best vintage t-shirt in the world. J. Peterman not only sold a lot of products with this epic marketing strategy, but they also built a brand that connects with the customer."
    },
    {
        title: "Shirt 17",
        price: '1940',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "shirt",
        colors: ["white", "blue"],
        slug: "shirt-tay-dai-17",
        size: ["s", "l", "xl"],
        description: "he New Short Sleeve Garment-Dyed Vintage T-Shirt (No. 6607). Garment-dyed 100% cotton slub. One chest pocket (always handy). Noticeably more substantial cotton than you normally find in T-shirts these days, garment-dyed to achieve the effect of great age."
    },
    {
        title: "Jean phong 18",
        price: '1940',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "jean",
        colors: ["blue", "black"],
        slug: "jean-phong-cach-18",
        size: ["s", "m", "l", "xl"],
        description: "Although newborn, they start out looking good (and old). And stay that way. And they don’t disintegrate just at the point when they’re starting to get good. Imported."
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData