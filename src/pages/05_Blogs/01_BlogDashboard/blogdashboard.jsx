import { HelmetProvider } from 'react-helmet-async';
import { useLocation } from "wouter";
import { useState } from 'react';

import blogMeta from "../../../data/blogmeta";

import "../01_BlogDashboard/blogdashboard.css"

import R from "../../../images/Frame 356.png"

import Header from '../../../components/01_header/header';
import Footer from '../../../components/02_footer/footer';

export default function Blog() {
    const [, navigate] = useLocation();
    const [offset, setOffset] = useState(0);

    const moveRight = () => {
    // 30% right, but never above 0%
    setOffset((prev) => Math.min(prev + 25, 0));
    };


    const moveLeft = () => {
    // 38% left (always allowed)
    setOffset((prev) => Math.max(prev - 25, -75));
    };
    return (
        <div>
            <HelmetProvider>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href="" />
            </HelmetProvider>
            <Header />
            {/*
            <div className="blogdashboard-Main">
                <h1>Latest Blogs</h1>
                <div className="blogdashboard-Latest-Flex">
                    {blogMeta.slice(0, 2).map((blog) => (
                        <div 
                        key={blog.id} 
                        className="blogdashboard-Latest-Card" 
                        onClick={() => navigate(`../../../blog/${blog.id}`)}>
                            <img src={blog.image} alt="" className="blogdashboard-Latest-Card-Cover" />
                            <div className="blogdashboard-Latest-Card-Details" >
                                <h3>{blog.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            */}
            <div className="blogdashboard-Main">
                <h2>Latest Blogs</h2>
                <div className="blogdashboard-Latest-Flex">
                {blogMeta.slice(0, 1).map((blog) => (
                    <div 
                    key={blog.id} 
                    className="blogdashboard-Latest-Card-Long" 
                    onClick={() => navigate(`../../../blog/${blog.id}`)}>
                        <img src={R} alt="" className="blogdashboard-Latest-Card-Long-Arrow" />
                        <img src={R} alt="" className="blogdashboard-Latest-Card-Cover" />
                        <div className="blogdashboard-Latest-Card-Details">
                            <h3>{blog.title}</h3>
                        </div>
                    </div>
                ))}
                {/* COMMENTED OUT - Second card (title 2)
                {blogMeta.slice(1, 2).map((blog) => (
                    <div 
                    key={blog.id} 
                    className="blogdashboard-Latest-Card" 
                    onClick={() => navigate(`../../../blog/${blog.id}`)}>
                        <img src={R} alt="" className="blogdashboard-Latest-Card-Arrow" />
                        <img src={blog.image} alt="" className="blogdashboard-Latest-Card-Cover" />
                        <div className="blogdashboard-Latest-Card-Details">
                            <h3>{blog.title}</h3>
                        </div>
                    </div>
                ))}
                */}
                </div>
            </div>
            {/* COMMENTED OUT - Older Uploads section
            <div className="blogdashboard-Grid-Navigation">
                <h2>Older Uploads</h2>
                <div className="blogdashboard-Grid-Navigation-Buttons">
                    <button><img onClick={moveRight} src={R} alt="" /></button>
                    <button><img onClick={moveLeft} src={R} alt="" /></button>
                </div>
            </div>
            
            <div className="blogdashboard-Grid-Main">
                <div className="blogdashboard-Grid-Flex" style={{ transform: `translateX(${offset}%)`, }}>
                    {blogMeta.slice(0, 9).map((blog) => (
                        <div 
                        key={blog.id} 
                        className="blogdashboard-Grid-Card" 
                        onClick={() => navigate(`/blog/${blog.id}`)}>
                            <img src={R} alt="" className="blogdashboard-Grid-Card-Arrow" />
                            <img src={blog.image} alt="" className="blogdashboard-Grid-Card-Cover" />
                            <div className="blogdashboard-Grid-Card-Details">
                                <h3>{blog.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            */}
            <Footer />
        </div>
    );
}
