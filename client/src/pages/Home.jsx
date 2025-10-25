import { MoveRight } from 'lucide-react';
import Card from '../componente/Card';
import FeatureSection from '../componente/FeatureSection';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useProducts } from '../hooks/useProducts';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import SkeletonCard from '../componente/SkeletonCard';
import { useEffect } from 'react';
import privateAxios from '../api/instance/privateAxios';
// import axios from 'axios'

const BASEURL = import.meta.env.VITE_API_URL
function Home() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-0 mt-10 md:mt-4 md:px-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      Hello World
    </motion.div>
  )
}

export default Home