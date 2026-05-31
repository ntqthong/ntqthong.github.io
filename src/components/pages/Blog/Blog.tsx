import './Blog.css'

const posts = [
  {
    title: 'Getting Started with Android Automotive OS',
    date: 'May 10, 2026',
    category: 'AAOS',
    img: 'https://placehold.co/400x200/2e2e31/4285f4?text=AAOS',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'AOSP Build System Deep Dive',
    date: 'Apr 22, 2026',
    category: 'AOSP',
    img: 'https://placehold.co/400x200/2e2e31/3ddc84?text=AOSP',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
  },
  {
    title: 'Jetpack Compose Best Practices',
    date: 'Mar 15, 2026',
    category: 'Android',
    img: 'https://placehold.co/400x200/2e2e31/ffa500?text=Compose',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
  },
  {
    title: 'Kotlin Coroutines in Android',
    date: 'Feb 28, 2026',
    category: 'Kotlin',
    img: 'https://placehold.co/400x200/2e2e31/7f52ff?text=Kotlin',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
  },
]

const Blog = () => (
  <section className="blog">
    {/* <div className="blog-grid">
      {posts.map((post) => (
        <article key={post.title} className="blog-card">
          <a href="#" className="blog-img-wrap">
            <img src={post.img} alt={post.title} />
            <span className="blog-category">{post.category}</span>
          </a>
          <div className="blog-body">
            <span className="blog-date">{post.date}</span>
            <h3><a href="#">{post.title}</a></h3>
            <p>{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div> */
    <div className="blog-placeholder">To be continued...</div>}
  </section>
)

export default Blog
