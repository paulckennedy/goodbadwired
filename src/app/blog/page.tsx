import { getAllPosts } from '@/lib/posts';

export default function Blog() {
  const posts = getAllPosts();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'good': return 'text-green-600 border-green-200 bg-green-50';
      case 'bad': return 'text-red-600 border-red-200 bg-red-50';
      case 'wired': return 'text-blue-600 border-blue-200 bg-blue-50';
      default: return 'text-gray-600 border-gray-200 bg-gray-50';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">The Blog</h1>
        <p className="text-xl text-gray-600">
          Real-time reports from the digital frontier. No fluff, just what's happening.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No posts yet. Newton is getting ready to start reporting...
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(post.category)}`}>
                  {post.category.toUpperCase()}
                </span>
                <time className="text-gray-500 text-sm">
                  {formatDate(post.date)}
                </time>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <a 
                  href={`/blog/${post.slug}`}
                  className="hover:text-gray-700 transition-colors"
                >
                  {post.title}
                </a>
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              
              <a 
                href={`/blog/${post.slug}`}
                className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}