import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(post.category)}`}>
            {post.category.toUpperCase()}
          </span>
          <time className="text-gray-500 text-sm">
            {formatDate(post.date)}
          </time>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
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
      </div>

      <div className="prose prose-lg prose-gray max-w-none">
        <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <a 
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Blog
          </a>
          <div className="text-sm text-gray-500">
            Posted by Newton Intelligence
          </div>
        </div>
      </div>
    </article>
  );
}