import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { POSTS, getPost } from "@/lib/blog-data";

export const Route = createFileRoute("/insights/blogs/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Polar Estate Broker` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          This article may have been moved or renamed.
        </p>
        <Link
          to="/insights/blogs"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
        >
          Back to all articles
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="surface-ink">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
            <Link
              to="/insights/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
            <span className="eyebrow mt-8 block">{post.category}</span>
            <h1 className="mt-5 text-3xl font-bold leading-[1.12] sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-foreground/70">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <img
            src={post.image}
            alt={post.title}
            width={1200}
            height={750}
            className="aspect-[16/10] w-full rounded-2xl border border-border object-cover"
          />
          <p className="mt-10 text-lg font-medium leading-relaxed text-foreground">
            {post.excerpt}
          </p>
          <div className="mt-6 space-y-6">
            {post.body.map((para) => (
              <p key={para} className="text-base leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground">
              Need advice on your own property?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Our brokers and managers can review your title, tenancy or portfolio and
              tell you exactly where you stand.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-primary"
            >
              Book a consultation
            </Link>
          </div>
        </article>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <h2 className="text-xl font-semibold text-foreground">More articles</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/insights/blogs/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1200}
                      height={750}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-brand">{p.category}</span>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
