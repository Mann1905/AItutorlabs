import React, { Suspense } from "react";
import blogMeta from "../../../data/blogmeta";
import Header from '../../../components/01_header/header';
import Footer from '../../../components/02_footer/footer';

export default function BlogDashboard({ params }) {
    const { id } = params;
    const blog = blogMeta.find((b) => b.id === id);

    const BlogComponent = React.lazy(() => import(`../../../blog/${id}.jsx`));

    if (!blog) return <div>Blog not found</div>;

    return (
        <main>
            <Header />
            <div className="blog-content">
                <Suspense fallback={<div>Loading blog...</div>}>
                    <BlogComponent />
                </Suspense>
            </div>
            <Footer />
        </main>
    );
}